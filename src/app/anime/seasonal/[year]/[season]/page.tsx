import { SeasonalAnimeView } from "@/views/seasonal-anime";
import React from "react";

type Props = {
  params: {
    year: string;
    season: string;
  };
};

const SeasonalAnimePage = ({ params }: Props) => {
  return <SeasonalAnimeView year={params.year} season={params.season} />;
};

export default SeasonalAnimePage;

export const revalidate = 3600;
