"use client";

import { ROUTE_PATHS } from "@/constants/routing";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styled from "styled-components";

const SContainer = styled.div`
  background: rgba(223, 217, 217, 0.25);
  backdrop-filter: blur(4px);
`;

const STopNav = styled.div`
  width: 100%;
  box-shadow: -1px 5px 4px rgba(0, 0, 0, 0.35);
  background-color: #000;
  padding: 0.7rem 2rem;
`;

const SBottomNav = styled.div`
  padding: 1rem 2rem;
`;

const SLogoText = styled.h1`
  font-weight: normal;
  text-shadow: rgba(255, 255, 255, 0.25) 0px 4px 4px;
`;

const SLink = styled(Link)<{ $isActive: boolean }>`
  padding: 1rem 2rem;
  font-size: 1.6rem;
`;

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <SContainer>
      <STopNav>
        <Link href={ROUTE_PATHS.INDEX}>
          <SLogoText>BLING BLING OTAKU</SLogoText>
        </Link>
      </STopNav>
      <SBottomNav>
        <SLink
          href={ROUTE_PATHS.ANIME}
          $isActive={pathname.startsWith(ROUTE_PATHS.ANIME)}
        >
          Anime
        </SLink>
        <SLink
          href={ROUTE_PATHS.MANGA}
          $isActive={pathname.startsWith(ROUTE_PATHS.MANGA)}
        >
          Manga
        </SLink>
      </SBottomNav>
    </SContainer>
  );
};
