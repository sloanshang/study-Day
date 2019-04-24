import React from 'react'
import moment from 'moment'
import { DatePicker ,Select,Input,Radio} from 'antd';
const Option = Select.Option;
export const renderInput=({input,...rest})=>{
  return <Input {...input} {...rest}/>
}
export const renderDatePicker = ({input,...rest }) =>{
  // defaultValue={{val: input.value}}    onChange={param => input.onChange(param.val)}
  let day = !! input.value? new Date(input.value):new Date()
  const zhNow = moment().locale('zh-cn').utcOffset(8);
  // const maxDate = moment('2016-12-03 +0800', 'YYYY-MM-DD Z').utcOffset(8);
  // const minDate = moment('2015-08-06 +0800', 'YYYY-MM-DD Z').utcOffset(8);
  // const maxTime = moment('22:00 +0800', 'HH:mm Z').utcOffset(8);
  // const minTime = moment('08:30 +0800', 'HH:mm Z').utcOffset(8);

  let t = !!input.value? moment(input.value,"YYYY-MM-DD").utcOffset(8): zhNow
  return <DatePicker {...input}  defaultValue={zhNow} value={t} onBlur={() => input.onBlur(input.value)}/>
}

export const renderSelecter=({input,...rest})=>{
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return <Select
   {...input}
    showSearch
    style={{ width: 200 }}
    placeholder="Select a person"
    optionFilterProp="children"

    filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
   
  >
  {
  rest.data.map(d=>
    <Option value={d}>{d}</Option>
    )
  }

  </Select>
}
export const renderSelecterM=({input,...rest})=>{
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return  <Select
    multiple
    style={{ width: '100%' }}
    placeholder=""
    onChange={(v)=>input.onChange(v)}
    onSelect={(v)=>input.onChange(v)}
    onDeselect={(v)=>input.onChange(v)}
    onBlur={() => input.onBlur()}
    value={input.value || []}
  
  >
    {
  rest.data.map(d=>
    <Option key={d} value={d}>{d}</Option>
    )
  }
  </Select>
}
export const renderRadioGroup=({input,...rest})=>{
  const RadioButton = Radio.Button;
  const RadioGroup = Radio.Group;
  return  <div>
    <RadioGroup  onChange={(v)=>input.onChange(v)} {...input} {...rest}>
      <RadioButton value="a">返情</RadioButton>
      <RadioButton value="b">流产</RadioButton>
      <RadioButton value="c">空怀</RadioButton>
    </RadioGroup>
  </div>
}
