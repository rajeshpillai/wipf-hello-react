import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './star.css';

export default function StarRating({count, value, activeColor='#f00', onChange}) {

  const stars = Array.from({length: count}, () => '🟊')  //Unicode number	U+1F7CA

  const handleChange = (value) => {
    onChange(value + 1);
  }

  // REMOVE CSS CLASS NAME IF NOT NEEDED.
  // I AM KEEPING HERE FOR REFERENCE ONLY

  return (
    <div>
      {stars.map((s, index) => {
        let css = 'inactive';
        let style = '#ddd';
        if (index < value) {
          css = 'active';
          style=activeColor;
        }
        return (
          <span className={css}  
            key={index}
            style={{color: style}}
            onClick={()=>handleChange(index)}>{s}</span>
        )
      })}
      {value}
    </div>
  )
}

StarRating.propTypes = {
  count: PropTypes.number.isRequired
}

