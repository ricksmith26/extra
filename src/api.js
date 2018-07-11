import axios from 'axios';
import Articles from './component/articles';

const URL = 'https://northcodernewsapp.herokuapp.com/api';

export const fetchArticles = async query => {
  const res = await axios.get(`${URL}/articles`);
  return res.data.articles;
};

export const fetchUsers = async query => {
  const res = await axios.get(`${URL}/users`);
  return res.data.users;
};

export const fetchTopics = async query => {
  const res = await axios.get(`${URL}/topics`);
  return res.data.topics;
};

export const fetchArticleByTopic = async topic_name => {
  const res = await axios.get(
    `${URL}/topics/${this.state.topic_name}/articles`
  );
  return res.data.topics;
};
