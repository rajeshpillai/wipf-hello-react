import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default function ProgressBar({percent, width, height}) {
  const getWidthAsPercent = () => {
    return Number((width * percent / 100))
  }

  const getColor = (per) => {
    if (per === 100) return 'green';
    return per > 50 ? 'lightgreen' : 'red';
  }

  return(
    <div style={{border: 'solid 1px blue', width: width}} >
      <div style={{
        width: getWidthAsPercent(),
        height:height,
        backgroundColor: getColor(percent)
      }} />
    </div>
  )
}

ProgressBar.propTypes = {
}

