import styled from "styled-components";
import { transparentize } from "polished";

const Header = styled.header`
  position: fixed;
  top: 0;
  height: ${({ theme }) => theme.layout.headerH};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => transparentize(0.1, theme.colors.primary)};
`;

export { Header };
