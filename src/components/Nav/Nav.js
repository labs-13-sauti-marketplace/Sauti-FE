import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';


class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }



  render() {
    return(
      <div className="boardNav">
        <Link to="/">  <h3> Menu </h3> </Link>

        <div>
            <Link to="/countries"> countries </Link>
            <Link to="/topics"> Topics </Link >
        </div>
      </div>
    )
  }
}

export default Nav;
