import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

// Bind the styles with classNames
const cx = classNames.bind(styles);

// Define the props for the Button component
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  size?: 'small' | 'large';
}

// Create the Button component
const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, size }) => {
  // Use cx to conditionally apply classes based on the props
  const buttonClass = cx({
    button: true,         // Always apply the base "button" class
    disabled: disabled,   // Apply "disabled" class if the button is disabled
    large: size === 'large',  // Apply "large" class if size is 'large'
    small: size === 'small',  // Apply "small" class if size is 'small'
  });

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
