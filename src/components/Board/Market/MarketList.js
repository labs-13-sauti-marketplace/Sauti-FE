import React from 'react';
import ReactDOM from 'react-dom';
import './Market.css';
import axios from 'axios';

class MarketList extends  React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: [],
    }

    componentDidMount(){
      //axios get
      axios
        .get(`https://sauti-marketplace.herokuapp.com/country/api/markets/${id}`)
        .then(res => {
          this.setState({id: params.id})
        })
        .catch(err => {
          console.log(err);
        })
    }

    render(){
      return(
        <div>
          <h2> Markets: </h2>
        </div>
      )
    }
  }
}


export default MarketList;


// api/markets/:id
