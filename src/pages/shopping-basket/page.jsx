import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import EmptyContent from '../../components/empty-content';
import BasketsInfo from './components/baskets-info';
import DeleteProduct from './components/delete-product';
import s from './shop-basket.module.css';

const ShopBasket = () => {
  const product = useSelector((state) => state.basket.basket);
  const [products, setProducts] = useState(product);

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
          <DeleteProduct products={products} setProducts={setProducts} />
        </div>
        <BasketsInfo product={product} />
      </div>
    </>
  );
};

export default ShopBasket;
