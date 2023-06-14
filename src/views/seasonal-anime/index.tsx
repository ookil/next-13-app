import { getSeasonAnime } from "@/api/season";
import { MarginContainer } from "@/components/margin-container";
import React from "react";
import { SeasonNavigation } from "./components/navigation";
import { AnimeList } from "./components/list";

type Props = {
  year: string;
  season: string;
};

export const SeasonalAnimeView = async ({ year, season }: Props) => {
  const seasonData = await getSeasonAnime({ year, season });

  return (
    <MarginContainer>
      <SeasonNavigation />
      {/* Fetch initial data on the server and 
      then next pages are fetched on the client and merged into a list
      but client fetches aren't cached -> caching with 3rd party library
      */}
      <AnimeList initialData={seasonData} />
    </MarginContainer>
  );
};
