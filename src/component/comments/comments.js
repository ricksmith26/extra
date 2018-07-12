import React, { Component } from 'react';
import * as api from '../../api';
import { Route } from 'react-router-dom';
import getCommentsForArticle from '../../api';
// import Loading from '../loadingScreen';

// function CommentsAdder(props) {
//   // const com = api.getCommentsForArticle(props.match.params.article_id);
//   // console.log(com, '<<<<<<<<<<<<<<<<<');
//   return <div>test</div>;
// }

class CommentsAdder extends Component {
  state = {
    article: []
  };
  async componentDidMount() {
    const article = await api.getCommentsForArticle(
      this.props.match.params.article_id
    );
    console.log(article);

    this.setState({ article });
  }

  render() {
    if (!this.state.article.length) return <h1>Loading...</h1>;
    return <div>{this.state.article[0].body}</div>;
  }
}

export default CommentsAdder;

// { this.state.article[0].body }
