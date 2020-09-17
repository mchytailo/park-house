import styled from "styled-components";

export const ContentSecondBlock = styled.div`  
    display: flex;
    height: calc(100vh - 222px);
    padding: 111px 0; 
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    
    @media (max-width: 1199.98px) {
        height: calc(100vh - 100px);
        padding: 100px 0 0;
    }
    @media (max-width: 991.98px) {
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
    transition: .1s;
    
    @media (max-width: 991.98px) {
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
    @media (max-width: 991.98px) {
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
    
    @media (max-width: 1200px) {
        font: normal normal normal 26px/40px Optima;
        letter-spacing: 8px;
    }
    
    @media (max-width: 991.98px) {
        font: normal normal normal 24px/40px Optima;
        letter-spacing: 7.2px;
    }
    
    @media (max-width: 575.98px) { 
        font: normal normal normal 18px/30px Optima;
        letter-spacing: 4.4px;
        margin: 40px 16px;
    }
    `
export const ContentSecondTextBlock = styled.div`
    width: 67%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: .1s;
    
    @media (max-width: 991.98px) {
        width: 100%;
        height: auto;
        min-height: 170px;
    }
    `