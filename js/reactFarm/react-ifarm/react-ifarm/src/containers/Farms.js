import React, { Component, PropTypes } from 'react'
import  {connect} from 'react-redux'
import {Link} from 'react-router'
import { bindActionCreators } from 'redux'
import farms_item_pig from '../images/farms-item-pig.png'
import * as actions from '../actions'
import Search from '../common/containers/Search'
import  Header2 from '../common/components/Header2'
class Farms extends Component{
    componentWillMount() {
        this.props.actions.fetchFarms()
    }

    searchChange(v){
        console.log(v)
        let data1 = !!this.props.results? this.props.results.farms:[];
        if(v==''){
            this.setState({'isSearch':false});
        }else{
            let data=[];
            data1.find((d)=>{
                if(d.farmCode===v || d.farmName.indexOf(v)>=0){
                    data.push(d)
                }
            })
            if(data){
                this.setState({isSearch:true,searchResults:data})
            }
        }
    }
    handleClick(d){
        localStorage.farm= JSON.stringify(d);
        localStorage.farmName=d.farmName;
        this.props.dispatch({farmCode:d.farmCode,type:'changeFarmCode'})
    }
    render(){
        let data = !!this.props.results? this.props.results.farms:[];
        if(this.state && this.state.isSearch){
            data = this.state.searchResults;
        }
        if(data&&data.length>0){
            data = data.map((d)=>{
                    d.imgurl=farms_item_pig;
                    return d
                }
            )
            var farmsItems=  data.map(d=>
                <Link to={`farm/${d.farmCode}`} key={d.farmCode}>
                    <div  className="farms-item" onClick={()=>this.handleClick(d)} >
                        <img src={d.imgurl} width='100px' height='100px'/>
                        <div className="farms-item-title">{d.farmName}</div>
                    </div>
                </Link>
            )

        }else{
            var farmsItems=[];
        }

        return(
            <div>
                <Header2   title="猪管理" style={{top:'0px'}} titleStyle={{paddingLeft:'0px',textAlign:'center'}}/>
                <Search  data={data}  onChange={(v)=>this.searchChange(v)} />
                <div className="container  farms" style={{paddingTop:'60px'}}>
                    {farmsItems}
                </div>
              <div className="farmsTel">咨询电话: 4006026995</div>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    return{
        'results':state.farmReducer.results
    }
}
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
    dispatch
})
export  default  connect(mapStateToProps,mapDispatchToProps)(Farms);


