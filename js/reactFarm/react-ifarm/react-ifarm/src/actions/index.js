import fetch from 'isomorphic-fetch'
export const BASIC_URL = ''
// export const BASIC_URL = ''
export const FARMS = 'FARMS'
export const FARM = 'FARM'

const received = (type, json) => {
  console.log('received:')
  console.log(json)
  switch (type) {
    case FARMS:
      return {
        type: type,
        results: json
      }
    case FARM:
      return {
        type: type,
        results: json
      }
    default:
      return {}
  }
}

export const fetchFarms = options => (dispatch) => {
  const type = 'FARMS'
  let url = `${BASIC_URL}/api/farms`
  // let url = `${BASIC_URL}/testapi/farms`
  // let node = ''
  // if (options && options.node_id){
  //     node = `node_id=${options.node_id}`
  // }
  // if (options) {
  //     url = `${BASIC_URL}/topics?${node}&limit=${options.limit||20}&type=${options.type||'last_actived'}&offset=${options.offset||0}`
  // }
  console.log('url', url)

  return fetch(url,{credentials: 'include'})
    .then(response => response.json())
    .then(json => dispatch(received(type, json)))
}

export const fetchFarm = options => dispatch => {
  const type = 'FARM'
  let url = `${BASIC_URL}/api/chart/charts?farm_code=${options.farmCode}`
  fetch(url,{credentials: 'include'})
    .then(response => response.json())
    .then((json) => {
      dispatch(received(type, json))
      // fetch(`${BASIC_URL}/topics/${id}/replies`)
      //     .then(response => response.json())
      //     .then((json) => {
      //         results.replies = json.replies
      //         dispatch(received(type, results))
      //     })
    })
}
