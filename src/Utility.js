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

export function updateVotes(votes, articleId) {
  return apiLink.patch(`/articles/${articleId}`, { inc_votes: votes });
}

export function addComment(articleId, comment) {
  
  return apiLink.post(`/articles/${articleId}/comments`, comment);
  
}

export function getTopics() {
    return apiLink.get('/topics').then(({data}) => {
        return data
    })
}

export function GetSingleTopic(slug) {
  return apiLink.get(`topics/${slug}`).then(({data}) => {
    return data
  })
}
