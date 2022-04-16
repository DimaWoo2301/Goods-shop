import React from 'react';
import { NavLink } from 'react-router-dom';

import ShowCaseItem from '../../../../components/glass-case-items';
import { body } from '../../../../response';
import s from './show-case.module.css';

const GlassCase = () => (
  <div>
    <div className={s.wrapper}>
      {body.map((product) => (
        <NavLink key={product.productInfo.name} to={`/post/${product.id}`}>
          <ShowCaseItem
            name={product.productInfo.name}
            price={product.productInfo.price}
            text={product.productInfo.infoText}
            mainImage={product.productInfo.mainImage}
            id={product.id}
          />
        </NavLink>
      ))}
    </div>
  </div>
);

export default GlassCase;
