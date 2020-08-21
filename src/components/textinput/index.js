import React from 'react';
import PropTypes from 'prop-types';

export default function TextInput({value,label, name, placeholder,onInputChange}) {
  return (
    <div>
      <label>{label}</label>
      <input type="text" name={name} 
        value={value}
        placeholder={placeholder}
        onChange={onInputChange}/>
    </div>
  )
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.any,
}

TextInput.defaultProps = {
  placeholder: '<enter input here>'
};
