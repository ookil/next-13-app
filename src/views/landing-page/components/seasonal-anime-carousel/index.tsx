"use client";

import { Anime, SeasonAnimeResponse } from "@/api/season";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

type Props = {
  data: Promise<SeasonAnimeResponse>;
};

export const SeasonalAnimeCarousel = ({ data }: Props) => {
  const [currentSeasonAnimes, setCurrentSeasonAnimes] = useState<Anime[]>([]);
  useEffect(() => {
    const getSeasonAnime = async () => {
      const { data: animes } = await data;
      setCurrentSeasonAnimes(animes);
    };
    getSeasonAnime();
  }, [data]);

  return (
    <div>
      <Carousel responsive={responsive}>
        {currentSeasonAnimes.map((anime) => (
          <p key={anime.mal_id}>{anime.title}</p>
        ))}
      </Carousel>
    </div>
  );
};
