import mts from "../api/mts.ts";
import axios from "axios";
import type { MtsRateResponse } from "../types/mts.js";

export const getTengeRates = async (
  amount: number,
): Promise<MtsRateResponse> => {
  try {
    const response = await mts.checkRate(amount);
    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      console.error(e.response?.data);
    } else {
      console.error(e);
    }

    throw new Error("Невозможно получить курс тенге payment.mts.ru");
  }
};
