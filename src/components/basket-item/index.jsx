import React from 'react';
import { useSelector } from 'react-redux';

import s from './basket-item.module.css';

const BasketItem = () => {
  const product = useSelector((state) => state.basket.basket);

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
                <span>Удалить</span>
              </div>
            </div>
            <div className={`${s.infoPrice}${s.info}`}>
              <span>{el.productInfo.price}</span>
              <span>Скидка какая то...</span>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};
export default BasketItem;
