import  React from 'react'
import  {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'
import { ListView } from 'antd-mobile';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import * as config from '../../../common/config'
import  Header from '../../../common/containers/Header'
import Search from '../../../common/containers/Search'
import Header2 from '../../../common/components/Header2'
import Form from './Form'
import {showConfirm} from '../../../common/dialog'
function MyBody(props) {
  return (
    <div className="am-list-body my-lv-body">
      {props.children}
    </div>
  );
}

// let index = data.length - 1;

let NUM_SECTIONS = 0;
let NUM_ROWS_PER_SECTION = 0;
let pageIndex = 0;
export class Sale extends React.Component{

  static  defaultProps={
    tabIndex:1
  }
  updateData(){
    this.sectionIDs=[]
    for (let i = 0; i < this.data.length; i++) {
      this.sectionIDs.push(i);
      this.rowIDs[i] = [];
      for (let jj = 0; jj < this.data[i].rows.length; jj++) {
        this.rowIDs[i].push(jj);
      }
    }
  }
  constructor(props) {
    super(props);
    this.data=[]
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => {
      if(dataBlob.length==0){
        return {}
      }else{
        return  dataBlob[sectionID].rows[rowID]
      }
    };

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.lastPage=0
    this.sectionIDs = [];
    this.rowIDs = [];
    this.hasMore=true;
    this.genData = () => {
      let page= Math.ceil(  (this.data.length+config.PAGE_SIZE) /config.PAGE_SIZE)
      if(this.lastPage == page){
        return
      }
      this.lastPage =page
      const url = config.BASIC_URL+'/testapi/mate?_limit='+config.PAGE_SIZE+'&_page='+page

      return fetch(url)
        .then(res => res.json())
        .then(json => {
          console.log(json)
          this.data = this.data.concat(json)

          this.updateData()

          if(json.length < config.PAGE_SIZE){
            this.hasMore = false
          }
          console.log({"data.length":this.data.length,'sectionLength':this.sectionIDs.length,'rowslength':this.rowIDs.length})
          this.setState(Object.assign({...this.state},{
            dataSource: this.state.dataSource.cloneWithRowsAndSections(this.data, this.sectionIDs, this.rowIDs),
            isLoading: false,
            hasMore:this.hasMore
          }));
        })

      // new object ref
      this.sectionIDs = [].concat(this.sectionIDs);
      this.rowIDs = [].concat(this.rowIDs);
    };

    this.state = {
      dataSource: dataSource.cloneWithRowsAndSections( this.data, this.sectionIDs, this.rowIDs),
      isLoading: true,
      isEdit:false,
      tabIndex:1,
      editData:{}
    };
  }
  componentDidMount() {
    // you can scroll to the specified position
    // this.refs.lv.refs.listview.scrollTo(0, 200);
    this.genData()
  }

  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading || !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    //getMore
    this.setState(Object.assign({...this.state},{ isLoading: true }));
    this.genData();
  }

  tab(tabIndex){

    this.setState(Object.assign({...this.state},{tabIndex,isEdit:false}))


  }
  handleSubmit(values){
    let obj={}
    Object.keys(values).map(k=>{
      obj[k] = values[k] instanceof moment ?  values[k].format('YYYY-MM-DD') :values[k]
    })
    console.log(obj);
  }
  del(sectionID,rowID){
    console.log(sectionID+'  '+rowID)
    let sec = this.data[sectionID]

    let filterRows =  []
    sec.rows.forEach((d,index)=>{
      if(index !=rowID) filterRows.push(d)
    })
    sec.rows= filterRows
    this.data[sectionID] =sec
    showConfirm({
      content:'确定要删除吗?',
      okFunc:()=>{
        this.updateData()
        this.setState(Object.assign({},{...this.state},{data:this.data}))
        //todo remote del
      }
    })
  }
  edit(sectionID,rowID){
    console.log(sectionID+'  '+rowID)
    let editData= this.data[sectionID].rows[rowID]
    this.setState(Object.assign({...this.state},{editData,isEdit:true}))
  }
  render(){
    let farmName = !!localStorage.farmName?localStorage.farmName:'';
    const {tabIndex,isEdit,editData} = this.state
    let tabContent=<div></div>
    if(tabIndex==2) {
      if(isEdit){
        let kv={}
        editData.fields.map(d=>{
            kv[d.k]=d.v
          }
        )
        kv['editData']=editData
        tabContent =<Form key={tabIndex}  onSubmit={this.handleSubmit}  initialValues={kv} data={editData} name="mate" />
      }else{
        const separator = (sectionID, rowID) => (
          <div key={`${sectionID}-${rowID}`} style={{
            backgroundColor: '#F5F5F9',
            height: 8,
            borderTop: '1px solid #ECECED',
            borderBottom: '1px solid #ECECED',
          }}
          />
        );
        const row = (rowData, sectionID, rowID) => {

          const obj = this.data[sectionID].rows[rowID];
          const ff = obj.fields.map(d=>{
            return <div>
              <p><span> {d.n}</span>:<span> {d.v}</span> </p>
            </div>
          })
          return (
            <div key={rowID} className="lv_row">
              <div className="dayTitle">{obj.date}<span onClick={()=>this.del(sectionID,rowID)} ><i className="icon-trash"></i></span><span onClick={()=>this.edit(sectionID,rowID)} ><i className="icon-edit"></i></span></div>
              {ff}
            </div>
          );
        };
        tabContent = <div >
          <ListView ref="lv"
                    dataSource={this.state.dataSource}
            // renderHeader={()=><span></span>}
                    renderFooter={() => <div style={{padding: 30, textAlign: 'center'}}>
                      {this.state.isLoading ? '加载中...' : '加载完毕'}
                    </div>}
                    renderSectionHeader={sectionData => (
                      <div className="weekTitle">{sectionData.section}</div>
                    )}

                    renderBodyComponent={() => <MyBody />}
                    renderRow={row}
                    renderSeparator={separator}
                    className="fortest"
                    style={{
                      height: '485px',
                      overflow: 'auto',
                      margin: '0.1rem 0',
                    }}
                    pageSize={config.PAGE_SIZE}
                    scrollRenderAheadDistance={500}
                    scrollEventThrottle={20}
                    onScroll={() => {
                      {/*console.log('scroll');*/}
                    }}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={10}
          />
        </div>
      }

    }else{
      tabContent =<Form key={tabIndex}  onSubmit={this.handleSubmit}  initialValues={{f0:moment()}} name="mate" />
    }

    return <div>  <Header  title="猪只销售"/>
      <Search  onChange={(v)=>this.searchChange(v)} />
      <Header2 title={farmName}/>
      <div className="container container2" style={{ marginBottom:'0.5rem'}}>
        <Tabs onTabClick={(i)=>this.tab(i)} type="card">
          <TabPane tab="添加" key="1">{tabContent}</TabPane>
          <TabPane tab="明细/修改" key="2">{tabContent}</TabPane>
        </Tabs>
      </div>
    </div>
  }
}
const mapStateToProps=state=>{
  return {...state.pregnancyCheckReducer}
}

export default connect(mapStateToProps)(Sale)
