import {createGlobalStyle} from "styled-components";
import OptimaFontBoldttf from '../assets/fonts/optima/Optima Medium.ttf';
import OptimaFontNormalttf from '../assets/fonts/optima/OPTIMA.ttf';
import OptimaFontBoldwoff from '../assets/fonts/optima-webfont/Optima Medium.woff';
import OptimaFontNormalwoff from '../assets/fonts/optima-webfont/OPTIMA.woff';

export const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: 'Optima', sans-serif;
    margin: 0;
    padding: 0;
    background: white;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  
  @font-face {
        font-family: 'Optima';
        src: 
        url(${OptimaFontNormalttf}) format('ttf'),
        url(${OptimaFontNormalwoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
  @font-face {
        font-family: 'Optima';
        src: 
        url(${OptimaFontBoldttf}) format('ttf'),
        url(${OptimaFontBoldwoff}) format('woff');
        font-weight: bold;
        font-style: normal;
    }
`;

