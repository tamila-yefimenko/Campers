import React from 'react';
import sprite from '../../assets/sprite.svg';

const Icon = ({
  name = '',
  size = 16,
  color = 'currentColor',
  className = '',
  type = 'fill',
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
      {...(type === 'stroke'
        ? { stroke: color, fill: 'none' }
        : { fill: color })}
    >
      {name && <use xlinkHref={`${sprite}#${name}`} />}
    </svg>
  );
};

export default Icon;
