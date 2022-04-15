import React from 'react';

import s from './ShowCaseItems.module.css';

const ShowCaseItem = ({
  name, mainImage, text, price,
}) => (
  <div className={s.items}>
    <span className={s.name}>{name}</span>
    <img src={mainImage} alt="" />
    <p>{text}</p>
    <div className={s.price}>
      <span className={s.priceItem}>
        {(price).toLocaleString()}
        <span> руб.</span>
      </span>
      <button type="submit" className={s.button}>Купить</button>
    </div>
  </div>
);

export default ShowCaseItem;
