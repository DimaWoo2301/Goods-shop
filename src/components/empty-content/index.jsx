import React from 'react';
import { useNavigate } from 'react-router-dom';

import s from './empty-content.module.css';

const EmptyContent =
  ({ title = '', subTitle = '', textRedirectToHome = 'Вернуться на главную страницу' }) => {
    const navigate = useNavigate();

    const onGoBack = () => {
      navigate('/');
    };
    return (
      <div className={s.emptyContent}>
        <div className={s.container}>
          <h1>{title}</h1>
          <h4>{subTitle}</h4>
          <button
            type="button"
            className={s.button}
            onClick={onGoBack}
          >
            {textRedirectToHome}
          </button>
        </div>
      </div>
    );
  };

export default EmptyContent;
