import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import hybirdizeReducer from  './hybirdize'
import { reducer as formReducer } from 'redux-form'

const FARMS = 'FARMS'
const FARM = 'FARM'
const farmReducer = (state={}, action) => {
    switch (action.type) {
        case FARMS:
            if(!!action.results.login_url){
                location.href= location.protocol+'//'+ location.hostname + action.results.login_url
            }
            return {
                ['results']: {
                    type: action.type,
                    farms: action.results,
                }
            }
        case FARM:
            if(!!action.results.login_url){
                location.href= location.protocol+'//'+ location.hostname + action.results.login_url
            }
            return {
                ['results']: {
                    type: action.type,
                    farm: action.results
                }
            }
      case "changeFarmCode":
          return {farmCode2:action.farmCode}
        default:
            return state
    }
}
const rootReducer = combineReducers({
  farmReducer,
  hybirdizeReducer,
  routing,
  form:formReducer,
})

export default rootReducer
