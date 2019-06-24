import React from 'react';
import './Board.css';
import Market from './Market/Market.js'


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
        <h1> Dashboard </h1>

      </div>
    )
  }

}
