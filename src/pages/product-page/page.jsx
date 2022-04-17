import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import SwitchColor from '../../components/switch-color';
import COLOR_PRODUCT from '../../constants/color-products';
import crushingPriceNumbers from '../../utils/crushing-price-numbers';
import s from './show-case-window.module.css';

const ProductPage = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.shop.products);

  const { productInfo } = products.find((el) => el.id === Number(id));

  const [characteristicsProduct, setCharacteristicsProduct] = useState(null);

  const colorConverter = COLOR_PRODUCT.find((el) => el.name === characteristicsProduct?.color);

  return (
    <div className={s.wrapper}>
      <div className={s.wrapperPhone}>
        <span>{productInfo.name}</span>
        <img src={characteristicsProduct?.image || productInfo.mainImage} alt="" />
      </div>
      <div className={s.wrapperContainer}>
        <div className={s.container_color}>
          <div className={s.infoPhone}>
            <span>
              {crushingPriceNumbers(productInfo.price)}
              <span> руб.</span>
            </span>
            <SwitchColor
              listColor={productInfo.customize}
              onChange={setCharacteristicsProduct}
              currentColor={characteristicsProduct?.color}
            />
            <p>{productInfo.infoText}</p>
          </div>
        </div>
        {
          characteristicsProduct && (
            <div className={s.container_color}>
              <span>Характеристики</span>
              <span>
                Цвет:
                {colorConverter ? colorConverter.translate : 'Цвет не указан'}
              </span>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default ProductPage;
