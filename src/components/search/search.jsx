import React, {useContext} from 'react'
import {debounce} from "lodash"

import {BandContext} from '../bandContext/bandContext'

import {SearchInput} from './search.styles'


export default () => {
  const {state, dispatch} = useContext(BandContext);

  const delayedDispatch = debounce((e) => {dispatch({type: "searchInput", value: e.target.value})}, 300)

  const handleInput = (e) => {
    e.persist();

    delayedDispatch(e)
  }

  return <SearchInput defaultValue={state.search} onInput={e => handleInput(e)} placeholder="Search a band name"/>
}