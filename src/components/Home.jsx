import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import styles from './Home.css'
import ArticleExcerpt from './ArticleExcerpt.jsx'

const mapStateToProps = state => ({ posts: state.posts })

function renderFeatured(posts) {
  return posts.map((post, index) => (
    <ArticleExcerpt key={index} {...article} />
  ))
}

function renderStandard(posts) {
  if (posts.length === 0) {
    return <div className={styles["no-articles-message"]}>No Articles Exist</div>
  }
  return posts.map((post, index) => (
    <ArticleExcerpt key={index} {...post} />
  ))
}

class Home extends React.Component {
  render () {
    const { posts } = this.props
    const featuredPosts = posts.filter(post => post.type === 'featured')
    const standardPosts = posts.filter(post => post.type === 'standard')
    return (
      <main className={styles["tg-content-container"]}>
        <section className={styles["content"]}>
          <div className={styles["featured-articles"]}>{renderFeatured(featuredPosts)}</div>
          <div className={styles["articles"]}>{renderStandard(standardPosts)}</div>
        </section>
        <aside className={styles["sidebar"]}></aside>
      </main>
    )
  }
}

export default connect(
  mapStateToProps
)(Home)
