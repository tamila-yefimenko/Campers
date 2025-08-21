import React from 'react';
import sprite from '../../assets/sprite.svg';

const Icon = ({
  name = '',
  size = 16,
  color = 'currentColor',
  className = '',
}) => {
  const isProperty = name?.includes?.('Property');

  return (
    <svg
      className={className}
      width={size}
      height={size}
      fill={color}
      aria-hidden="true"
      {...(isProperty ? { fill: color } : { stroke: color, fill: 'none' })}
    >
      {name && <use xlinkHref={`${sprite}#${name}`} />}
    </svg>
  );
};

export default Icon;
