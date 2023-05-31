import axios from "axios";

const apiLink = axios.create({
  baseURL: "https://jb-news.onrender.com/api",
});

export function getArticles(endpoint = "/articles/") {
  return apiLink.get(endpoint).then(({ data }) => {
    if (data.items) {
      return data;
    } else {
      return data;
    }
  });
}
export function getComments(articleId) {
    return apiLink.get(`articles/${articleId}/comments`).then(({ data }) => {
      return data.comments;
    });
  }
  
export function getArticle(articleId) {
  return apiLink.get(`/articles/${articleId}`).then(({ data }) => {
    return data;
  });
}
