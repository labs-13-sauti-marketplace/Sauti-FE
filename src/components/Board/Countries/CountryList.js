import React from 'react';
import axios from 'axios';
import Country from './Country.js';
import './Country.css';
import { Link } from 'react-router-dom';

class CountryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/countries')
      .then(response => {
        this.setState(() => ({ countries: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    return (
      <div className="movie-list">
        Here
      </div>
    );
  }
}


export default CountryList;
