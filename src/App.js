import React, { Component } from 'react';
import './App.css';
import * as api from './api';
import Articles from './component/articles';

class App extends Component {
  state = {
    articles: [],
    users: []
  };
  async componentDidMount() {
    const articles = await api.fetchArticles();
    const users = await api.fetchUsers();
    const topics = await api.fetchTopics();

    this.setState({ articles, users, topics });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Northcoder News</h1>
        </header>
        <p className="App-intro">Bringing the lasted news to Northcoders</p>

        <Articles articles={this.state.articles} topics={this.state.topics} />
      </div>
    );
  }
}

export default App;
