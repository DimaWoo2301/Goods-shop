import React from "react";
import s from "./ShowCaseItems.module.css";

const ShowCaseItem = (props) => {
  return (
    <div className={s.items}>
      <span>{props.name}</span>
      <img src={props.mainImage} alt=""/>
      <p>{props.text}</p>
      <div className={s.price}>
        <span className={s.priceItem}>{props.price}</span>
        <button className={s.button}>Купить</button>
      </div>
    </div>
  );
};

export {ShowCaseItem};
