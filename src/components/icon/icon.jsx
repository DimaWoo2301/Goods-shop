import React from 'react';

import ICONS_COMPONENTS from './constants';

const Icon = ({
  name, fill, width = 25, height = 25, opacity,
}) => {
  const IconsComponents = ICONS_COMPONENTS[name];
  return (
    <IconsComponents fill={fill} width={width} height={height} opacity={opacity} />
  );
};

export default Icon;
