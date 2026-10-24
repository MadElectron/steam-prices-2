import request from "../utils/request.ts";
import type { PlatiSearchResponse } from "../types/plati.js";

const baseURL = "https://plati.io";

export default {
  search(query: string) {
    return request<PlatiSearchResponse>("/api/search.ashx", {
      baseURL,
      method: "get",
      params: {
        query,
        pagesize: 5,
        pagenum: 1,
        response: "json",
      },
    });
  },
};
