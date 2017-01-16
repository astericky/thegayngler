import React, { PropTypes } from 'react'

import styles from '../../css/Header.css'
import Nav from './Nav.jsx'

const Header = (props) => (
  <header className="tg-header">
    <h1>TheGayngle</h1>
    <Nav />
  </header>
)

export default Header
