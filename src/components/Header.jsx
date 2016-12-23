import React, { PropTypes } from 'react'

import styles from './Header.css'
import Nav from './Nav.jsx'

const Header = (props) => (
  <header className={styles["tg-header"]}>
    <h1>TheGayngle</h1>
    <Nav />
  </header>
)

export default Header
