import React from "react";
import Card from "./Card";
import styles from "./About.module.scss";

const About = () => {
  return (
    <>
      <h1>About Page</h1>
      <Card className={styles.aboutCard} headerClassName={styles.aboutHeader} />
    </>
  );
};

export default About;
