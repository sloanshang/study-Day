import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
class Search extends Component{
    static propTypes = {
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
    handleKeyUp = (e) => {
        this.props.onChange(this.getInputValue())
        // if (e.keyCode === 13) {
        // this.handleGoClick()
        // }
    }
    handleGoClick = () => {
        this.props.onChange(this.getInputValue())
    }
    render(){
        return (
            <div className="search" style={this.props.style}>
                <i className="icon-search "></i>
                <input
                       ref="input"
                       defaultValue=''
                       onKeyUp={this.handleKeyUp} onChange={this.handleKeyUp} />
            </div>
        )
    }
}
export  default Search