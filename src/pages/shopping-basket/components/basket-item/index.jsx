import cn from 'classnames';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteBasket } from '../../../../redux/basket-reducer';
import crushingPriceNumbers from '../../../../utils/crushing-price-numbers';
import s from '../../shop-basket.module.css';

const BasketItem = () => {
  const product = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();
  const onDeleteProduct = (el) => () => {
    dispatch(deleteBasket(el));
  };
  const [productCheck, setProductCheck] = useState([]);

  useEffect(() => {
    setProductCheck(product);
  }, [product]);

  const handelChange = (e) => {
    const { name, checked } = e.target;
    if (name === 'allSelect') {
      const tempProduct = productCheck.map((el) => ({ ...el, isChecked: checked }));
      setProductCheck(tempProduct);
    } else {
      const tempProduct = productCheck
        .map((el) => (el.productInfo.name === name ? { ...el, isChecked: checked } : el));
      setProductCheck(tempProduct);
    }
  };
  const checkedFilter = productCheck.filter((item) => item?.isChecked !== true).length < 1;
  return (
    <div>
      <input
        type="checkbox"
        name="allSelect"
        checked={checkedFilter}
        onChange={handelChange}
      />
      <span>Выбрать все</span>
      <button type="button" className={s.deleteText}>Удалить выбранные</button>
      {productCheck.map((el) => (
        <>
          <div className={s.lineProduct} />
          <div className={s.itemProductContainer}>
            <div>
              <input
                type="checkbox"
                checked={el?.isChecked || false}
                name={el.productInfo.name}
                onChange={handelChange}
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
                <button type="button" onClick={onDeleteProduct(el)}>
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
