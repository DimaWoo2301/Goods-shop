import cn from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { deleteAllBasket, deleteBasket } from '../../redux/basket-reducer';
import crushingPriceNumbers from '../../utils/crushing-price-numbers';
import EmptyContent from '../empty-content';
import s from './basket-item.module.css';

const BasketItem = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.basket.basket);
  const fullPrice = product.reduce((total, el) => total + el.productInfo.price, 0);
  const countProduct = `Количество продуктов: ${product.length}`;
  const price = `Полная цена всех покупок: ${crushingPriceNumbers(fullPrice)} Руб.`;
  const onDeleteProduct = (el) => () => {
    dispatch(deleteBasket(el));
  };
  const onDeleteAllProduct = () => {
    dispatch(deleteAllBasket());
  };
  const navigate = useNavigate();
  const onGoBack = () => {
    navigate('/');
  };

  return (
    <div className={s.content}>
      {product.map((el) => (
        <>
          <div className={s.wrapper}>
            <img className={s.imageProduct} src={el.productInfo.mainImage} alt="Картинка продукта" />
            <div>
              <div>
                <span className={s.info}>{el.productInfo.name}</span>
              </div>
              <div>
                <span className={s.info}>
                  Цвет:
                  {el.productInfo.infoText}
                </span>
              </div>
              <div className={cn(s.infoProduct, s.info)}>
                <button type="button" onClick={onDeleteProduct(el)}>Удалить</button>
              </div>
            </div>
            <div className={cn(s.infoProduct, s.info)}>
              <div>
                {crushingPriceNumbers(el.productInfo.price) }
                {' '}
                Руб.
                <div>Скидка какая то...</div>
              </div>
            </div>
          </div>
          <div className={s.branchLine} />
        </>
      ))}
      {!product.length ? (
        <EmptyContent>
          <h1>Корзина пуста</h1>
          <h4>Воспользуйтесь поиском, чтобы найти все что нужно.</h4>
          <button type="button" className={s.button} onClick={onGoBack}>Вернуться на главную страницу</button>
        </EmptyContent>
      ) : (
        <div className={s.wrapperPrice}>
          <div>{price}</div>
          <div>{countProduct}</div>
          <button type="button" onClick={onDeleteAllProduct}>delete All</button>
        </div>
      )}
    </div>
  );
};
export default BasketItem;
