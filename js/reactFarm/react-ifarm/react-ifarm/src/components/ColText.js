import React, { Component } from 'react';
import {BLUE_COLOR} from '../common/config'
class ColText extends Component{
    render(){
        let data = this.props.data
        let vStyle={width:'100%',fontWeight:900}
        if(data.isColor){
            vStyle.color=BLUE_COLOR
        }
        return(<div style={{width:data.width ,float:'left',textAlign:'center'}}>
            <div style={vStyle}>{data.value}</div>
            <div style={{ width:'100%'}}>{data.name}</div>
        </div>)
    }
}
export  default ColText;
