import React from 'react';
import { Link } from 'react-router-dom';

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
              <br />
              {article.created_by}
              <br />
              {article.belongs_to}
              <br />

              <Link to={`/articles/${article._id}/comments`}>
                {' '}
                <button id={article._id}>Comments:{article.comments}</button>
              </Link>
              <button>Vote up</button>
              <button>Vote down</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AllArticles;
