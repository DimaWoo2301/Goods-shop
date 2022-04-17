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
        <button className={s.button} type="button" onClick={onGoBack}>&#5176;</button>
        <div className={s.headerContainer}>
          <NavLink to={ROUTES.BASE}>Магазин</NavLink>
          <NavLink to={ROUTES.CATEGORY}>Категория</NavLink>
          <NavLink to={ROUTES.BASKET}>Корзина</NavLink>
        </div>
      </header>
      <div className={s.container}>
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
