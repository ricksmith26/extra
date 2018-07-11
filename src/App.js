import React, { Component } from 'react';
import './App.css';
import * as api from './api';
import Articles from './component/articles';

class App extends Component {
  state = {
    articles: [],
    users: []
  };
  componentDidMount = async () => {
    const articles = await api.fetchArticles();
    const users = await api.fetchUsers();

    this.setState({ articles, users });
  };
  render() {
    console.log(this.state.articles, '<<<<<<');
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Northcoder News</h1>
        </header>
        <p className="App-intro">Bringing the lasted news to Northcoders</p>

        <Articles {...this.state.articles} />
      </div>
    );
  }
}

export default App;
