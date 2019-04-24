import React from 'react'
import moment from 'moment'
import { Field, reduxForm } from 'redux-form'
import { DatePicker } from 'antd';
export const renderDatePicker = ({input,...rest }) =>{
  // defaultValue={{val: input.value}}    onChange={param => input.onChange(param.val)} 
  let day = !! input.value? new Date(input.value):new Date()
  const zhNow = moment().locale('zh-cn').utcOffset(8);
const maxDate = moment('2016-12-03 +0800', 'YYYY-MM-DD Z').utcOffset(8);
const minDate = moment('2015-08-06 +0800', 'YYYY-MM-DD Z').utcOffset(8);

const maxTime = moment('22:00 +0800', 'HH:mm Z').utcOffset(8);
const minTime = moment('08:30 +0800', 'HH:mm Z').utcOffset(8);
  /*return  <DatePicker mode='date'   title="选择日期"
          >
      <input {...input} value={day} defaultValue={day}   onBlur={() => input.onBlur(input.value)}  format="YYYY-MM-DD"  {...rest}/>
      </DatePicker>*/
      let t = !!input.value? moment(input.value,"YYYY-MM-DD").utcOffset(8): zhNow
return <DatePicker {...input} {...rest} defaultValue={zhNow} value={t} onBlur={() => input.onBlur(input.value)}/>
}