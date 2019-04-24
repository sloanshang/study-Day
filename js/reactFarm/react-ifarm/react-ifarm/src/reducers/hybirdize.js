import * as types from '../constants/ActionTypes'
import * as config from '../common/config'
export default function hybirdizeReducer (state={data:[],hasMore:true}, action)  {
  switch (action.type) {
    case types.ADD_HYBIRDIZE:
      return Object.assign({data:state.data,hasMore:state.hasMore},action)
    case types.DEL_HYBIRDIZE:
      let data = state.data.map(week=>{
        let t =  week.items.filter(d=>d.id !=action.id)
        week.items =t
        return week
      })
      return Object.assign({data:state.data,hasMore:state.hasMore},action)
    case types.FETCH_HYBIRDIZE:
      return Object.assign({data:state.data,hasMore:state.hasMore},action)
    case types.RECEIVE_HYBIRDIZE:
      state.data= state.data.concat(action.data)
      if(action.data.length < config.PAGE_SIZE){
        action.hasMore = false;
      }else{
        action.hasMore = true
      }
      return Object.assign(action,{data:state.data})
    case types.EDIT_HYBIRDIZE:
      return Object.assign({data:state.data,hasMore:state.hasMore},action)
    case types.TAB:
      return Object.assign({data:state.data,hasMore:state.hasMore},action)
    case types.RECEIVE_POST:
      return Object.assign({data:state.data,hasMore:state.hasMore},action)
    default:
      return state
  }
}

