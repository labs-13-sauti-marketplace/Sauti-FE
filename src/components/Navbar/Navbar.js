import React from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

import './Navbar.css';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Sauti App</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
