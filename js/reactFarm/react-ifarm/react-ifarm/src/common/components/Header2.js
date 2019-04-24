import React, { Component,PropTypes} from 'react';
import header2 from '../../images/header2.png'
import '../../css/style.css'
class Header extends Component{
    static PropTypes = {
        title: PropTypes.string.isRequired
    }
    render(){
        return <div className="header2" style={this.props.style}>
           <img style={{position:'fixed',margin:'3px'}} src={header2}/><span style={this.props.titleStyle}>{this.props.title}</span>
        </div>
    }
}
export  default Header;
