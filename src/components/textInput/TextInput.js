import React from 'react';
import './textInput.css'

const TextInput = (props) => {
  return (
    <div className="text-input__container">
      <input
        id={props.id}
        name={props.name}
        className="text-input"
        onChange={props.onChange}
        data-testid={props.testId}
        placeholder={props.label}
        onBlur={props.blurHandler}
      />

      <label 
          htmlFor={props.id} 
          className="text-input__label"
        >
          {props.label}
      </label>
    </div>
  )
}

export default TextInput;