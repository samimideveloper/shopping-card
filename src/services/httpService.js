import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

const http = {
  get: axios.get,
  post: axios.post,
  delet: axios.delete,
  put: axios.put,
};

export default http;
