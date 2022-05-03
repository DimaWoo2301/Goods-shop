import cn from 'classnames';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { actionChangeCountProducts, deleteBasket } from '../../../../redux/basket/action';
import crushingPriceNumbers from '../../../../utils/crushing-price-numbers';
import s from './basket-item.module.css';

const BasketItem = ({
  activeCheckboxes, setActiveCheckboxes, product, products, setProducts,
}) => {
  const dispatch = useDispatch();

  const [countProducts, setCountProducts] = useState(product.productInfo.counts);

  const changeCheckBox = (id) => () => {
    const existCurrentIdByActiveCheckboxes = activeCheckboxes.includes(id);
    if (existCurrentIdByActiveCheckboxes) {
      const filter = activeCheckboxes.filter((el) => el !== id);
      setActiveCheckboxes(filter);
    } else {
      setActiveCheckboxes([...activeCheckboxes, id]);
    }
  };

  const changeCountProducts = (event) => {
    setCountProducts(event.target.value);
  };

  const onDeleteProduct = (el) => () => {
    dispatch(deleteBasket(el));

    const filterListProduct = products.filter((item) => item.id !== el);
    setProducts(filterListProduct);
  };

  const onBlurCountProducts = (id) => () => {
    dispatch(actionChangeCountProducts({ id, count: Number(countProducts) }));
  };
  console.log();
  return (
    <div>

      <>
        <div className={s.lineProduct} />
        <div className={s.itemProductContainer}>
          <div>
            <input
              type="checkbox"
              checked={activeCheckboxes.includes(product.id)}
              onChange={changeCheckBox(product.id)}
            />
          </div>
          <div className={s.itemProductImg}>
            <img src={product.productInfo.mainImage} alt="Картинка продукта" />
          </div>
          <div className={s.itemProductInfo}>
            <div className={s.itemProduct}>
              <span className={s.itemProductTitle}>
                {product.productInfo.name}
              </span>
              <span className={s.itemProductSubtitle}>
                цвет:
                {' '}
                {product.productInfo.infoText}
              </span>
            </div>
            <div className={cn(s.itemProduct, s.itemProductDelete)}>
              <button type="button" onClick={onDeleteProduct(product.id)}>
                Удалить
              </button>
            </div>
          </div>
          <div className={s.itemProductPrice}>
            <span>
              {crushingPriceNumbers(product.productInfo.price) }&nbsp;₽
            </span>
          </div>
          <div className={s.itemProductInput}>
            <input
              type="text"
              value={countProducts}
              onChange={changeCountProducts}
              onBlur={onBlurCountProducts(product.id)} />
          </div>
        </div>
      </>
    </div>
  );
};

export default BasketItem;
