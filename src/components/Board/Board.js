import React from 'react';
import './Board.css';
import Market from './Market/Market.js'
import { Route } from 'react-router-dom';
import CountryList from './Countries/CountryList.js'


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
        <h3> Welcome </h3>

      <Route exact path="/countries" component={ CountryList } />
      </div>
    )
  }

}
