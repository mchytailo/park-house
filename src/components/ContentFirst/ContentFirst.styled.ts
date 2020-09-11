import styled from "styled-components";

export const ContentBackgroundSection = styled.div`
    height: 100vh;
    background: white;
    
    position: ${props => props.progress > 0 ? 'fixed' : 'relative'};
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
    `

export const ContentFirstTextBlock = styled.div`
    width: 33%;
    overflow: hidden;
    height: 100%;
    display: flex;
    align-items: flex-end;
    `
export const ContentFirstText = styled.p`
    text-align: left;
    font: normal normal normal 30px/50px OptimaNormal;
    letter-spacing: 9px;
    color: #797972;
    text-transform: uppercase;
    max-width: 440px;
    padding-left: 80px;
    `
export const ContentFirstImageBlock = styled.div`
    width: 67%;
    position: relative;
    overflow: hidden;
    `



export const ContentFirstImageBlockWall = styled.div`
        content: '';
        display: block;
        background: white;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;

    `

export const ContentFirstImage = styled.img`

    `