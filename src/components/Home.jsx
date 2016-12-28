import React, { PropTypes } from 'react'

import styles from './Home.css'
import ArticleExcerpt from './ArticleExcerpt.jsx'

function renderArticles(articles = [
  {
    title: "Fake Title",
    date: "Jan 1, 2017",
    tags: "stuff, stuff, stuff, stuff",
    post: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    title: "Fake Title",
    date: "Jan 1, 2017",
    tags: "stuff, stuff, stuff, stuff",
    post: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    title: "Fake Title",
    date: "Jan 1, 2017",
    tags: "stuff, stuff, stuff, stuff",
    post: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
]) {
  return articles.map((article, index) => (
    <ArticleExcerpt key={index} {...article} />
  ))
}

class Content extends React.Component {
  render () {
    return (
      <main className={styles["tg-content-container"]}>
        <section className={styles["content"]}>
          <article className={styles["featured-article"]}></article>
          {renderArticles()}
        </section>
        <aside className={styles["sidebar"]}></aside>
      </main>
    )
  }
}

export default Content
