"use client";
import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
//components
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession, signIn } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "HOME",
    url: "/",
  },
  // {
  //   id: 2,
  //   title: "Portfolio",
  //   url: "/portfolio",
  // },
  {
    id: 3,
    title: "BLOG",
    url: "/blog",
  },
  {
    id: 4,
    title: "ABOUT",
    url: "/about",
  },
  {
    id: 5,
    title: "CONTACT",
    url: "/contact",
  },
  {
    id: 6,
    title: "DASHBOARD",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Mellow.Dev
      </Link>
      <div className={styles.links}>
        {links.map((item) => (
          <Link href={item.url} key={item.id} className={styles.link}>
            {item.title}
          </Link>
        ))}

        <div className={styles.mobile}>
          <DarkModeToggle />
          <div> | </div>
          {session.status === "unauthenticated" && (
            <Link href="/dashboard/login">
              <div className={styles.author}>
                <button className={styles.login}>LOGIN</button>
              </div>
            </Link>
          )}
          {session.status === "authenticated" && (
            <div className={styles.author}>
              <Image
                src="/User.png"
                alt=""
                width={28}
                height={28}
                className={styles.avatar}
              />
              <button onClick={signOut} className={styles.logout}>
                LOGOUT
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
