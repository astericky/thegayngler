import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import throttle from 'lodash/throttle'
import { AppContainer } from 'react-hot-loader'

import * as actions from './actions'
import reducers from './reducers'
import Root from './components/Root.jsx'

const initialState = {
  mode: `view`,
  post: {},
  posts: [
    {
      type: `featured`,
      title: "Fake Title",
      date: "Jan 1, 2017",
      tags: "stuff, stuff, stuff, stuff",
      post: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
      type: `standard`,
      title: "Fake Title",
      date: "Jan 1, 2017",
      tags: "stuff, stuff, stuff, stuff",
      post: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      type: `standard`,
      title: "Fake Title",
      date: "Jan 1, 2017",
      tags: "stuff, stuff, stuff, stuff",
      post: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
  ]
}

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ))

store.dispatch(actions.startFetchPosts())

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Root store={store}/>
    </AppContainer>,
    document.getElementById('root')
  )
}

render()

if (module.hot) {
  module.hot.accept('./components/Root.jsx', render)
}
