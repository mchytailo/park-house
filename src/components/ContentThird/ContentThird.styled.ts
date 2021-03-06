import styled from "styled-components";
import {size} from "../../styles/Global.styled";

export const ContentThirdBlock = styled.div`  
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    padding: 0;
    @media (max-width: ${size.tablet}) {
        flex-wrap: wrap;
        height: auto;
    }
    `
export const ContentThirdImageLeftBlock = styled.div`
    width: 100%;
    height: 450px;
    overflow: hidden;
    align-items: center;
    display: flex;
    position: relative;
    @media (max-width: ${size.laptop}) {
        width: 100%;
        max-width: 480px;
        height: 260px;
    }
    @media (max-width: ${size.mobile}) {
        height: 180px;
    }
    `


export const ContentThirdImageBlockWall = styled.div`
    content: '';
    display: block;
    background: white;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    `

export const ContentThirdSection = styled.div`
    width: 50%;
    overflow: hidden;
    
    @media (max-width: ${size.mobile}) { 
        width: calc(100% - 32px);
        margin-left: auto;
    }
    `
export const ContentThirdSectionLeft = styled.div`
    width: 40%;
    overflow: hidden;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media (max-width: ${size.laptop}) {
        width: 45%;    
        justify-content: flex-start;
    }
    @media (max-width: ${size.mobile}) { 
        width: 100%;   
        margin-bottom: 64px;
    }
    `

export const ContentThirdImageRight = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    `
export const ContentThirdImageLeft = styled.img`
    width: 100%;
    `
export const ContentThirdText = styled.p`
    text-align: left;
    font: normal normal normal 25px/30px Optima;
    letter-spacing: 0px;
    color: #797972;
    max-width: 800px;
    margin: 0;
    
    @media (max-width: ${size.desktop}) {
        font: normal normal normal 19px/30px Optima;
    }
    @media (max-width: ${size.tablet}) {
        font: normal normal normal 16px/22px Optima;
    }
    `
export const ContentThirdHeader = styled.h3`
    text-align: left;
    font: normal normal normal 28px/40px Optima;
    letter-spacing: 6px;
    color: #797972;
    text-transform: uppercase;
    max-width: 800px;
    margin: 0 0 16px;
    @media (max-width: ${size.laptop}) {
        font: normal normal normal 22px/30px Optima;
        letter-spacing: 5.5px;
    }
    @media (max-width: ${size.tablet}) {
        font: normal normal normal 18px/20px Optima;
        letter-spacing: 4.8px;
        margin: 20px 0 16px;
    }
    `
export const ContentThirdTextBlock = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10% 0 0 80px;
    @media (max-width: ${size.tablet}) {
        padding: 0 0 0 20px;
    }
    `

export const ContentThirdBlockMobile = styled.div`
    width: 100%;
    margin-bottom: 50px;
    @media (max-width: ${size.mobile}) {
        padding-right: 32px;
        width: calc(100% - 32px); 
    }
    `
