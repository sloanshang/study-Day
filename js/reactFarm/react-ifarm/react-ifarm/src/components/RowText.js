import React, { Component } from 'react';
import {BLUE_COLOR} from '../common/config'
class RowText extends Component{
    render(){
        let data = this.props.data
        let vStyle={width:'50%',fontWeight:900}
        if(data.isColor){
            vStyle.color=BLUE_COLOR
        }
        return(<div style={{width:data.width ,float:'left',textAlign:'center'}}>
            <span style={{width:'50%'}}>{data.name}:</span>
            <span style={vStyle}>{data.value}</span>
        </div>)
    }
}
export  default RowText;
