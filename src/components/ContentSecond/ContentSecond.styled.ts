import styled from "styled-components";
import {size} from "../../styles/Global.styled";

export const ContentSecondBlock = styled.div`  
    display: flex;
    height: calc(100vh - 222px);
    padding: 111px 0; 
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    
    @media (max-width: ${size.laptop}) {
        height: calc(100vh - 100px);
        padding: 100px 0 0;
    }
    @media (max-width: ${size.tablet}) {
        flex-direction: column;
        justify-content: center;  
    }
    `

export const ContentSecondImageBlock = styled.div`
    width: 33%;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    
    @media (max-width: ${size.tablet}) {
        width: calc(100% - 32px);
        max-width: 540px;
        height: auto;
        margin-right: 32px;
    }
    `


export const ContentSecondImageBlockWall = styled.div`
    content: '';
    display: block;
    background: white;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    `
export const ContentSecondImage = styled.img`
    width: 100%;
    object-fit: cover;
    @media (max-width: ${size.tablet}) {
        min-height: auto;
        height: 120%;
        object-position: 0 0;
    }
    `
export const ContentSecondText = styled.p`
    text-align: center;
    font: normal normal normal 30px/50px Optima;
    letter-spacing: 9px;
    color: #797972;
    text-transform: uppercase;
    max-width: 800px;
    margin: 0;
    
    @media (max-width: ${size.laptop}) {
        font: normal normal normal 26px/40px Optima;
        letter-spacing: 8px;
    }
    
    @media (max-width: ${size.tablet}) {
        font: normal normal normal 22px/35px Optima;
        letter-spacing: 6.2px;
    }
    
    @media (max-width: ${size.mobile}) { 
        font: normal normal normal 18px/30px Optima;
        letter-spacing: 4.4px;
        margin: 40px 16px;
    }
    `
export const ContentSecondTextBlock = styled.div`
    width: calc(67% - 80px);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 0 40px;
    
    @media (max-width: ${size.tablet}) {
        height: auto;
        min-height: 110px;
        padding: 40px;
        width: calc(100% - 80px);
    }
    @media (max-width: ${size.mobile}) {
        width: calc(100% - 60px);
        padding: 30px;
    }
    `