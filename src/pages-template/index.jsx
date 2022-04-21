import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

import ROUTES from '../constants/routes';
import s from './shop.module.css';

const ShopWindow = () => {
  const navigate = useNavigate();
  const onGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <div className={s.headerContainer}>
          <div className={s.itemLink}>
            <NavLink to={ROUTES.BASE}>Магазин</NavLink>
            <NavLink to={ROUTES.CATEGORY}>Категория</NavLink>
            <div className={s.basket}>
              <NavLink to={ROUTES.BASKET}>Корзина</NavLink>
            </div>
          </div>
        </div>
      </header>
      <div className={s.container}>
        <button className={s.button} type="button" onClick={onGoBack}>&#60;</button>
        <Outlet />
      </div>
      <footer className={s.footer}>
        <div className={s.footerContainer}>
          <span>2022</span>
        </div>
      </footer>
    </div>
  );
};

export default ShopWindow;
