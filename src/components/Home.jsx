import React, { PropTypes } from 'react'

import styles from './Home.css'

const Content = (props) => (
  <main className={styles["tg-content-container"]}>
    <section className={styles["content"]}></section>
    <aside className={styles["sidebar"]}></aside>
  </main>
)

export default Content
