import React, { Component, PropTypes } from 'react'
import HybirdizeEditItem from './HybirdizeEditItem'

class HybirdizeEditWeek extends Component{
    static propTypes = {
        // name: PropTypes.string.isRequired,
        // value: PropTypes.string.isRequired,
        // onChange: PropTypes.func.isRequired
    }
    getInputValue = () => {
        return this.refs.input.value
    }
    setInputValue = (val) => {
        this.refs.input.value = val
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setInputValue(nextProps.value)
        }
    }
    onEditClick(v){
      console.log(v)
    }
    onChange(){
        this.props.onChange(this.getInputValue())
    }
    render(){
        const data=[
            {mather:'ff',father:'fss',man:'man',day:"2017-12-1"}
        ]
        let items =data.map(d=>
        <HybirdizeEditItem key={d} d={d} onClick={(v)=>this.onEditClick(v)} />
        )
        return(
            <div>
            <div className="HybirdizeEditWeek"   >
               <i className="icon-comment"/> <div  >{this.props.week}</div><i className="icon-chevron-down"/>
            </div>
                {items}
            </div>
        )
    }
}
export  default HybirdizeEditWeek;
