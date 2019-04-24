import React, { Component, PropTypes } from 'react'

class InputsRowEdit extends Component{
    static propTypes = {
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
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
    onRowClick(){
        this.props.onRowClick()
    }
    onChange(){
        this.props.onChange(this.getInputValue())
    }
    render(){
        let right=''
        switch(this.props.type){
            case 'date':
            {
                right=<i className="icon-calendar"></i>
                break
            }
            default:
                 right=<i className="icon-angle-right"></i>
        }
        return(
            <div className="inputs_row_edit"  onClick={()=>this.onRowClick()} >
              <div className="name" >{this.props.name}</div><div className="value"><input style={{height:'26px',border:'none'}} ref="input" type="text" defaultValue={this.props.value} onChange={()=>this.onChange()}/> </div><div className="type">{right}</div>
        </div>)
    }
}
export  default InputsRowEdit;
