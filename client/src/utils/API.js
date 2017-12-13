import axios from "axios";

export default {
  // Gets all articles
  getarticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getarticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deletearticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a article to the database
  savearticle: function(articleData) {
    return axios.post("/api/articles/saved", articleData);
  },
  getSavedarticles: function() {
    return axios.get("/api/saved");
  },
  scrapeArticles: function() {
    return axios.get("/api/scrape");
  },

};
