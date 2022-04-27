import React from 'react';

import crushingPriceNumbers from '../../../../utils/crushing-price-numbers';
import s from '../../shop-basket.module.css';

const BasketsInfo = ({ product }) => {
  const fullPrice = crushingPriceNumbers(product
    .reduce((total, el) => total + el.productInfo.price, 0));
  return (
    <div className={s.wrapperBay}>
      <div className={s.infoBayProduct}>
        <div className={s.infoItemBayProduct}>
          <span className={s.titleBayProduct}>
            Ваша корзина
          </span>
        </div>
        <div className={s.infoItemBayProduct}>
          <span className={s.subtitle}>
            Товары (
            {product.length}
            )
          </span>
        </div>
        <div className={s.infoItemBayProduct}>
          <div className={s.line} />
        </div>
        <div className={s.infoItemBayProduct}>
          <span className={s.titleBayProduct}>
            Общая стоимость
          </span>
          <span className={s.titleBayProduct}>
            {fullPrice}
            {' '}
            ₽
          </span>
        </div>
      </div>
    </div>
  );
};

export default BasketsInfo;
