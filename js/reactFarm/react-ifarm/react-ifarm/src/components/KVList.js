import React from 'react'
import  {connect} from 'react-redux'
import * as actions from '../actions/hybirdize'
import {bindActionCreators} from 'redux'
class KVList extends  React.Component{
  static propTypes={
//     data:React.PropTypes.object.required
  }
  click(t,d){
    const {dispatch ,id,data} = this.props
    if(t=='del'){
      alert('del')
      dispatch(actions.delHybirdize(d.id))
    }else if(t=='edit'){
      dispatch(actions.editHybirdize(id,data))

    }
  }
  render(){
    let items = <div></div>
    const {data} = this.props

    if(data.items && data.items.length>0){
      items= this.props.data.items.map((d)=>
        <div key={d.k} style={{width:'100%',flost:'left'}}><span>{d.n}:</span>{d.v}</div>
      )
    }
    return(
      <div>
        <div className="dayTitle">{this.props.data.date}<span onClick={()=>this.click('del',this.props.data)}><i className="icon-trash"></i></span><span onClick={()=>this.click('edit',this.props.data)}><i className="icon-edit"></i></span></div>
          <div className="dayItem">{items}</div>
      </div>
    )
  }
}
const mapStateToProps =(state,ownProps)=>{
  return {
    data:ownProps.data
  }
}
export  default connect(mapStateToProps)(KVList)
