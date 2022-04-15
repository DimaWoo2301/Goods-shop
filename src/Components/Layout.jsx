import React from 'react';
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import s from "./Layout.module.css";

const Layout = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <button className={s.button} onClick={() => navigate(-1)}>---></button>
        <div className={s.headerContainer}>
          <NavLink to={"/"}>Магазин</NavLink>
          <NavLink to={"/category"}>Категория</NavLink>
        </div>
      </header>
      <div className={s.container}>
        <Outlet/>
      </div>
      <footer className={s.footer}>
        <div className={s.footerContainer}>
          <span>2022</span>
        </div>
      </footer>
    </div>
  );
}

export {Layout};