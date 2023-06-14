"use client";

import { ROUTE_PATHS } from "@/constants/routing";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";
import styles from "./component.module.scss";
import { usePathname } from "next/navigation";

enum Season {
  Winter = "winter",
  Spring = "spring",
  Summer = "summer",
  Fall = "fall",
}

export const SeasonNavigation = () => {
  const pathname = usePathname();
  const year = format(new Date(), "yyyy");
  const getHref = (year: string, season: string) =>
    ROUTE_PATHS.ANIME_SEASONAL_SELECTED.replace("[year]", year).replace(
      "[season]",
      season
    );

  const links = Object.values(Season);

  return (
    <div className={styles.wrapper}>
      <div className={styles.linksWrapper}>
        {links.map((season) => (
          <Link
            key={season}
            className={`${styles.link} ${
              pathname.includes(season) ? styles.activeLink : ""
            }`}
            href={getHref(year, season)}
          >
            {season} {year}
          </Link>
        ))}
      </div>
    </div>
  );
};
