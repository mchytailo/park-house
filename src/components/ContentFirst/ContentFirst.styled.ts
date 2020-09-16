import styled from "styled-components";

export const ContentBackgroundSection = styled.div`
    height: 100vh;
    background: white;
    top:0;
    left: 0;
    right: 0;
    `
export const ContentFirstBlock = styled.div`  
    display: flex;
    height: calc(100vh - 222px);
    padding: 111px 0; 
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    
    @media (max-width: 1199.98px) {
        align-items: center;
    }
    @media (max-width: 991.98px) {
        flex-direction: column;
        justify-content: center;
        align-items: normal;
         
        height: calc(100vh - 100px);
        padding: 100px 0 0;
    }
    
    `

export const ContentFirstTextBlock = styled.div`
    width: 33%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    
    @media (max-width: 991.98px) {
        width: 100%;
        max-width: 440px;
        height: auto;
    }
    `
export const ContentFirstText = styled.p`
    text-align: left;
    font: normal normal normal 30px/50px OptimaNormal;
    letter-spacing: 9px;
    color: #797972;
    text-transform: uppercase;
    max-width: 440px;
    padding-left: 80px;
    width: 100%;
    
    
    @media (max-width: 1199.98px) {
        padding-left: 40px;
        width: calc(100% - 40px);
    }
    @media (max-width: 991.98px) {
        font: normal normal normal 24px/40px OptimaNormal;
        letter-spacing: 7.2px;
        margin: 0 0 6vh 0;
    }
    
    @media (max-width: 575.98px) { 
        font: normal normal normal 20px/40px OptimaNormal;
        letter-spacing: 4.4px;
    }
    
    `
export const ContentFirstImageBlock = styled.div`
    width: 67%;
    position: relative;
    overflow: hidden;
    
    @media (max-width: 991.98px) {
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
    
    // @media (max-width: 991.98px) {
    //     position: fixed;
    // }
    `

export const ContentFirstImage = styled.img`

width: 100%;

    `