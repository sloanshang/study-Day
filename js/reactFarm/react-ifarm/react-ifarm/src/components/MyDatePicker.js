import React,{Component} from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
export  default  class MyDatePicker extends  Component{
    constructor(props, context) {
        super(props, context);
        this.state.date = moment().format();
    }
    handleChange(date) {
        this.setState({
            date: date
        });
    }
    render(){
        return(
        
             <DatePicker selected={this.state.date} onChange={(v)=>this.handleChange(v)} />
            
        )
    }
}