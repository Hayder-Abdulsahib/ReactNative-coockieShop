import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.8.100:8000", //we must not take the / in the end so http://localhost:8000/ => will bw wrong
});

export default instance;
