import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import styles from './Nav.css'

const Nav = (props) => (
    <nav className={styles["tg-nav"]}>
      <Link to='/about'>About</Link>
      <Link to='/contact-me'>Contact Me</Link>
    </nav>
  )

export default Nav
