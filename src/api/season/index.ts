export type Anime = {
  mal_id: string;
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
    images: {
      image_url: string;
    };
  };
};

export type SeasonAnimeResponse = {
  pagination: {
    current_page: number;
    has_next_page: boolean;
    items: { total: number };
  };
  data: Anime[];
};

export const getCurrentSeasonAnime = async (): Promise<SeasonAnimeResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/seasons/now`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const getSeasonAnime = async ({
  year,
  season,
  page = 1,
}: {
  year: string;
  season: string;
  page?: number;
}): Promise<SeasonAnimeResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seasons/${year}/${season}?page=${page}`
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
