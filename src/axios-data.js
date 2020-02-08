import axios from "axios";
export const key = "c77614016b93433d8ba60347728e7098";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});
export default instance;
