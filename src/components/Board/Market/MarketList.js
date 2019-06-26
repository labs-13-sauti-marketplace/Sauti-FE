import React from 'react';
import ReactDOM from 'react-dom';
import './Market.css';
import axios from 'axios';

class MarketList extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        id: []
      }
  }

  render() {
    return(
      <div>
        Markets List: 
      </div>
    )
  }

}



// class MarketList extends  React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       id: [],
//     }
//
//     componentDidMount() {
//       axios
//         .get(`https://sauti-marketplace.herokuapp.com/country/api/markets/${id}`)
//         .then(res => {
//           this.setState({id: params.id})
//         })
//         .catch(err => {
//           console.log(err);
//         })
//     }
  // componentDidMount() {
  //   axios
  //       .get('http://localhost:5000/friends')
  //       .then(res => {
  //           this.setState({friends: res.data})
  //       })
  //       .catch(err => {
  //           console.log(err);
  //       })
  // }
//
//     render(){
//       return(
//         <div>
//           <h2> Markets: </h2>
//         </div>
//       )
//     }
//   }
// }


export default MarketList;


// api/markets/:id
