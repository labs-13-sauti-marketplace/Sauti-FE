import React from 'react';
import './Board.css';
import { Route } from 'react-router-dom';



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
        <h3> Dashbord </h3>
      </div>
    )
  }

}
