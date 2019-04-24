import React, { Component, PropTypes } from 'react'
class InputsRow extends Component{
    static propTypes = {
        title: PropTypes.string.isRequired
    }
    handleClick(){
        this.props.onClick()
    }
    render(){
        return(
            <div className="inputs_row"  onClick={()=>this.handleClick()} >
              <div className="left" style={this.props.leftStyle}></div><div className="title">{this.props.title}</div>
        </div>)
    }
}
export  default InputsRow;
