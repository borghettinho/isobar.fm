import React, {useReducer, useEffect} from 'react';
import axios from "axios";

const initialState = {
  search: "",
  filter: null,
  fetchedBands: [],
  loading: true,
};

const BandContext = React.createContext(initialState)

const reducer = (state, action) => {
  switch(action.type) {
    case "searchInput":
      return {...state, search: action.value}
    case "fetchBands":
      return {...state, fetchedBands: action.value}
    case "setLoading":
      return {...state, loading: action.value}
    default:
      return;
  }
}

const BandProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    (async () => {
      await axios
        .get("https://iws-recruiting-bands.herokuapp.com/api/bands")
        .then(res => {
          dispatch({type: "fetchBands", value: res.data});
          dispatch({type: "setLoading", value: false})
        })
        .catch(err => console.log(err));
    })()
  }, [])

  return (
    <BandContext.Provider value={{state, dispatch}}>
      {children}
    </BandContext.Provider>
  )
};

export {
  BandProvider,
  BandContext
}