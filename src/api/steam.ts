import type {
  SteamGameDetailsResponse,
  SteamSearchResponse,
} from "../types/steam.js";
import request from "../utils/request.ts";

export default {
  search(query: string) {
    return request<SteamSearchResponse>(`/actions/SearchApps/${query}`, {
      baseURL: "https://steamcommunity.com",
      method: "get",
    });
  },
  gameDetails(appId: string) {
    return request<SteamGameDetailsResponse>("/api/appdetails", {
      baseURL: "https://store.steampowered.com",
      method: "get",
      params: {
        cc: "kz",
        appids: appId,
      },
    });
  },
};
