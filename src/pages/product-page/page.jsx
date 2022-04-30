import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

import SwitchColor from '../../components/switch-color';
import COLOR_PRODUCT from '../../constants/color-products';
import ROUTES from '../../constants/routes';
import { setBasket } from '../../redux/basket/action';
import crushingPriceNumbers from '../../utils/crushing-price-numbers';
import s from './show-case-window.module.css';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.shop.products.find((el) => el.id === Number(id)));

  const { productInfo } = product;

  const [characteristicsProduct, setCharacteristicsProduct] = useState(null);

  const colorConverter = COLOR_PRODUCT.find((el) => el.name === characteristicsProduct?.color);
  const basket = useSelector((state) => state.basket.basket
    .find((el) => el.id === product.id && el.productInfo.infoText === colorConverter?.translate));
  const textBayOrInBasket = !basket ? 'Купить' : 'В корзине';
  const translateTextColor = (color) => `Цвет:  ${color ? color.translate : 'Цвет не указан'}`;

  const onClickBasket = (event) => {
    event.preventDefault();
    if (!basket) {
      dispatch(setBasket(product, characteristicsProduct.image, colorConverter.translate));
    } else {
      navigate('/basket');
    }
  };

  const renderCharacteristics = () => (
    <>
      {
        characteristicsProduct && (
        <div className={s.container_color}>
          <span>Характеристики</span>
          <span>
            {translateTextColor(colorConverter)}
          </span>
          <NavLink to={`${ROUTES.BASKET}`}>
            <button onClick={onClickBasket} type="submit">{textBayOrInBasket}</button>
          </NavLink>
        </div>
        )
      }
    </>
  );
  const mainImageProduct = characteristicsProduct?.image || productInfo.mainImage;

  return (
    <div className={s.wrapper}>
      <div className={s.wrapperPhone}>
        <span>{productInfo.name}</span>
        <img src={mainImageProduct} alt="Картинка продукта" />
      </div>
      <div>
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
        {renderCharacteristics()}
      </div>
    </div>
  );
};

export default ProductPage;
