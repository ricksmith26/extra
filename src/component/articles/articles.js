import React, { Component } from 'react';
import * as api from '../../api';
import AllArticles from './allArticles';
import articlesByTopic from './articlesByTopic';
import { Route, NavLink } from 'react-router-dom';

class Articles extends Component {
  state = {
    article_id: '',
    topic_name: '',
    topicArticles: []
  };

  async componentDidMount() {
    const articleByT = await api.fetchArticleByTopic(this.state.topic_name);
    console.log(articleByT, '<><><><>><');
    this.setState({ TopicArticles: articleByT });
  }
  render() {
    console.log(this.state.topic_name, '<<<<<<<<<');

    return (
      <div className="articlesDiv">
        {/* <select id="topicList" onChange={this.handleTopicChange}>
          {Object.values(this.props.topics).map(topic => {
            return <option value={topic.title}>{topic.title}</option>;
          })}
        </select> */}
        {/* ---------------------------------------------------------------
          PUT THE BELOW LIST INTO A SEPARATE FUNCTION ON ANOTHER PAGE 
          THEN, ALSO TO DO THE SAME FOR FIND ARTICLES BY TOPICS     
          <Route
          exact
          path="/topics/"
          render={() => <StudentAdder addStudent={this.addStudent} />}
        />
 --------------------------------------------------------------------        */}

        <Route
          exact
          path="/"
          render={() => <AllArticles articles={this.props.articles} />}
        />
        <Route
          exact
          path="/articlesByTopic"
          render={() => (
            <articlesByTopic
              topicArticles={this.props.topicArticles}
              topic_name={this.props.topic_name}
            />
          )}
        />
      </div>
    );
  }
  handleTopicChange = event => {
    this.setState({ topic_name: event.target.value });
  };
}

export default Articles;
