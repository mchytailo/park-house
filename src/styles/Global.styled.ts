import {createGlobalStyle} from "styled-components";
import OptimaFontNormalttf from '../assets/fonts/optima/OPTIMA.ttf';
import OptimaFontNormalwoff from '../assets/fonts/optima-webfont/OPTIMA.woff';

export const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: 'Optima', sans-serif;
    margin: 0;
    padding: 0;
    background: white;
    overflow-x: hidden;
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
  
  // .scrollmagic-container .scrollmagic-pin-spacer:nth-child(1){
  //     padding-top: 0 !important;
  //     padding-bottom: 0 !important;
  //     z-index: 1;
  // }
  
    @media (min-width: 576px) { 
   
    }

    @media (min-width: 768px) { 
     
    }
    
    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) { 
    
    }
    
    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) { 
    
    }
    
    @media (max-width: 575.98px) { 
     
     }

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) { 

}

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) { 

}

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) {

}
`;

