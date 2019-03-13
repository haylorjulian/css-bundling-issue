import React from "react";
import classnames from "classnames";
import styles from "./Card.module.scss";

const Card = props => {
  return (
    <div className={classnames(styles.container, props.className)}>
      <h1 className={props.headerClassName}>CARD</h1>
    </div>
  );
};

export default Card;
