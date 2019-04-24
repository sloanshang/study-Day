import React from 'react';
import { Field, reduxForm,change,getFormState,values } from 'redux-form';
import  {connect } from  'react-redux'

import {Form} from './Form'
let Form2 = reduxForm({
  form: 'stock2Form'
})(Form)

Form2 = connect(
  (state,ownProps) =>
  {
    return {...ownProps}
  }
)(Form2)

export default Form2