import React, {useState} from 'react';
import './star.css';

export default function StarRating({count, value, onChange}) {

  const stars = Array.from({length:5}, () => '☆')

  const handleChange = (value) => {
    onChange(value + 1);
  }

  return (
    <div>
      {stars.map((s, index) => {
        return (
          <span class="inactive" onClick={()=>handleChange(index)}>{s}</span>
        )
      })}
      {value}
    </div>
  )
}
