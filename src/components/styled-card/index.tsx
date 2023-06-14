import React from "react";
import styles from "./component.module.scss";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  imgUrl: string;
  href: string;
};

export const StyledCard = ({ imgUrl, title, href }: Props) => {
  return (
    <div className={styles.card}>
      <Image src={imgUrl} alt={title} width={180} height={252} />
      <div className={styles.titleWrapper}>
        <Link className={styles.link} href={href}>
          {title}
        </Link>
      </div>
    </div>
  );
};
