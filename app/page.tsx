import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <p>main page</p>
      <Link href="/sub" />
    </div>
  );
}
