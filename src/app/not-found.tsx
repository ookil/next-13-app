import { ROUTE_PATHS } from "@/constants/routing";
import Link from "next/link";
import styles from "./page.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href={ROUTE_PATHS.INDEX}>Go to main page </Link>
    </div>
  );
};

export default NotFound;
