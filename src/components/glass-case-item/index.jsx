import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setBasket } from '../../redux/basket-reducer';
import crushingPriceNumbers from '../../utils/crushing-price-numbers';
import s from './glass-case-items.module.css';

const GlassCaseItem = ({
  name, mainImage, text, price, product,
}) => {
  const dispatch = useDispatch();
  const [bay, setBay] = useState('Купить');
  const basket = useSelector((state) => state.basket.basket.find((el) => el.id === product.id));
  const onClickBasket = (event) => {
    event.preventDefault();
    dispatch(setBasket('', product));
    if (!basket) { setBay('В корзине'); } else setBay('Купить');
  };
  return (
    <div className={s.items}>
      <span className={s.name}>{name}</span>
      <img src={mainImage} alt="" />
      <p>{text}</p>
      <div className={s.price}>
        <span className={s.priceItem}>
          {crushingPriceNumbers(price)}
          <span> руб.</span>
        </span>
        <button onClick={onClickBasket} type="submit" className={s.button}>{bay}</button>
      </div>
    </div>
  );
};

export default GlassCaseItem;
