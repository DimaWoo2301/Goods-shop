import cn from 'classnames';
import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteBasket } from '../../../../redux/basket-reducer';
import crushingPriceNumbers from '../../../../utils/crushing-price-numbers';
import s from '../../shop-basket.module.css';

const BasketItem = ({
  activeCheckboxes, setActiveCheckboxes, products, setProducts,
}) => {
  const dispatch = useDispatch();
  const onDeleteProduct = (el) => () => {
    dispatch(deleteBasket(el));

    const filterListProduct = products.filter((item) => item.id !== el);
    setProducts(filterListProduct);
  };

  const changeCheckBox = (id) => () => {
    const existCurrentIdByActiveCheckboxes = activeCheckboxes.includes(id);
    if (existCurrentIdByActiveCheckboxes) {
      const filter = activeCheckboxes.filter((el) => el !== id);
      setActiveCheckboxes(filter);
    } else {
      setActiveCheckboxes([...activeCheckboxes, id]);
    }
  };
  return (
    <div>
      {products.map((el) => (
        <>
          <div className={s.lineProduct} />
          <div className={s.itemProductContainer}>
            <div>
              <input
                type="checkbox"
                checked={activeCheckboxes.includes(el.id)}
                onChange={changeCheckBox(el.id)}
              />
            </div>
            <div className={s.itemProductImg}>
              <img src={el.productInfo.mainImage} alt="Картинка продукта" />
            </div>
            <div className={s.itemProductInfo}>
              <div className={s.itemProduct}>
                <span className={s.itemProductTitle}>
                  {el.productInfo.name}
                </span>
                <span className={s.itemProductSubtitle}>
                  цвет:
                  {' '}
                  {el.productInfo.infoText}
                </span>
              </div>
              <div className={cn(s.itemProduct, s.itemProductDelete)}>
                <button type="button" onClick={onDeleteProduct(el.id)}>
                  Удалить
                </button>
              </div>
            </div>
            <div className={s.itemProductPrice}>
              <span>
                {crushingPriceNumbers(el.productInfo.price) }
                {' '}
                ₽
              </span>
            </div>
            <div className={s.itemProductInput}>
              <input type="text" value="2" />
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default BasketItem;
