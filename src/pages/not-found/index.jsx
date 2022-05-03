import React from 'react';
import { useNavigate } from 'react-router-dom';

import lock from '../../assets/img/lock.png';
import s from './not-found.module.css';
import { v4 as uuidv4 } from 'uuid';

const NotFound = () => {
  const navigate = useNavigate();
  const onGoBack = () => {
    navigate('/');
  };

  return (
    <div className={s.wrapper}>
      <img src={lock} alt="Замок" />
      <span className={s.error}>Доступ ограничен</span>
      <div>
        <button
          key={uuidv4()}
          className={s.button}
          type="button"
          onClick={onGoBack}>&#8594;
          Вернуться в главное меню
        </button>
      </div>
    </div>
  );
};

export default NotFound;
