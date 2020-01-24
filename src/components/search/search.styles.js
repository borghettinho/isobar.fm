import styled from 'styled-components'

const SearchInput = styled.input`
  background: ${({theme}) => theme.colors.white};
  border: none;
  padding: 5px 10px;
  flex: 1;
  margin-right: 20px;
  outline: none;
  transition: background 250ms ease-out;
  
  &:focus {
    background: rgba(255, 255, 255, 0.9);
    transition: background 250ms ease-out;
  }
`

export {SearchInput}