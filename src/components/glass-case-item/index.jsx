import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setBasket } from '../../redux/basket-reducer';
import crushingPriceNumbers from '../../utils/crushing-price-numbers';
import s from './glass-case-items.module.css';

const GlassCaseItem = ({
  name, mainImage, text, price, product,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket.find((el) => el.id === product.id));
  const isProductInBasket = !basket ? 'Купить' : 'В корзине';

  const onClickBasket = (event) => {
    event.preventDefault();
    if (!basket) {
      dispatch(setBasket(product));
    } else {
      navigate('/basket');
    }
  };
  return (
    <div className={s.items}>
      <span className={s.name}>{name}</span>
      <img src={mainImage} alt="Картинка продукта" />
      <p>{text}</p>
      <div className={s.price}>
        <span className={s.priceItem}>
          {crushingPriceNumbers(price)}
          <span> руб.</span>
        </span>
        <button onClick={onClickBasket} type="submit" className={s.button}>{isProductInBasket}</button>
      </div>
    </div>
  );
};

export default GlassCaseItem;
