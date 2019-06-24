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
        <h3> Menu </h3>

        <div>
            <Link to="/countries"> countries </Link>
          </div>
      </div>
    )
  }
}

export default Nav;
