import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { items } from "./data";
//components
import Button from "@/components/button/Button";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  console.log(data);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button url="#" text="See More" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              height="0"
              width="0"
              sizes="100vw"
              priority={true}
              alt="img portforio"
              src={item.image}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
