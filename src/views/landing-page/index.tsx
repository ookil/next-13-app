import React from "react";
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
      <h4>{dateTime}</h4>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <SeasonalAnimeCarousel data={seasonAnimeData} />
      </Suspense> */}
      {/* {seasonAnimes.data.map((item) => (
        <p key={item.mal_id}>{item.title}</p>
      ))} */}
      {/*  <AnimeSelector animes={seasonAnimes.data} /> */}

      {/* why is this glitching? */}
      <SeasonalAnimeCarouselv2 animes={seasonAnimes} />
    </div>
  );
};
