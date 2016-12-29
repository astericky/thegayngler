import * as types from '../constants/actionTypes'

export const startFetchPosts = () => (
  dispatch => {
    dispatch(requestPosts())
    dispatch(recievePosts([]))
  }
)

export const requestPosts = () => ({
  type: types.REQUEST_POSTS,
})

export const recievePosts = posts => ({
  type: types.RECIEVE_POSTS, posts,
})
