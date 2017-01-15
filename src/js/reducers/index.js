import { combineReducers } from 'redux'
import * as types from '../constants/actionTypes'

// The DATA:
// const initialState = {
//   mode: edit or view,
//   post: {},
//   posts: [{}],
// }

function mode(state = `view`, action) {
  switch (action.type) {
    case types.CHAGE_MODE:
      return action.mode
    default:
      return state
  }
}

function post(state = {
  title: `Title`,
  date: `Jan, 1 2017`,
  tags:  ``,
  post: `empty post`,
}, action) {
  switch (action.type) {
    case types.CHANGE_POST:
    case types.REQUEST_POST:
    case types.RECIEVE_POST:
      return {
        ...action.post,
      }
    default:
      return state
  }
}

function posts(state = [], action) {
  switch (action.type) {
    case types.ADD_POST:
      return state
    case types.REMOVE_POST:
      return state
    case types.REQUEST_POSTS:
      return state
    case types.RECIEVE_POSTS:
      return action.posts
    default:
      return state
  }
}


export default combineReducers({
  mode,
  post,
  posts,
})
