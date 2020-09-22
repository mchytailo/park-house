import styled from "styled-components";
import {size} from "../../styles/Global.styled";

export const HeaderWrapper = styled.div`  
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    height: 100px;
    @media (max-width: ${size.laptop}) {  
        height: 80px;
    }
    
    `

export const HeaderBlock = styled.div`  
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 40px;
    width: calc(100% - 80px);
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    
    @media (max-width: ${size.laptop}) { 
        padding: 0 20px;
        width: calc(100% - 40px);
    }
    @media (max-width: ${size.tablet}) { 
        padding: 0 40px 20px 24px;
        height: calc(100% - 20px);
        width: calc(100% - 64px);
        align-items: flex-end;
    }
    @media (max-width: ${size.mobile}) { 
        padding: 0 24px 20px ;
        width: calc(100% - 40px);
    }
    `

export const HeaderLogo = styled.img` 
    height: auto;
    width: 120px;
    @media (max-width: ${size.laptop}) { 
        width: 100px;
    }
    `

export const HeaderLink = styled.a` 
    font: normal normal normal 18px/55px Optima;
    letter-spacing: 5.4px;
    color: #434B42;
    text-transform: uppercase;
    opacity: 1;
    cursor: pointer;
    text-decoration: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
    @media (max-width: ${size.tablet}) {
        font: normal normal normal 16px/32px Optima;
        letter-spacing: 4.8px;
    }
    `

export const HeaderLinkFixed = styled.a` 
    font: normal normal normal 18px/55px Optima;
    letter-spacing: 5.4px;
    color: #fff;
    text-transform: uppercase;
    opacity: 1;
    position: fixed;
    top: 28px;
    right: 40px;
    z-index: 1000;
    cursor: pointer;
    text-decoration: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
    @media (min-width: ${size.laptop}) { 
        top: 48px;
    }
    
    @media (min-width: ${size.laptop}) { 
        top: 48px;
    }
    
    @media (max-width: ${size.tablet}) {
        top: 78px;
        font: normal normal normal 16px/16px Optima;
        letter-spacing: 4.8px;
    }
    
    @media (max-width: ${size.tabletS}) { 
        top: 48px;
    }
    
    @media (max-width: ${size.mobile}) { 
        top: auto;
        bottom: 40px;
        right: 24px;
     }
    `