import React from 'react';
import { BandList } from './bandList.styles'

export default ({children}) => {

  const bandlistAnimation = {
    hidden: {opacity: 0, translateY: 40},
    visible: {opacity: 1, translateY: 0, transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
    }}
  }

  return (
    <BandList variants={bandlistAnimation}>
      {children}
    </BandList>
  )
}
