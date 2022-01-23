import React from 'react';
import './button.css';

const Button = (props) => {
  return (
    <button 
      className={`button ${props.class ? props.class : ''}`} 
      disabled={props.disabled}
      onClick={props.onClick}
      data-testid={props.testId}
    >
      {props.label}
    </button>
  )
}

export default Button;