import React from 'react';

function articlesByTopic({ topicArticles }) {
  return (
    <div className="articlesDiv">
      {/* <select id="topicList" onChange={this.handleTopicChange}>
        {Object.values(this.props.topics).map(topic => {
          return <option value={topic.title}>{topic.title}</option>;
        })}
      </select>; */}
      <ul>
        {topicArticles.map(function(topicArticle) {
          return (
            <li>
              <br />
              <b>{topicArticle.title}</b>
              <br />
              <br />
              {topicArticle.body}
              <br />
              {topicArticle.created_by}
              <br />
              {topicArticle.belongs_to}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default articlesByTopic;
