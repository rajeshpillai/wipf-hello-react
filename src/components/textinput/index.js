import React from 'react';
import PropTypes from 'prop-types';

export default function TextInput({type="text",value,label, name, placeholder,onInputChange, ...rest}) {
  return (
    <div>
      <label>{label}</label>
      <input type="text" name={name} 
        {...rest}
        type={type}
        defaultValue={value}
        placeholder={placeholder}
        onChange={onInputChange}/>
    </div>
  )
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onInputChange: PropTypes.func,
  value: PropTypes.any,
}

TextInput.defaultProps = {
  placeholder: '<enter input here>'
};
