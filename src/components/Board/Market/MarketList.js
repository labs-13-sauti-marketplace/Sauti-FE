import React from 'react';
import Market from './Market.js';
import './Market.css';

const MarketList = props => {
  return (
    <div className="marketList">
      {props.starwarsChars.map((item,index) => (
        <Market key={item} item={item} />
      ))}
    </div>
  );
}


export default MarketList;
