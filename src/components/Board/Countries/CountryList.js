import React from 'react';
import Country from './Country.js';
import './Country.css';

const CountryList = props => {
  return (
    <div className="countryList">
      {props.starwarsChars.map((item,index) => (
        <Country key={item} item={item} />
      ))}
    </div>
  );
}


export default MarketList;
