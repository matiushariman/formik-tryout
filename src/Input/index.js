import React from 'react';
import './styles.css';

export function Input({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  ...props
}) {
  return (
    <React.Fragment>
      {label && (
        <label className="Input--Label" for={field.name}>
          {label}
        </label>
      )}
      <input className="Input--Field" {...field} {...props} />
    </React.Fragment>
  );
}

export default Input;
