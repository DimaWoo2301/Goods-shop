import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import s from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <header className={s.header}>
        <div className={s.headerContainer}>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/post"}>blog</NavLink>
          <NavLink to={"/about"}>About</NavLink>
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
    </>
  );
}

export {Layout};