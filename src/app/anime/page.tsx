import { ROUTE_PATHS } from "@/constants/routing";
import Link from "next/link";
import React from "react";

const AnimePage = () => {
  return (
    <>
      <div>AnimePage</div>
      <Link href={ROUTE_PATHS.ANIME_SEASONAL}>Go to seasonal anime</Link>
    </>
  );
};

export default AnimePage;
