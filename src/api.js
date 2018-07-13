import axios from 'axios';
// import Articles from './component/articles';

const URL = 'https://northcodernewsapp.herokuapp.com/api';

export const fetchArticles = async () => {
  const res = await axios.get(`${URL}/articles`);
  return res.data.articles;
};

export const fetchTopics = async () => {
  const res = await axios.get(`${URL}/topics`);
  return res.data.topics;
};

export const fetchArticleByTopic = async topic_name => {
  const res = await axios.get(`${URL}/topics/${topic_name}/articles`);
  return res;
};

export const getUser = async username => {
  const res = await axios.get(`${URL}/users/${username}`);
  return res;
};

export const getCommentsForArticle = async article_id => {
  const res = await axios.get(`${URL}/articles/${article_id}/comments`);
  return res.data.comments;
};

export const getArticleById = async article_id => {
  const res = await axios.get(`${URL}/articles/${article_id}`);
  return res;
};

export const postComment = async (article_id, comment) => {
  const res = await axios.post(
    `${URL}/articles/${article_id}/comments`,
    comment
  );
  return res;
};

export const voteArticle = async (article_id, vote) => {
  const res = await axios.put(`${URL}/articles/${article_id}`, vote);
  return res;
};

export const voteComment = async (comment_id, vote) => {
  const res = await axios.put(`${URL}/comments/${comment_id}`, vote);
  return res;
};

export const deleteComment = async comment_id => {
  const res = await axios.delete(`${URL}/comments/${comment_id}`);

  return res;
};
