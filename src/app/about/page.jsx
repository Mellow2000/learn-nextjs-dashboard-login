import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
//components
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://cdn.pixabay.com/photo/2023/12/08/10/25/church-8437403_1280.jpg"
          height={800}
          width={800}
          priority={true}
          alt="img Images"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Where does it come from?</h1>
          <p className={styles.desc}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
            <br />
            <br />
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
            Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
            written in 45 BC. This book is a treatise on the theory of ethics,
            very popular during the Renaissance. The first line of Lorem Ipsum,
            "Lorem ipsum dolor sit amet..", comes from a line in section
            1.10.32.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Where can I get some?</h1>
          <p className={styles.desc}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum,
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <div className={styles.btn}>
            <Button url="/contact" text="Contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
