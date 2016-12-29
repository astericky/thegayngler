import React, { PropTypes } from 'react'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import { Provider } from 'react-redux'

import Main from './Main.jsx'
import Home from './Home.jsx'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
      </Route>
    </Router>
  </Provider>
)

Root.proptTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
