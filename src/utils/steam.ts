import stringSimilarity from "string-similarity";
import type { SteamSearchApp } from "../types/steam.js";

export const getMostRelevantApp = (
  name: string,
  apps: SteamSearchApp[],
): SteamSearchApp => {
  const names = apps.map((game: { name: string }) => game.name.toLowerCase());
  const relevantItem = stringSimilarity.findBestMatch(name, names);

  return apps.find(
    (game: { name: string }) =>
      game.name.toLowerCase() === relevantItem.bestMatch.target,
  )!;
};
