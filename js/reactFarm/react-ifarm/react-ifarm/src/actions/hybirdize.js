import * as types from '../constants/ActionTypes'
import * as config from '../common/config'
export const addHybirdize=()=>({type:types.ADD_HYBIRDIZE,tabIndex:1})
export const delHybirdize=id=>({type:types.DEL_HYBIRDIZE,tabIndex:2,id })
export const editHybirdize=(id,editData)=>({type:types.EDIT_HYBIRDIZE,tabIndex:2,id,editData })
export const switchTab=(index)=>({type:types.TAB,tabIndex:index})
export const fetchHybirdize=start=>dispatch=>{
  // return {type:types.FETCH_HYBIRDIZE,data }
  let page= Math.ceil(start/config.PAGE_SIZE)
  page=page?page:1
  const url = config.BASIC_URL+'/testapi/hybirdize?_limit=1&_page='+page
  return fetch(url)
    .then(res => res.json())
    .then(json => dispatch({type:types.RECEIVE_HYBIRDIZE,tabIndex:2, data:json}))
}
export const postHybirdize=data=>dispatch=>{
  const url= config.BASIC_URL+'/testapi/hybirdize'
  return fetch(url,{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(data)
}).then(res=>res.json()).then(json=> dispatch({type:types.TAB,tabIndex:2})).catch(err=>console.log(err))
}

