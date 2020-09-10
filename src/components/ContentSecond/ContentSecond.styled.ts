import styled from "styled-components";

export const ContentSecondBlock = styled.div`  
    display: flex;
    height: calc(100vh - 222px);
    padding: 111px 0; 
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    `

export const ContentSecondImageBlock = styled.div`
    width: 33%;
    overflow: hidden;
    opacity:${
    props =>{
        if(props.currentProgress === 1){
            return String(1 - props.nextProgress) + ' !important'
        }

    }
}
    `
export const ContentSecondImage = styled.img`

    `
export const ContentSecondText = styled.p`
    text-align: center;
    font: normal normal normal 30px/50px OptimaNormal;
    letter-spacing: 9px;
    color: #797972;
    text-transform: uppercase;
    max-width: 800px;
    margin: 0;
    `
export const ContentSecondTextBlock = styled.div`
    width: 67%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    opacity:${
    props =>{
        if(props.currentProgress === 1){
            return String(1 - props.nextProgress) + ' !important'
        }

    }
}
    `