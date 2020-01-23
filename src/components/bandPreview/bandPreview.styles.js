import styled from "styled-components";
import {motion} from "framer-motion"

const BandPreview = styled(motion.li)`
  padding: 15px 20px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light_gray};
`;

const Avatar = styled.figure`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 50%;
    width: 3.6rem;
    height: 3.6rem;
  }
`;

const Infos = styled.figcaption`
  flex: 1;
  padding: 0px 0px 0px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;


  h2 {
    margin: 0;
    font-family: ${({theme}) => theme.fonts.primaryFont};
    font-weight: ${({theme}) => theme.fonts.strong};
    font-size: 1.2rem;
    text-transform: uppercase;

    color: ${({theme}) => theme.colors.black}
  }
  p {
    margin: 0;
    font-family: ${({theme}) => theme.fonts.primaryFont};
    font-weight: ${({theme}) => theme.fonts.regular};

    color: ${({theme}) => theme.colors.medium_gray}
  }
`;

export { BandPreview, Avatar, Infos };
