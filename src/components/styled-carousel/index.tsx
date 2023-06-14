"use client";

import React, { ReactNode } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 9000, min: 1024 },
    items: 8,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

type Props = {
  children: ReactNode;
};

export const StyledCarousel = ({ children }: Props) => {
  return (
    <Carousel centerMode infinite responsive={responsive}>
      {children}
    </Carousel>
  );
};
