import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { body, types } from '../../../response';
import ShowCaseItem from '../../ShowCase/show-case-items';
import s from './category-items.module.css';

const CategoryItems = () => {
  const { typesId } = useParams();

  const currentCategory = types.find((el) => el.id === Number(typesId));
  const filterByCurrentCategory = body.filter((el) => el.typesId === Number(typesId));

  return (
    <>
      <div className={s.wrapper}>
        <h1>{currentCategory.name}</h1>
      </div>
      <div className={s.wrapperItem}>
        {filterByCurrentCategory
          .map((el) => (
            <Link key={el.productInfo.name} to={`/post/${el.id}`}>
              <ShowCaseItem
                name={el.productInfo.name}
                price={el.productInfo.price}
                text={el.productInfo.infoText}
                mainImage={el.productInfo.mainImage}
                id={el.id}
              />
            </Link>
          ))}
      </div>
    </>
  );
};

export default CategoryItems;
