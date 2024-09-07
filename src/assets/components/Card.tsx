import React from "react";
import classNames from "classnames/bind";
import styles from "./Card.module.scss";
import Button from "./Button";
const cx = classNames.bind(styles);

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc }) => {
  return (
    <div className={cx("card")}>
      <img className={cx("card-image")} src={imageSrc} alt={title} />
      <div className={cx("card-content")}>
        <h2 className={cx("card-title")}>{title}</h2>
        <p className={cx("card-description")}>{description}</p>
        <Button label="Show More" onClick={() => alert("Show More")} />
      </div>
    </div>
  );
};
export default Card;
