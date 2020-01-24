import React from 'react';
import styled from 'styled-components'
import {motion} from 'framer-motion';

const StyledNoResult = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 50%;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }

  h2 {
    font-size: 1.2rem;
    color: ${({theme}) => theme.colors.light_gray};
    margin-bottom: 10px;
    font-family: ${({theme}) => theme.fonts.primaryFont};
    font-weight: ${({theme}) => theme.fonts.strong};
  }

  img {
    width: 150px;
    height: 150px;
  }
`

export default () => {
  return (
    <StyledNoResult initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}}>
      <h2>No results..</h2>
      <img  src="/assets/no_results.png" alt="no results found"/>
    </StyledNoResult>
  )
}