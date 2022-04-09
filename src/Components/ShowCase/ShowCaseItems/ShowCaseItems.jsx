import React from "react";
import s from "./ShowCaseItems.module.css";

const ShowCaseItem = (props) => {
  return (
    <div className={s.items}>
      <span className={s.item}>{props.name}</span>
      <img className={s.item} src={props.mainImage} alt=""/>
      <p className={s.item}>{props.text}</p>
      <div className={s.price}>
        <span className={s.item + " " + s.priceItem}>{props.price}</span>
        <button className={s.button + " " + s.priceItem}>Купить</button>
      </div>
    </div>
  );
};

export {ShowCaseItem};
