import axios from "axios";

export default {
  // Gets all quotes
  getQuotes: function () {
    return axios.get("/api/quotes");
  },
  // Gets all new quote requests
  getNewQuotes: function () {
    return axios.get("/api/quotes");
  },
  // Gets the quote with the given id
  getQuote: function (id) {
    return axios.get("/api/quotes/" + id);
  },
  // Updates the quote with the given id
  updateQuote: function (id) {
    return axios.put("/api/quotes/" + id);
  },
  // Deletes the quote with the given id
  deleteQuote: function (id) {
    return axios.delete("/api/quotes/" + id);
  },
  // Saves a Quote to the database
  saveQuote: function (quoteData) {
    return axios.post("/api/quotes", quoteData);
  }
};