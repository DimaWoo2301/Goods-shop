import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import GlassCaseItem from '../glass-case-item';
import s from './category-items.module.css';

const CategoryItems = () => {
  const { typesId } = useParams();

  const products = useSelector((state) => state.shop.products);
  const types = useSelector((state) => state.shop.types);

  const currentCategory = types.find((el) => el.id === Number(typesId));
  const filterByCurrentCategory = products.filter((el) => el.typesId === Number(typesId));

  return (
    <>
      <div className={s.wrapper}>
        <h1>{currentCategory.name}</h1>
      </div>
      <div className={s.wrapperItem}>
        {filterByCurrentCategory
          .map((el) => (
            <Link key={el.productInfo.name} to={`/post/${el.id}`}>
              <GlassCaseItem
                name={el.productInfo.name}
                price={el.productInfo.price}
                text={el.productInfo.infoText}
                mainImage={el.productInfo.mainImage}
                id={el.id}
                product={el}
              />
            </Link>
          ))}
        {!filterByCurrentCategory.length ? (
          <div className={s.emptyContent}>
            <div className={s.container}>
              <h1>К сожалению товаров нет</h1>
              <h3>Скоро в наличии...</h3>
            </div>
          </div>
        ) : ''}
      </div>
    </>
  );
};

export default CategoryItems;
