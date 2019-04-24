import React, { Component, PropTypes } from 'react'
class HybirdizeEditItem extends Component{
    static propTypes = {
        // name: PropTypes.string.isRequired,
        // value: PropTypes.string.isRequired,
        // onChange: PropTypes.func.isRequired
    }
    getInputValue = (v) => {
        return `this.refs.${v}.value`
    }
    setInputValue = (e,val) => {
        `this.refs.${e}.value = val`
    }
    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.value !== this.props.value) {
    //         this.setInputValue(nextProps.value)
    //     }
    // }
    onClick(){
        this.props.onClick()
    }
    onChange(v){
        this.props.onChange(this.onChange(v))
    }
    render(){
        return(
            <div className="HybirdizeEditItem" >
                <div>
                    <div>{this.props.d.day}</div><div><i className="icon-pencil" onClick={()=>this.onClick(1)} /><i className="icon-save" onClick={()=>this.onClick(2)} /> </div>
                </div>
               <div>母猪耳号:<input ref="mother" defaultValue={this.props.d.mother} onChange={()=>this.onChange('mother')}/></div>
                <div>公猪耳号:<input ref="father" defaultValue={this.props.d.father} onChange={()=>this.onChange('father')} /></div>
                <div>配种员:<input ref="man" defaultValue={this.props.d.man} onChange={()=>this.onChange('man')}/></div>
         </div>)
    }
}
export  default HybirdizeEditItem;
