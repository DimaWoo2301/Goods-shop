import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { deleteBasket } from '../../../../redux/basket/action';
import s from '../../shop-basket.module.css';
import BasketItems from '../basket-item';

const DeleteProduct = ({ products, setProducts }) => {
  const dispatch = useDispatch();

  const [activeCheckboxes, setActiveCheckboxes] = useState([]);
  const [isAllCheckbox, setIsAllCheckbox] = useState(false);

  const onDeleteActiveCheckboxes = () => {
    const filterListProduct = products.filter(
      (item) => !activeCheckboxes.includes(item.id),
    );

    activeCheckboxes.forEach((id) => {
      dispatch(deleteBasket(id));
    });

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

  return (
    <>
      <input
        type="checkbox"
        onChange={changeCheckboxes}
        checked={isAllCheckbox}
      />
      <span>Выбрать все</span>
      <button type="button" onClick={onDeleteActiveCheckboxes} className={s.deleteText}>Удалить выбранные</button>
      <div className={s.containerProduct}>
        {products.map((product) => (
          <BasketItems
            key={products.id}
            activeCheckboxes={activeCheckboxes}
            setActiveCheckboxes={setActiveCheckboxes}
            products={products}
            setProducts={setProducts}
            product={product}
          />
        ))}
      </div>
    </>
  );
};

export default DeleteProduct;
