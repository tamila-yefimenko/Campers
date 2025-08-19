import { Children } from 'react';
import s from './Button.module.css';

const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${s.button} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
