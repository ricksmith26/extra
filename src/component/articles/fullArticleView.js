import React, { Component } from 'react';
import * as api from '../../api';

import { Link } from 'react-router-dom';

class fullArticleView extends Component {
  state = {
    comments: [],
    article: []
  };
  async componentDidMount() {
    const comments = await api.getCommentsForArticle(
      this.props.match.params.article_id
    );
    const article = await api.getArticleById(
      this.props.match.params.article_id
    );

    this.setState({ comments, article });
  }

  render() {
    if (!this.state.comments.length) return <h1>Loading...</h1>;
    return (
      <div>
        <h2>{this.state.article.data.title}</h2>
        <h3>{this.state.article.data.body}</h3>
        <br />
        {this.state.article.data.created_by}
        <br />
        <Link to={`/articles/${this.state.article.data._id}/comments`}>
          {' '}
          <p> commments: {this.state.article.data.comments}</p>
        </Link>
      </div>
    );
  }
}

export default fullArticleView;
