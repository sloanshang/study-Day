import  React from 'react'
import KVList from '../components/KVList'
class ItemList extends React.Component{
 static propTypes={
    // data:React.PropTypes.object.required
  }
  constructor(props){
    super(props)
  }
  render(){
    let weekList=<div></div>

    if(this.props.data &&  this.props.data.length>0){
      weekList = this.props.data.map((d,index)=>{
        let weekItems = d.items.map((d2,index)=><KVList key={index} data={d2} id={d.id}/>)
          return <div key={index} >
            <div className="weekTitle">{d.date}</div>
            {weekItems}
          </div>
      })
    }

    return(
      <div>
        {weekList}
      </div>
    )
  }
}
export default ItemList
