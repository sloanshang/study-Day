import  React from 'react'
import  {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'
import { Tabs ,DatePicker} from 'antd';
const TabPane = Tabs.TabPane;
import * as config from '../../common/config'
import  Header from '../../common/containers/Header'
import Search from '../../common/containers/Search'
import Header2 from '../../common/components/Header2'
import Form1 from './Form1'
import Form2 from './Form2'
import Form3 from './Form3'
import {schema1} from './schema1'
import {schema2} from './schema2'
import {schema3} from './schema3'
import {showConfirm} from '../../common/dialog'
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
export class Stock extends React.Component{

  static  defaultProps={
    tabIndex:1
  }

  constructor(props) {
    super(props);
    this.state = {
      
      isEdit:false,
      tabIndex:1,
      editData:{}
    };
  }
  componentDidMount() {
    // you can scroll to the specified position
    // this.refs.lv.refs.listview.scrollTo(0, 200);
 
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

dateChangeFunc(v){
  console.log(v)
}
  render(){
    let farmName = !!localStorage.farmName?localStorage.farmName:'';
    const {tabIndex,isEdit,editData} = this.state
    let tabContent=<div></div>
    /*if(tabIndex==2) {
      if(isEdit){
        let kv={}
        editData.fields.map(d=>{
            kv[d.k]=d.v
          }
        )
        kv['editData']=editData
        tabContent =<Form key={tabIndex}  onSubmit={this.handleSubmit}  initialValues={kv} data={editData} name="mate" />
      }else{
        tabContent = <div >
          tab2
        </div>
      }

    }else{
      tabContent =<Form key={tabIndex}  onSubmit={this.handleSubmit}  initialValues={{f0:moment()}} name="mate" />
    }*/
    if(tabIndex==1){
     
      tabContent =<Form1   onSubmit={this.handleSubmit}  initialValues={{f0:moment()}} name="stock1" schema={schema1} />
    }else if(tabIndex==2){
     
      tabContent =<Form2   onSubmit={this.handleSubmit}  initialValues={{f0:moment()}} name="stock2"  schema={schema2}/>
    }else{
      
      tabContent =<Form3   onSubmit={this.handleSubmit}  initialValues={{f0:moment()}} name="stock3"  schema={schema3}/>
    }
     

    return <div>  <Header  title="库存盘点"/>
      <Search  onChange={(v)=>this.searchChange(v)} />
      <Header2 title={farmName}/>
      <div className="container container2" style={{ marginBottom:'0.5rem'}}>
        <p>盘存日期:<DatePicker defaultValue={moment()} onChange={(v)=>this.dateChangeFunc(v)} style={{width:'70%',float:'right'}}/></p>
        <Tabs onTabClick={(i)=>this.tab(i)} type="card">
          <TabPane tab="猪只" key="1">{tabContent}</TabPane>
          <TabPane tab="饲料" key="2">{tabContent}</TabPane>
          <TabPane tab="药品疫苗" key="3">{tabContent}</TabPane>
        </Tabs>
      </div>
    </div>
  }
}


export default connect()(Stock)
