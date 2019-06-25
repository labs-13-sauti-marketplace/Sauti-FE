import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';


class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [
            {name: "Tanzania"},
            {name: "Kenya"},
            {name: "Uganda"},
            {name: "Rwanda"},
            {name: "Burundi"},
            {name: "Democratic Republic of the Congo"},
            {name: "Malawi"},
            {name: "South Sudan"}
          ]
    }
  }

  render() {
    const {name} = this.state.countries
    console.log(this.state.countries);
    return(
      <div className="boardNav">
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

export default Nav;
