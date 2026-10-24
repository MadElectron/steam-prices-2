import { getTengeRates } from "../services/mts.service.ts";
import { getPlatiSearchResult } from "../services/plati.service.ts";
import { getSteamAppDetails, getSteamApps } from "../services/steam.service.ts";
import type { NormalizedPlatiItem } from "../types/plati.js";
import { getRubPrice } from "../utils/currency.ts";
import { getMostRelevantApp } from "../utils/steam.ts";

const RATE_DEFAULT_VALUE = 10000;
const MTS_PAYMENT_FEE_RUB = 50;

export const getPriceData = async (
  name: string,
): Promise<AppDataSuccess<GamePriceData> | AppDataError> => {
  try {
    const apps = await getSteamApps(name);
    const foundApp = getMostRelevantApp(name, apps);

    const appId = foundApp.appid;
    const gameDetails = await getSteamAppDetails(appId);
    const priceOverview = gameDetails[appId].data.price_overview;
    const price = gameDetails[appId].data.price_overview.final / 100;
    const rates = await getTengeRates(RATE_DEFAULT_VALUE);
    const tengeRate = rates.kzt_topup;
    const paymentMtsPrice = getRubPrice(price, +tengeRate, RATE_DEFAULT_VALUE);
    const platiResult = await getPlatiSearchResult(`${foundApp.name} steam`);
    const platiItems: NormalizedPlatiItem[] = platiResult.items.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price_rur,
      url: item.url,
    }));
    const query = encodeURIComponent(name);
    const platiLink = `https://plati.market/search/${query}`;

    return {
      success: true,
      data: {
        name: foundApp.name,
        steam: {
          defaultPrice: priceOverview.initial / 100,
          currentPrice: priceOverview.final / 100,
        },
        mts: {
          price: Math.ceil(+paymentMtsPrice),
          finalPrice: Math.ceil(+paymentMtsPrice) + MTS_PAYMENT_FEE_RUB,
        },
        plati: {
          items: platiItems,
          link: platiLink,
        },
      },
    };
  } catch (e) {
    const message = e instanceof Error ? e.message : (e as string);

    return {
      success: false,
      error: message,
    };
  }
};
