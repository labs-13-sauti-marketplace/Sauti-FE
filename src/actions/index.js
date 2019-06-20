//allows us to work with API
import axios from 'axios';

//fetching markets variable
export const FETCH_MARKETS = "FETCH_MARKETS";
export const ERROR = "ERROR"

export const getCountries = () => dispatch => {
  dispatch({type: FETCH_MARKETS });

  axios
    .get("https://sauti-marketplace.herokuapp.com/markets")
    .then(res => {
      console.log(res);
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch(err=> {
      console.log(err);
      dispatch({type: ERROR, payload: err })
    })

}
