import React from 'react';

function AllArticles({ articles }) {
  return (
    <div className="articlesDiv">
      <ul>
        {articles.map(function(article) {
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

export default AllArticles;
