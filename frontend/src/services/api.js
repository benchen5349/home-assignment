import axios from 'axios';

const API_URL = "http://localhost:8000/api"; // Django dev server

export const getArticles = () => axios.get(`${API_URL}/articles/`);
export const getArticle = (id) => axios.get(`${API_URL}/articles/${id}/`);
export const addComment = (articleId, commentData) =>
  axios.post(`${API_URL}/articles/${articleId}/add_comment/`, commentData);

// fixed task 4: to get fund data from api 
export const getFunds = () => axios.get(`${API_URL}/funds/`);