import React, { Component } from 'react';
import * as api from '../api';

class Articles extends Component {
  state = {
    article_id: '',
    topic_name: '',
    topicArticles: []
  };

  async componentDidMount() {
    const articleByT = await api.fetchArticleByTopic(this.state.topic_name);
    this.setState({ TopicArticles: articleByT });
  }
  render() {
    // console.log(this.props);

    return (
      <div className="articlesDiv">
        <select id="topicList" onChange={this.handleTopicChange}>
          {Object.values(this.props.topics).map(topic => {
            return <option value={topic.title}>{topic.title}</option>;
          })}
        </select>
        <ul>
          {this.props.articles.map(function(article) {
            return (
              <li>
                <br />
                <b>{article.title}</b>
                <br />
                <br />
                {article.body}
                <br />
                {article.created_by}
                <br />
                {article.belongs_to}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  handleTopicChange = event => {
    console.log('hit listener');
    this.setState({ topic_name: event.target.value });
  };
}

export default Articles;
