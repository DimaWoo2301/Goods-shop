import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import EmptyContent from '../../components/empty-content';
import { deleteAllBasket } from '../../redux/basket-reducer';
import BasketItems from './components/basket-item';
import BasketsInfo from './components/baskets-info';
import s from './shop-basket.module.css';

const ShopBasket = () => {
  const product = useSelector((state) => state.basket.basket);

  const dispatch = useDispatch();
  const [products, setProducts] = useState(product);
  const [activeCheckboxes, setActiveCheckboxes] = useState([]);
  const [isAllCheckbox, setIsAllCheckbox] = useState(false);

  const onDeleteActiveCheckboxes = () => {
    if (products.length === activeCheckboxes.length) {
      dispatch(deleteAllBasket());
      setActiveCheckboxes([]);
      setIsAllCheckbox(false);
    }
    const filterListProduct = products.filter(
      (item) => !activeCheckboxes.includes(item.id),
    );

    setProducts(filterListProduct);

    setActiveCheckboxes([]);
    setIsAllCheckbox(false);
  };

  const changeCheckboxes = () => {
    if (!isAllCheckbox) {
      products.forEach((item) => {
        setActiveCheckboxes((prev) => [...prev, item.id]);
      });
    } else {
      setActiveCheckboxes([]);
    }
    setIsAllCheckbox(!isAllCheckbox);
  };

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
          <input
            type="checkbox"
            onChange={changeCheckboxes}
            checked={isAllCheckbox}
          />
          <span>Выбрать все</span>
          <button type="button" onClick={onDeleteActiveCheckboxes} className={s.deleteText}>Удалить выбранные</button>
          <div className={s.containerProduct}>
            <BasketItems
              key={products.id}
              activeCheckboxes={activeCheckboxes}
              setActiveCheckboxes={setActiveCheckboxes}
              products={products}
              setProducts={setProducts}
            />
          </div>
        </div>
        <BasketsInfo product={product} />
      </div>
    </>
  );
};

export default ShopBasket;
