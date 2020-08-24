import React, {useState} from 'react';
import StarRating from '../components/starrating';

export default function StarRatingDemo() {
  const [rating, setRating] = useState(3);

  const handleChange = (value) => {
    setRating(value);
  }
  return (
    <div>
      <h2>Star Rating Demo</h2>

      <StarRating 
        count={5}
        size={40}
        value={rating}
        activeColor ={'#206a5d'}
        inactiveColor={'#ddd'}
        onChange={handleChange}  />

    </div>
  )
}