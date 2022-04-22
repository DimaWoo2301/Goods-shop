import React from 'react';

import s from './empty-content-module.css';

const EmptyContent = ({ bannerText = '', mainText = '' }) => (
  <div className={s.emptyContent}>
    <div className={s.container}>
      <h1>{bannerText}</h1>
      <h3>{mainText}</h3>
    </div>
  </div>
);
export default EmptyContent;
