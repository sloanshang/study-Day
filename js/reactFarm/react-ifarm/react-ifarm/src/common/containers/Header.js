import React, { Component, PropTypes } from 'react'
import  classname from 'classnames'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
class Header extends Component{
    handleClick(){
        browserHistory.goBack()
    }
    render(){
        const  title = this.props.title
        const right=this.props.right
        return (
            <div className="header">
                <div className={ classname({hide:this.props.hide},'headerLeft')} onClick={()=>this.handleClick()}><i className="icon-chevron-left"></i></div>
                <div className="headerMiddle"><strong>{title}</strong></div>
              <div className="headerRight">{right}</div>
            </div>
        )
    }
}
export  default connect()(Header)
