import React, {useState} from 'react';
import StarRating from '../components/starrating';
import ProgressBar from '../components/progress-bar';

export default function StarRatingDemo() {
  const [rating, setRating] = useState(3);

  const handleChange = (value) => {
    setRating(value);
  }
  return (
    <div>
      <h2>Component Demo</h2>

      <div>
        <h4>Star Rating Component</h4>
        <StarRating 
          count={5}
          size={40}
          value={rating}
          activeColor ={'#206a5d'}
          inactiveColor={'#ddd'}
          onChange={handleChange}  />
      </div>

      <div>
        <h4>ProgressBar Component</h4>
        100%
        <ProgressBar percent={100} width={250} height={20}/> 
        <br/>
        70%
        <ProgressBar percent={70} width={250} height={20}/>
        <br/>
        50%
        <ProgressBar percent={50} width={250} height={20}/>
        <br/>
        25%
        <ProgressBar percent={25} width={250}/>

      </div>
    </div>
  )
}