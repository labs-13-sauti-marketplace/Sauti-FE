import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [
            {name: "Tanzania"},
            {name: "Kenya"},// Marketplace #1 get.req
            {name: "Uganda"},// Marketplace #2 get.req
            {name: "Rwanda"},
            {name: "Burundi"},
            {name: "Democratic Republic of the Congo"},
            {name: "Malawi"},
            {name: "South Sudan"}
          ]
    }
  }

  render() {
    return(
      <div className="boardContainer">
        <Link to="/">  <h3> Menu </h3> </Link>
        <div>
          {this.state.countries.map(countries =>(
            <li key={countries.name}>
              <Link className="countries" to={`/country/${countries.name}`}> {countries.name} </Link>
            </li>
          ))}
        </div>
      </div>
    )
  }
}
