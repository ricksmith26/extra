import React, { Component } from 'react';

class Articles extends Component {
  state = {
    article_id: '',
    topic_id: ''
  };
  render() {
    return (
      <div className="articlesDiv">
        <ListArticles {...this.ListArticles} />
      </div>
    );
  }
  ListArticles = ({ articles }) => {
    return articles.map(function(article) {
      return (
        <div>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
        </div>
      );
    });
  };
}

export default Articles;
