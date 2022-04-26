import cn from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import car from '../../../../assets/img/car.svg';
import point from '../../../../assets/img/pickup-point.svg';
import EmptyContent from '../../../../components/empty-content';
import { deleteAllBasket, deleteBasket } from '../../../../redux/basket-reducer';
import crushingPriceNumbers from '../../../../utils/crushing-price-numbers';
import s from './basket-item.module.css';

const BasketItem = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.basket.basket);
  const fullPrice = product.reduce((total, el) => total + el.productInfo.price, 0);
  const countProduct = product.length;
  const price = crushingPriceNumbers(fullPrice);
  const onDeleteProduct = (el) => () => {
    dispatch(deleteBasket(el));
  };

  const onDeleteAllProduct = () => {
    dispatch(deleteAllBasket());
  };
  const navigate = useNavigate();
  const onGoBack = () => {
    navigate('/');
  };

  return (
    <div>
      {!product.length ? (
        <div className={s.empty}>
          <EmptyContent>
            <h1>Корзина пуста</h1>
            <h4>Воспользуйтесь поиском, чтобы найти все что нужно.</h4>
            <button
              type="button"
              className={s.button}
              onClick={onGoBack}
            >
              Вернуться на главную страницу
            </button>
          </EmptyContent>
        </div>
      ) : (
        <>
          <h1 className={s.header}>Корзина</h1>
          <div className={s.mainWrapper}>
            <div className={s.wrapperProduct}>
              <div className={s.checkBox}>
                <input type="checkbox" />
                <span>Выбрать все</span>
                <button type="button" className={s.deleteText} onClick={onDeleteAllProduct}>Удалить выбранные</button>
              </div>
              <div className={s.lineProduct} />
              <div className={s.containerProduct}>
                <div className={s.courier}>
                  <span className={s.titleCourier}>
                    Доставка Shop
                  </span>
                  <div className={s.courierWay}>
                    <img src={car} alt="Значек грузовика" />
                    <span className={s.subtitleCourier}>
                      Курьером
                    </span>
                    <img src={point} alt="Значек пункта прибытия" />
                    <span className={s.subtitleCourier}>
                      Самовывоз
                    </span>
                  </div>
                </div>
                {product.map((el) => (
                  <>
                    <div className={s.lineProduct} />
                    <div className={s.itemProductContainer}>
                      <div>
                        <input type="checkbox" />
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
            </div>
            <div className={s.wrapperBay}>
              <div className={s.checkout}>
                <button type="button">
                  <span>Перейти к оформлению</span>
                </button>
                <p>Доступные способы и время доставки можно выбрать при оформлении заказа</p>
              </div>
              <div className={s.line} />
              <div className={s.infoBayProduct}>
                <div className={s.infoItemBayProduct}>
                  <span className={s.titleBayProduct}>
                    Ваша корзина
                  </span>
                  <span className={s.subtitle}>
                    1 товар * 100 гр
                  </span>
                </div>
                <div className={s.infoItemBayProduct}>
                  <span className={s.subtitle}>
                    Товары (
                    {countProduct}
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
                    {price}
                    {' '}
                    ₽
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default BasketItem;
