import { CurrentSeasonAnimeResponse } from "@/api/season";
import { StyledCard } from "@/components/styled-card";
import { StyledCarousel } from "@/components/styled-carousel";
import React from "react";

import styles from "./component.module.css";

type Props = {
  animes: CurrentSeasonAnimeResponse;
};

export const SeasonalAnimeCarouselv2 = ({ animes }: Props) => {
  const { data } = animes;
  return (
    <div className={styles.seasonSection}>
      <StyledCarousel>
        {data.map((anime) => (
          <StyledCard
            key={anime.mal_id}
            imgUrl={anime.images.jpg.image_url}
            title={anime.title}
          />
        ))}
      </StyledCarousel>
    </div>
  );
};
