import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './star.css';

export default function StarRating({count, value, 
    inactiveColor='#ddd',
    size=24,
    activeColor='#f00', onChange}) {

  const stars = Array.from({length: count}, () => '🟊')  //Unicode number	U+1F7CA

  const handleChange = (value) => {
    onChange(value + 1);
  }

  // REMOVE CSS CLASS NAME IF NOT NEEDED.
  // I AM KEEPING HERE FOR REFERENCE ONLY

  return (
    <div>
      {stars.map((s, index) => {
        let style = inactiveColor;
        if (index < value) {
          style=activeColor;
        }
        return (
          <span className={"star"}  
            key={index}
            style={{color: style, width:size, height:size, fontSize: size}}
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

