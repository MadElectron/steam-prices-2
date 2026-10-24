import request from "../utils/request.ts";
import type { MtsRateResponse } from "../types/mts.js";

const baseURL = "https://keys.foreignpay.ru";

export default {
  checkRate(amount: number) {
    return request<MtsRateResponse>("/webhook/v2/topup/check_rate", {
      baseURL,
      method: "get",
      params: {
        amount,
      },
    });
  },
};
