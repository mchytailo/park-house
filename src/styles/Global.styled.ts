import {createGlobalStyle} from "styled-components";
import OptimaFontNormalttf from '../assets/fonts/optima/OPTIMA.ttf';
import OptimaFontNormalwoff from '../assets/fonts/optima-webfont/OPTIMA.woff';

export const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: 'Optima', sans-serif;
    margin: 0;
    padding: 0;
    background: ${props => props.changeBackground === 1 ? 'white' : 'grey'};
  }
 *{
 
 }
  
  @font-face {
        font-family: 'OptimaNormal';
        src: 
        url(${OptimaFontNormalttf}) format('ttf'),
        url(${OptimaFontNormalwoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
  
  .scrollmagic-container .scrollmagic-pin-spacer:nth-child(1){
      padding-top: 0 !important;
      padding-bottom: 0 !important;
      z-index: 1;
  }
`;

