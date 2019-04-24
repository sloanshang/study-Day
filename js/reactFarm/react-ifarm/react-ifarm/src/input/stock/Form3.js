import React from 'react';
import { Field, reduxForm,change,getFormState,values } from 'redux-form';
import  {connect } from  'react-redux'

import {Form} from './Form'
let Form3 = reduxForm({
  form: 'stock3Form'
})(Form)

Form3 = connect(
  (state,ownProps) =>
  {
    return {...ownProps}
  }
)(Form3)

export default Form3