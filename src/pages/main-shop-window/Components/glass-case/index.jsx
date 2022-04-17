import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import GlassCaseItem from '../../../../components/glass-case-item';
import s from './show-case.module.css';

const GlassCase = () => {
  const products = useSelector((state) => state.shop.products);
  return (
    <div>
      <div className={s.wrapper}>
        {products.map((product) => (
          <NavLink key={product.productInfo.name} to={`/post/${product.id}`}>
            <GlassCaseItem
              name={product.productInfo.name}
              price={product.productInfo.price}
              text={product.productInfo.infoText}
              mainImage={product.productInfo.mainImage}
              id={product.id}
              product={product}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default GlassCase;
