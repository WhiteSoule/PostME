import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.common["Authorisation"] =
  "Bearer" + localStorage.getItem("token");
