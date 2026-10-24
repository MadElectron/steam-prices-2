export interface SteamSearchApp {
  appid: string;
  name: string;
  icon: string;
  logo: string;
}

export type SteamSearchResponse = SteamSearchApp[];

interface SteamGameDetailsResponse {
  [key: string]: {
    success: boolean;
    data: {
      steam_appid: string;
      name: string;
      price_overview: SteamAppPriceOverview;
    };
  };
}

interface SteamAppPriceOverview {
  currency: string;
  initial: number;
  final: number;
  discount_percent: number;
  final_formatted: string;
  initial_formatted: string;
}
