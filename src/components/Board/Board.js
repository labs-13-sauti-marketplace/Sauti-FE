import React from 'react';
import './Board.css';
import { Route } from 'react-router-dom';
import MarketList from './Market/MarketList.js'



export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedCountries: [],
    };
  } // end of constructor


  render(){
    return(
      <div className="box-container">
      <h3> Dashboard </h3>


      <div className="market-places">
        <p> This is the market place </p>

      
      </div>
      </div>
    )
  }

}
