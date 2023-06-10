import React from "react";
import styles from "./component.module.css";
import Image from "next/image";

type Props = {
  title: string;
  imgUrl: string;
  href?: string;
};

export const StyledCard = ({ imgUrl, title }: Props) => {
  return (
    <div className={styles.card}>
      <Image src={imgUrl} alt={title} width={180} height={252} />
    </div>
  );
};
