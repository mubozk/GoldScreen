import axios from "axios";
import { URLS, api_key } from "../constants/config";

export default axios.create({
  baseURL: URLS.baseTmdb,
  params: {
    api_key,
  },
});
