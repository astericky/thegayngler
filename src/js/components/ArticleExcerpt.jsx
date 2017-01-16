import React, { PropTypes } from 'react'

import styles from '../../css/ArticleExcerpt.css'

const ArticleExcerpt = (props) => {
  const { title, date, tags, post } = props
  let postText = post.split('\n').map((p, index) => <p key={index}>{p.trim()}</p>)

  return (
    <article className="article-excerpt">
      <header>
        <h3>{title}</h3>
        <datetime>{date}</datetime>
      </header>
      <div className="text">{postText}</div>
      <footer>
        <span className="tags">{tags}</span>
      </footer>
    </article>
  )
}

export default ArticleExcerpt
