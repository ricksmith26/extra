import React, { Component } from 'react';
import * as api from '../../api';
import moment from 'moment';

class CommentsAdder extends Component {
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
    console.log(this.state.article.data);
    if (!this.state.comments.length) return <h1>Loading...</h1>;
    return (
      <div>
        <h2>{this.state.article.data.title}</h2>
        <h3>{this.state.article.data.body}</h3>
        <ul>
          {this.state.comments.map(function(comment) {
            return (
              <li>
                {comment.body}
                <br />
                <br />
                votes:{comment.votes}
                <br />
                <br />
                {moment(comment.created_at).fromNow()}
                <br />
                <br />
              </li>
            );
          })}
        </ul>
        <input type="text" />
        <button>submit comment</button>
        <br />
        <br />
      </div>
    );
  }
}

export default CommentsAdder;

// { this.state.article[0].body }
