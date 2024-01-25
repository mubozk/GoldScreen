import axios from "axios";
import { URLS, api_key } from "../../constants";

export default axios.create({
  baseURL: URLS.baseTmdb,
  params: {
    api_key,
  },
});
