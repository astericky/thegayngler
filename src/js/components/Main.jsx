import React from 'react'

import styles from '../../css/Main.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

const Main = (props) => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default Main
