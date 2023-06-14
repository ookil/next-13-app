"use client";

import { SeasonAnimeResponse, getSeasonAnime } from "@/api/season";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

type Props = {
  initialData: SeasonAnimeResponse;
};

export const AnimeList = ({ initialData }: Props) => {
  const { year, season } = useParams();
  const { data, pagination } = initialData;
  const [items, setItems] = useState(data);
  const [paginationData, setPaginationData] = useState({
    page: pagination.current_page,
    hasMore: pagination.has_next_page,
    totalCount: pagination.items.total,
  });

  console.log({ paginationData });

  const loadMore = async () => {
    console.log("loading");
    const newData = await getSeasonAnime({
      year,
      season,
      page: paginationData.page + 1,
    });

    setItems((prev) => [...prev, ...newData.data]);
    const { pagination } = newData;
    setPaginationData({
      page: pagination.current_page,
      hasMore: pagination.has_next_page,
      totalCount: pagination.items.total,
    });
  };

  return (
    <div
      id="scrollableDiv"
      style={{ height: "500px", overflow: "auto", paddingBottom: "10px" }}
    >
      <InfiniteScroll
        dataLength={items.length}
        hasMore={paginationData.hasMore}
        next={loadMore}
        loader={
          <span key={0} className="loader">
            Loading ...
          </span>
        }
        scrollableTarget="scrollableDiv"
      >
        {items.map((anime, index) => (
          <div key={anime.mal_id} style={{ height: "10rem" }}>
            <p>
              {index} {anime.title}{" "}
            </p>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};
