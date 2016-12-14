import React from 'react'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import Main from './Main.jsx'
import Home from './Home.jsx'

const Root = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>
)

export default Root
