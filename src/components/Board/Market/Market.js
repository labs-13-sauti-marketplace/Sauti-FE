import React from 'react';
import './Market.css';

const Market = props => {
  return (
    <div>
      <p>Market: {props.item.name}</p>
    </div>
  )
}

export default Market;
