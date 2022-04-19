import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteBasket } from '../../redux/basket-reducer';
import crushingPriceNumbers from '../../utils/crushing-price-numbers';
import s from './basket-item.module.css';

const BasketItem = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.basket.basket);
  const fullPrice = product.reduce((total, el) => total + el.productInfo.price, 0);
  const countProduct = product.length === 0 ? '' : `Количество продуктов: ${product.length}`;
  const price = crushingPriceNumbers(fullPrice) === 0 ? 'Карзина пуста'
    : `Полная цена всех покупок: ${crushingPriceNumbers(fullPrice)} Руб.`;
  const onDeleteProduct = (id) => () => {
    dispatch(deleteBasket(id));
  };
  return (
    <div>

      {product.map((el) => (
        <>
          <div className={s.branchLine} />
          <div className={s.wrapper}>
            <img src={el.productInfo.mainImage} alt="Картинка продукта" />
            <div>
              <div>
                <span className={s.info}>{el.productInfo.name}</span>
              </div>
              <div>
                <span className={s.info}>Какая то информация о продукте</span>
              </div>
              <div className={`${s.infoProduct}${s.info}`}>
                <span>В избранное</span>
                <span className={s.line} />
                <button type="button" onClick={onDeleteProduct(el.id)}>Удалить</button>
              </div>
            </div>
            <div className={`${s.infoPrice}${s.info}`}>
              <div>
                {crushingPriceNumbers(el.productInfo.price) }
                {' '}
                Руб.
              </div>
              <div>Скидка какая то...</div>
            </div>
          </div>
        </>
      ))}
      <div className={s.wrapperPrice}>
        <div>{price}</div>
        <div>{countProduct}</div>
      </div>
    </div>
  );
};
export default BasketItem;
