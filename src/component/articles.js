import React, { Component } from 'react';

class Articles extends Component {
  state = {
    article_id: '',
    topic_id: ''
  };
  render() {
    console.log(this.props);
    return (
      <div className="articlesDiv">
        <ul>
          {this.props.articles.map(function(article) {
            return (
              <li>
                <br />
                <b>{article.title}</b>
                <br />
                <br />
                {article.body}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Articles;
