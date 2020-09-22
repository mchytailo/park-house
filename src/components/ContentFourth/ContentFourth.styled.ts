import styled from "styled-components";
import {size} from "../../styles/Global.styled";

export const ContentFourthBlock = styled.div`
    height: 100vh;
    position: relative;
    overflow: hidden;
    @media (max-width: ${size.tablet}) {
        max-height: 700px;
    }
    
    @media (max-width: ${size.mobile}) { 
        height: auto;
    }
    `
export const ContentFourthImage = styled.img`
    min-width: 100%;
    min-height: 100%;
    left: 0;
    object-fit: cover;
    bottom: 0;
    width: 100%;
    
    @media (max-width: ${size.mobile}) { 
        min-height: 400px;
    }
    `
export const ContentFourthText = styled.h3`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0 20%;
    text-align: center;
    font: normal normal normal 30px/50px Optima;
    letter-spacing: 9px;
    color: #797972;
    text-transform: uppercase;
        
    @media (max-width: ${size.laptop}) {
        max-height: 300px;
        font: normal normal normal 26px/45px Optima;
        letter-spacing: 8px;
        padding: 0 15%;
    }
    @media (max-width: ${size.tablet}) {
        font: normal normal normal 24px/40px Optima;
        letter-spacing: 7.2px;
        padding: 0 44px;
    }
    
    @media (max-width: ${size.mobile}) { 
        max-height: none;
        height: auto;
        font: normal normal normal 20px/40px Optima;
        letter-spacing: 4.4px;
        padding: 40px 10px;
    }
    
    `