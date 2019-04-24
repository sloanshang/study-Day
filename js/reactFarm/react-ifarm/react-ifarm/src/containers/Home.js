import React, {Component} from 'react';
import {Link} from 'react-router'
import  {Table} from 'react-bootstrap'
import logo from '../images/logo.png'
import home1 from '../images/home1.png'
import pig from '../images/pig.png'
import Header from '../common/containers/Header'
import {scanQRCode, uploadImage} from '../common/weixin/weixin'
class Home extends Component {

    render() {
   
        return (
            <div>
                <Header hide title="应用"/>
                <div
                    className="container home-header"
                    style={{
                    paddingTop: '40px'
                }}>
                    <div className="home_header"><img
                        style={{
                width: '50px',
                height: '50px',
                float: 'left',
                marginTop: '10px'
            }}
                        src={logo}/>
                        <h3
                            style={{
                            float: 'left'
                        }}>正大平台</h3><img
                            style={{
                width: '120px',
                height: '70px',
                float: 'right'
            }}
                            src={pig}/></div>
                    <Table  bordered condensed hover>
                     <tbody>
                     <tr><td style={{textAlign:'center'}}><Link  to="/farms"><img style={{width:'64px',height:'67px'}} src={home1}/></Link></td><td onClick={()=>scanQRCode()}>scanQRCode</td><td onClick={()=>uploadImage()}>uploadImage</td><td></td></tr>
                     <tr><td></td><td></td><td></td><td></td></tr>
                     <tr><td></td><td></td><td></td><td></td></tr>
                     </tbody>
                 </Table>
                 
                </div>
            </div>
        )
    }
}
export default Home;
