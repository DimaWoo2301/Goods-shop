import React from 'react';

import s from './empty-content.module.css';

const EmptyContent = ({ children }) => (
  <div className={s.emptyContent}>
    <div className={s.container}>
      {children}
    </div>
  </div>
);
export default EmptyContent;
