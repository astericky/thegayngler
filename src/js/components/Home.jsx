import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import '../../css/Home.css'
import ArticleExcerpt from './ArticleExcerpt.jsx'

const mapStateToProps = state => ({ posts: state.posts })

function renderFeatured(posts) {
  if (posts.length === 0) {
    return <div className={styles["no-articles-message"]}>No Featured Articles Exist</div>
  }
  return posts.map((post, index) => (
    <ArticleExcerpt key={index} {...post} />
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
      <main className="tg-content-container">
        <section className="content">
          <div className="featured-articles">{renderFeatured(featuredPosts)}</div>
          <div className="articles">{renderStandard(standardPosts)}</div>
        </section>
        <aside className="sidebar"></aside>
      </main>
    )
  }
}

export default connect(
  mapStateToProps
)(Home)
