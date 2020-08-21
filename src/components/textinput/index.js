import React from 'react';
import PropTypes from 'prop-types';

export default function TextInput({type="text",value, error, label, name, placeholder,onInputChange, ...rest}) {
  return (
  <div>
    <label>{label}</label>
    <input type="text" name={name} 
      {...rest}
      type={type}
      defaultValue={value}
      placeholder={placeholder}
    onChange={onInputChange}/>
    {error && <div className="error" style={{color: 'white'}}>{error}</div>}
  </div>
  )
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onInputChange: PropTypes.func,
  value: PropTypes.any,
  error: PropTypes.string
}

TextInput.defaultProps = {
  placeholder: '<enter input here>'
};
