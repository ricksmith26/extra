import axios from 'axios';

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
