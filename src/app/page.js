import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../../public/hero.png";
//components
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Mellow.Blog Webblog for Everyone
        </h1>
        <p className={styles.desc}>
          This is a weblog, a collection of information gathered from everyone
          who visits.
        </p>
        <Button url="/blog" text="See Our Blog" />
      </div>
      <div className={styles.item1}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
