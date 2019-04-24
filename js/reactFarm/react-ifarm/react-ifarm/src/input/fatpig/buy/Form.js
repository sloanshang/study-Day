import React, { Component } from 'react';
import { Field, reduxForm,change,getFormState,values } from 'redux-form';
import  {connect } from  'react-redux'
import {Button} from 'antd'
import {pregnancyCheckFormSchema} from './schema'
import {renderDatePicker,renderSelecter,renderSelecterM,renderInput ,renderRadioGroup} from '../../../common/form/FormParts'
let Form=(props)=>{

  const { data,handleSubmit, pristine, reset, submitting } = props
  let local_data = pregnancyCheckFormSchema
  if(data) {
    local_data = data.fields
  }

  let formConent = local_data.map((d,index)=>{
    let right=<div className="right" ><Field  name={d.k} type="text" /></div>
    switch(d.type){
      case 'date':
      {
//<i className="icon-angle-right"></i>
        // right=<div className="right" ><input onChange={changeFunc}  name={d.k} type="text" value={d.v} defaultValue={d.v} /> <i className="icon-calendar"></i></div>
        // right=<div className="right"><DatePicker name={d.k} className="datepicker" dateFormat="YYYY-MM-DD" showClearButton={false} style={{ border:'none'}} value={d.v}/><span style={{display:'block',float:'right'}}> <i className="icon-calendar"></i></span></div>

        right=<div className="right" ><Field component={renderDatePicker}  name={d.k} type="text"   /> </div>

        break
      }
      case 'dropDownList':
      {
        let data = ["f1","f2","f3"]
        right=<div className="right" ><Field component={renderSelecter} data={data}   name={d.k} type="text" required/> </div>
        break
      }
      case 'multiSelect':{
        let data = ["f1","f2","f3","f4","f5","f6"]
        right=<div className="right" ><Field component={renderSelecterM} data={data}
                                             name={d.k} type="text" required/> </div>
        break
      }
      case 'radio':{
        right = <div class="right"><Field component={renderRadioGroup} name={d.k} type="text" /></div>
        break;
      }
      default:
        right=<div className="right" ><Field component={ renderInput }   name={d.k} type="text" /> </div>
    }


    return (
      <div className="formRow" key={index}><div className="left">{d.n}:</div>{right}</div>
    )
  })

  return (

    <form onSubmit={handleSubmit}>

      {formConent}

      <div className="saveButton"><Button htmlType="submit" type="primary submit" disabled={submitting} >保存</Button></div>
    </form>
  )
}
Form = reduxForm({
  form: 'fatPigBuyForm'
})(Form)

Form = connect(
  (state,ownProps) =>
  {
    return {...ownProps}
  }
)(Form)

export default Form

