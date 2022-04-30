import React from 'react';

import s from './list-category.module.css';

const ListCategory = ({ img, name }) => (
  <div className={s.item}>
    <img src={img} alt="phone" />
    <span>{name}</span>
  </div>
);

export default ListCategory;
