"use client";

import { Anime } from "@/api/season";
import { StyledCarousel } from "@/components/styled-carousel";
import React, { useState } from "react";

type Props = {
  animes: Anime[];
};

export const AnimeSelector = ({ animes }: Props) => {
  const [selectedTitle, setSelectedTitle] = useState("");
  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Selector</h2>
      <h3>Selected title: {selectedTitle}</h3>
      <br />
      {animes.map((item) => (
        <button key={item.mal_id} onClick={() => setSelectedTitle(item.title)}>
          {item.title}
        </button>
      ))}
    </div>
  );
};
