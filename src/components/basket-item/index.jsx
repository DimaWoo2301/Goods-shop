import cn from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteBasket } from '../../redux/basket-reducer';
import crushingPriceNumbers from '../../utils/crushing-price-numbers';
import s from './basket-item.module.css';

const BasketItem = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.basket.basket);
  const fullPrice = product.reduce((total, el) => total + el.productInfo.price, 0);
  const countProduct = `Количество продуктов: ${product.length}`;
  const price = `Полная цена всех покупок: ${crushingPriceNumbers(fullPrice)} Руб.`;
  const onDeleteProduct = (id) => () => {
    dispatch(deleteBasket(id));
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
                <span className={s.info}>Какая то информация о продукте</span>
              </div>
              <div className={cn(s.infoProduct, s.info)}>
                <button type="button" onClick={onDeleteProduct(el.id)}>Удалить</button>
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
        <div className={s.emptyBasket}>
          <div className={s.container}>
            <div>
              <h1>Корзина пуста</h1>
              <h4>Воспользуйтесь поиском, чтобы найти все что нужно.</h4>
            </div>
          </div>
        </div>
      ) : (
        <div className={s.wrapperPrice}>
          <div>{price}</div>
          <div>{countProduct}</div>
        </div>
      )}
    </div>
  );
};
export default BasketItem;
