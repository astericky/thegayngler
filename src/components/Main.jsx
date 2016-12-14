import React from 'react'

import styles from './Main.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

const Main = (props) => (
  <div className={styles.main}>
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default Main
