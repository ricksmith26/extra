import React, { Component } from 'react';
// import * as api from '../../api';
import AllArticles from './allArticles';
import ArticlesByTopic from './articlesByTopic';
import CommentsAdder from '../comments/comments';
import { Route } from 'react-router-dom';

class Articles extends Component {
  state = {
    article_id: ''
  };

  render() {
    return (
      <div className="articlesDiv">
        <Route
          exact
          path="/"
          render={() => <AllArticles articles={this.props.articles} />}
        />
        <Route
          exact
          path="/articlesByTopic"
          render={() => (
            <ArticlesByTopic
              topicArticles={this.props.topicArticles}
              topics={this.props.topics}
            />
          )}
        />
        <Route
          exact
          path="/articles/:article_id/comments"
          component={CommentsAdder}
        />
      </div>
    );
  }
}

export default Articles;
