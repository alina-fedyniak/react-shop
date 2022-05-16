import styled from 'styled-components';
import { device } from '../../constants/screenSizes';

export const SvgWrap = styled.div`
  cursor: pointer;
  display: flex;
  svg {
    height: 57px;
  }
  @media ${device.mobileL} { 
   padding-bottom: 20px;
   display: flex;
   align-items: center;
  }
  @media ${device.mobileS} {
    position: absolute;
    top: 21px;
    left: 0px;
    svg {
     height: auto;
   }
  }
`;