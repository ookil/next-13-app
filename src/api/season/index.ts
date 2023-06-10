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

export type CurrentSeasonAnimeResponse = {
  pagination: { current_page: number };
  data: Anime[];
};

export const getCurrentSeasonAnime =
  async (): Promise<CurrentSeasonAnimeResponse> => {
    const res = await fetch(`${process.env.API_URL}/seasons/now`);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  };
