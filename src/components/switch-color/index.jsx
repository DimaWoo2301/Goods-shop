import cn from 'classnames';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './switch-color.module.css';

const SwitchColor = ({
  listColor, onChange, currentColor,
}) => {
  const onChangeColor = (characteristicsProduct) => () => {
    onChange(characteristicsProduct);
  };

  const getCurrentColor = (product) => product.color === currentColor;
  return (
    <div className={s.radius}>
      {listColor.map((productInfo) => (
        <button
          key={uuidv4()}
          type="button"
          onClick={onChangeColor(productInfo)}
          style={{ backgroundColor: productInfo.color }}
          className={cn(s.circle, { [s.active]: getCurrentColor(productInfo) })}
        />
      ))}
    </div>
  );
};

export default SwitchColor;
