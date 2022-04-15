import cn from 'classnames';
import React from 'react';

import s from './switch-color.module.css';

const SwitchColor = ({
  listColor, onChange, currentColor,
}) => {
  const onChangeColor = (characteristicsProduct) => () => {
    onChange(characteristicsProduct);
  };

  return (
    <div className={s.radius}>
      {listColor.map((el) => (
        <button
          type="button"
          onClick={onChangeColor(el)}
          style={{ backgroundColor: el.color }}
          className={cn(s.circle, { [s.active]: el.color === currentColor })}
        />
      ))}
    </div>
  );
};

export default SwitchColor;
