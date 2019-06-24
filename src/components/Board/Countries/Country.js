import React from 'react';
import './Country.css';

const Country = props => {
  return (
    <div>
      <p>Country: {props.item.name}</p>
    </div>
  )
}

export default Country;
