import React from 'react';
import s from "./ListCategory.module.css";

const ListCategory = ({img,name}) => {
  return (
      <div className={s.item}>
        <img src={img} alt="phone"/>
        <span>{name}</span>
    </div>
  );
};

export {ListCategory};