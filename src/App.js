import React, { Component } from 'react';
import './App.css';
import * as api from './api';
import Articles from './component/articles/articles';
import { NavLink } from 'react-router-dom';

class App extends Component {
  state = {
    articles: [],
    users: [],
    topics: []
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
        <Nav />
        <header className="App-header">
          <h1 className="App-title">Northcoder News</h1>
        </header>
        <p className="App-intro">Bringing the lasted news to Northcoders</p>

        <Articles articles={this.state.articles} topics={this.state.topics} />
      </div>
    );
  }
}

function Nav() {
  const activeStyle = {
    background: 'red'
  };
  return (
    <div>
      <NavLink exact to="/" activeStyle={activeStyle}>
        Home
      </NavLink>
      {` | `}
      <NavLink exact to="/articlesByTopic" activeStyle={activeStyle}>
        search by topic
      </NavLink>
      {/* {` | `}
      <NavLink exact to="/addStudent" activeStyle={activeStyle}>
        Add Student
      </NavLink>{' '} */}
    </div>
  );
}
export default App;
