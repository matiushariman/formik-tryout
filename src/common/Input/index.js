import React from 'react';
import PropTypes from 'prop-types';
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
        <label className="Input--Label" htmlFor={field.name}>
          {label}
        </label>
      )}
      <input className="Input--Field" {...field} {...props} />
    </React.Fragment>
  );
}

Input.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,
  label: PropTypes.string,
};

export default Input;
