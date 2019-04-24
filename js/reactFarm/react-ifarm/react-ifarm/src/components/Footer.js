import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router';
import {connect} from 'react-redux'
import classname from 'classnames'
import '../css/style.css'
import '../css/font-awesome.min.css'
import * as C from '../common/constants'
class Footer extends Component{
  static  defaultProps={
        farmCode:localStorage.getItem("farmCode")? localStorage.getItem("farmCode"): C.DEFAULT_FARM_CODE
    }
    constructor(props){
        super(props);
        this.state={home:false, schedules: false, inputs: false, reports: false, my: false ,farmCode:props.farmCode}

    }
    handleClick = (name) => {

        switch (name) {
            case "/farm/"+this.props.farmCode2:
                this.setState({ home:true, schedules: true, inputs: false, reports: false, my: false,farmCode:this.props.farmCode })
            case "/schedules":
                this.setState({ home:false,schedules: true, inputs: false, reports: false, my: false ,farmCode:this.props.farmCode})
                break
            case "/inputs":
                this.setState({home:false, schedules: false, inputs: true, reports: false, my: false,farmCode:this.props.farmCode })
                break
            case "/reports":
                this.setState({home:false, schedules: false, inputs: false, reports: true, my: false ,farmCode:this.props.farmCode})
                break
            case "/my":
                this.setState({ home:false,schedules: false, inputs: false, reports: false, my: true,farmCode:this.props.farmCode })
                break
            default:
                this.setState({home:false, schedules: false, inputs: false, reports: false, my: true ,farmCode:this.props.farmCode})
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.farmCode2 != this.props.farmCode2 && nextProps.farmCode2){
           this.setState(Object.assign( {...this.state},{farmCode:nextProps.farmCode2}) )
        }
    }

    render(){
        let pathname = this.props.path
       const farmCode = localStorage.getItem('farmCode')
       let isHideFooter = false
       if(pathname==='/' || pathname==='/farms'){
             isHideFooter = true
       }
     
        return(
            <footer id="footer-nav" className={classname({hide:isHideFooter})} >
                <ul className="menu-list" style={{margin:0,padding:0}}>
                    <li ><IndexLink to= {`/farm/${farmCode}`} activeClassName="active" onClick={() => this.handleClick('/farm/'+farmCode)}><i className="icon-home"></i><span>主页</span></IndexLink>  </li>
                    <li ><Link activeClassName="active" to='/schedules' onClick={() => this.handleClick('/schedules')}><i className="icon-list"></i><span>日程</span></Link></li>
                    <li ><Link activeClassName="active" to="/inputs" onClick={() => this.handleClick('/inputs')}><i className="icon-edit"></i><span>录入</span></Link></li>
                    <li ><Link activeClassName="active" to="/reports" onClick={() => this.handleClick('/reports')}><i className="icon-folder-open"></i><span>报表</span></Link></li>
                    <li ><Link activeClassName="active" to="/my" onClick={() => this.handleClick('/my')}><i className="icon-user"></i><span>我的</span></Link></li>
                </ul>

            </footer>
         )
    }
}
const mapStateToProps=state=>{
    return {farmCode2:state.farmReducer.farmCode2}
}
export  default connect(mapStateToProps)(Footer);
