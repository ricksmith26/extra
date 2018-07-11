import React, { Component } from 'react';

class Articles extends Component {
  state = {
    article_id: '',
    topic_id: ''
  };
  render() {
    return (
      <ul>
        {articles.map(function(article) {
          return (
            <li className="articleList">
              {article.title}
              {article.body}
            </li>
          );
        })}
      </ul>
    );
  }
  // listArticles = ({ articles }) => {
  //   return articles.map(function(article) {
  //     return (
  //       <div>
  //         <h3>{article.title}</h3>
  //         <p>{article.body}</p>
  //       </div>
  //     );
  //   });
  // };
}
{
  /* <div>
  <h3>{article.title}</h3>
  <p>{article.body}</p>
</div> */
}

export default Articles;
