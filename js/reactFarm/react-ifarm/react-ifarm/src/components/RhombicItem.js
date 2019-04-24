import React, { Component, PropTypes } from 'react'
class  RhombicItem extends Component{
    static propTypes = {
        title: PropTypes.string.isRequired
    }
    handleClick(){
        this.props.onClick()
    }
    render(){
         return   <div className="rhombicItem" onClick={()=>this.handleClick()}>
                <div className="rhombic" style={this.props.rhombicStyle}/><div className="text">{this.props.title}</div>
            </div>
    }
}
export default RhombicItem