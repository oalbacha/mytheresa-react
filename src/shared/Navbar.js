import * as React from "react";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <section className={styles.nav}>
      <a className={styles.nav__logo} href={"/"}>
        <h1>My Theresa React Test</h1>
      </a>
      <ul>
        <li className={styles.nav__item} style={{}}>
          <a className={styles.nav__link} href={"/favourites"}>
            Favourites
          </a>
        </li>
      </ul>
    </section>
  );
}
