import React, {useState} from 'react';
import StarRating from '../components/starrating';

export default function StarRatingDemo() {
  const [rating, setRating] = useState(3);

  const handleChange = (value) => {
    alert(value);
    setRating(value);
  }
  return (
    <div>
      <h2>Star Rating Demo</h2>

      <StarRating count={5} value={rating} onChange={handleChange}  />

    </div>
  )
}