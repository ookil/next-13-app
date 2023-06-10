import React, { Suspense } from "react";
import { SeasonalAnimeCarousel } from "./components/seasonal-anime-carousel";
import { getCurrentDateTime } from "@/api/datetime";
import { getCurrentSeasonAnime } from "@/api/season";
import { SeasonalAnimeCarouselv2 } from "./components/seasonal-anime-carousel/v2";

export const LandingPageView = async () => {
  const dateTimeData = getCurrentDateTime();
  const seasonAnimeData = getCurrentSeasonAnime();

  /* const dateTime = await dateTimeData; */

  //wait for all data
  const [dateTime, seasonAnimes] = await Promise.all([
    dateTimeData,
    seasonAnimeData,
  ]);

  return (
    <div>
      <h1>{dateTime}</h1>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <SeasonalAnimeCarousel data={seasonAnimeData} />
      </Suspense> */}
      <SeasonalAnimeCarouselv2 animes={seasonAnimes} />
    </div>
  );
};
