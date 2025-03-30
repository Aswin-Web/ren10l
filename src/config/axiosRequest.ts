import axios from "axios";
import { SERVER_URL } from "./config";
export const axiosRequest = axios.create({
  baseURL: SERVER_URL,
  timeout: 10000,
  //   headers: { "X-Custom-Header": "foobar" },
  withCredentials: true,
});
