import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import ListCategory from '../../components/list-category';
import s from './category.module.css';

const Category = () => {
  const types = useSelector((state) => state.shop.types);

  return (
    <div className={s.content}>
      <h1>Категории</h1>
      <div className={s.wrapper_items}>
        {types.map((el) => (
          <Link key={el.id} to={`/category/${el.id}`}>
            <ListCategory img={el.img} name={el.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Category;
