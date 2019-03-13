import React from "react";
import Card from "./Card";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Card className={styles.homeCard} headerClassName={styles.homeHeader} />
    </>
  );
};

export default Home;
