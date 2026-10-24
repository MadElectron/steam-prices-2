import plati from "../api/plati.ts";
import axios from "axios";
import type { PlatiSearchResponse } from "../types/plati.js";

export const getPlatiSearchResult = async (
  name: string,
): Promise<PlatiSearchResponse> => {
  try {
    const response = await plati.search(name);

    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      console.error(e.response?.data);
    } else {
      console.error(e);
    }

    throw new Error("Невозможно получить список товаров Plati.Market");
  }
};
