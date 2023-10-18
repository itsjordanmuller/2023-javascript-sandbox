import axios from "axios";

class IdeasAPI {
  constructor() {
    // Development
    this._apiURL = "http://localhost:5000/api/ideas";
    // Production - Must use "npm run build" to set
    // this._apiURL = "/api/ideas";
  }

  getIdeas() {
    return axios.get(this._apiURL);
  }

  createIdea(data) {
    return axios.post(this._apiURL, data);
  }

  updateIdea(id, data) {
    return axios.put(`${this._apiURL}/${id}`, data);
  }

  deleteIdea(id) {
    const username = localStorage.getItem("username")
      ? localStorage.getItem("username")
      : "";
    return axios.delete(`${this._apiURL}/${id}`, {
      data: {
        username,
      },
    });
  }
}

export default new IdeasAPI();
