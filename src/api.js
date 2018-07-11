import axios from 'axios';

const URL = 'https://northcodernewsapp.herokuapp.com/api';

export const fetchArticles = async query => {
  const articles = await axios.get(`${URL}/articles`);
  return articles;
};

export const fetchUsers = async query => {
  const users = await axios.get(`${URL}/users`);
  return users;
};
