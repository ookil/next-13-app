import React, { ReactNode } from "react";

import styles from "./component.module.scss";

type Props = {
  children: ReactNode;
};

export const MarginContainer = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};
