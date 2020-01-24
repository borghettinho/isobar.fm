import React from 'react';

import { BandList } from './bandList.styles'

export default ({children}) => {

  return (
    <BandList>
      {children}
    </BandList>
  )
}
