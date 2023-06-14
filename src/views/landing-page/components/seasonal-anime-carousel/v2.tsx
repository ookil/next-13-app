import { SeasonAnimeResponse } from "@/api/season";
import { StyledCard } from "@/components/styled-card";
import { StyledCarousel } from "@/components/styled-carousel";
import React from "react";

import styles from "./component.module.css";
import { ROUTE_PATHS } from "@/constants/routing";

type Props = {
  animes: SeasonAnimeResponse;
};

export const SeasonalAnimeCarouselv2 = ({ animes }: Props) => {
  const { data } = animes;
  return (
    <div className={styles.seasonSection}>
      <p className={styles.title}>Seasonal anime</p>
      <StyledCarousel>
        {data.map((anime) => (
          <StyledCard
            key={anime.mal_id}
            imgUrl={anime.images.jpg.image_url}
            title={anime.title}
            href={`${ROUTE_PATHS.ANIME}/${anime.mal_id}`}
          />
        ))}
      </StyledCarousel>
    </div>
  );
};
