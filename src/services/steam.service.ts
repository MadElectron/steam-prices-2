import steam from "../api/steam.ts";
import axios from "axios";
import type {
  SteamGameDetailsResponse,
  SteamSearchResponse,
} from "../types/steam.js";

export const getSteamApps = async (
  name: string,
): Promise<SteamSearchResponse> => {
  try {
    const query = encodeURIComponent(name);
    const response = await steam.search(query);
    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      console.error(e.response?.data);
    } else {
      console.error(e);
    }

    throw new Error("Невозможно получить список игр Steam");
  }
};

export const getSteamAppDetails = async (
  appId: string,
): Promise<SteamGameDetailsResponse> => {
  try {
    const response = await steam.gameDetails(appId);
    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      console.error(e.response?.data);
    } else {
      console.error(e);
    }

    throw new Error("Невозможно получить данные об игре Steam");
  }
};
