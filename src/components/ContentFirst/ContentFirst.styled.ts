import styled from "styled-components";
import {size} from "../../styles/Global.styled";

export const ContentFirstBlock = styled.div`  
    display: flex;
    height: calc(100vh - 222px);
    padding: 111px 0; 
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    
    @media (max-width: ${size.laptop}) {
        align-items: center;
        height: calc(100vh - 100px);
        padding: 100px 0 0;
    }
    @media (max-width: ${size.tablet}) {
        flex-direction: column;
        justify-content: center;
        align-items: normal; 
    }
    `

export const ContentFirstTextBlock = styled.div`
    width: 33%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    
    @media (max-width: ${size.tablet}) {
        width: 100%;
        max-width: 440px;
        height: auto;
    }
    `
export const ContentFirstText = styled.p`
    text-align: left;
    font: normal normal normal 30px/50px Optima;
    letter-spacing: 9px;
    color: #797972;
    text-transform: uppercase;
    max-width: 440px;
    padding-left: 80px;
    width: 100%;
    
    @media (max-width: ${size.laptop}) {
        padding-left: 40px;
        width: calc(100% - 40px);
        font: normal normal normal 26px/40px Optima;
        letter-spacing: 8px;
    }
    @media (max-width: ${size.tablet}) {
        font: normal normal normal 24px/40px Optima;
        letter-spacing: 7.2px;
        margin: 0 0 6vh 0;
    }
    
    @media (max-width: ${size.mobile}) { 
        font: normal normal normal 20px/40px Optima;
        letter-spacing: 4.4px;
    }
    `
export const ContentFirstImageBlock = styled.div`
    width: 67%;
    position: relative;
    overflow: hidden;
    
    @media (max-width: ${size.tablet}) {
        width: calc(100% - 40px);
        margin-left: auto;
        position: initial;
    }
    `

export const ContentFirstImageBlockWall = styled.div`
    content: '';
    display: block;
    background: white;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    `

export const ContentFirstImage = styled.img`
    width: 100%;
    `