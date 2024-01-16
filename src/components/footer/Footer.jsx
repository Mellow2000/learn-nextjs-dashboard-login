import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  console.log("Hello World");
  return (
    <div className={styles.container}>
      <div>©2024 Mellow. All rights reserved.</div>
      {/* <div className={styles.social}>
        <Image
          src="/1.png"
          width={15}
          height={15}
          alt="Mellow Dev Facebook Account"
          className={styles.icon}
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          alt="Mellow Dev instagram Account"
          className={styles.icon}
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          alt="Mellow Dev twitter Account"
          className={styles.icon}
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          alt="Mellow Dev Youtube Account"
          className={styles.icon}
        />
      </div> */}
    </div>
  );
};

export default Footer;
