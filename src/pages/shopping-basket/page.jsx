import React from 'react';
import { useSelector } from 'react-redux';

import EmptyContent from '../../components/empty-content';
import BasketItems from './components/basket-item';
import BasketsInfo from './components/baskets-info';
import s from './shop-basket.module.css';

const ShopBasket = () => {
  const product = useSelector((state) => state.basket.basket);

  if (!product.length) {
    return (
      <div className={s.empty}>
        <EmptyContent
          subTitle="Воспользуйтесь поиском, чтобы найти все что нужно."
          title="Корзина пуста"
        />
      </div>
    );
  }

  return (
    <>
      <h1 className={s.header}>Корзина</h1>
      <div className={s.mainWrapper}>
        <div className={s.wrapperProduct}>
          <div className={s.containerProduct}>
            <BasketItems />
          </div>
        </div>
        <BasketsInfo product={product} />
      </div>
    </>
  );
};

export default ShopBasket;
