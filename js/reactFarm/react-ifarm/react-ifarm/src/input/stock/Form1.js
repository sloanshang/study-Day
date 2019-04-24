import React from 'react';
import { Field, reduxForm,change,getFormState,values } from 'redux-form';
import  {connect } from  'react-redux'

import {Form} from './Form'
let Form1 = reduxForm({
  form: 'stock1Form'
})(Form)

Form1 = connect(
  (state,ownProps) =>
  {
    return {...ownProps}
  }
)(Form1)

export default Form1

