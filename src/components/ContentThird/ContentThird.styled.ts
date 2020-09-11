import styled from "styled-components";

export const ContentThirdBlock = styled.div`  
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    padding: 0;
    `
export const ContentThirdImageLeftBlock = styled.div`
width: 100%;
height: 450px;
overflow: hidden;
    align-items: center;
    display: flex;
    position: relative;
    
&:after {
        content: '';
        display: block;
        background: white;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: ${
    props =>{
        if(props.currentProgress > 0){
            return String((props.currentProgress) * 100) + '%'
        }

    }
}; 
    }
    `
export const ContentThirdSection = styled.div`
    width: 50%;
    overflow: hidden;
    `
export const ContentThirdSectionLeft = styled.div`
    width: 40%;
    overflow: hidden;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    `

export const ContentThirdImageRight = styled.img`
width: 100%;
    `
export const ContentThirdImageLeft = styled.img`
width: 100%;

    `
export const ContentThirdText = styled.p`
    text-align: left;
font: normal normal normal 25px/30px OptimaNormal;
letter-spacing: 0px;
color: #797972;
    max-width: 800px;
    margin: 0;
    `
export const ContentThirdHeader = styled.h3`
    text-align: left;
font: normal normal normal 25px/31px OptimaNormal;
letter-spacing: 7.5px;
color: #000000;
text-transform: uppercase;
    max-width: 800px;
    margin: 0 0 16px;
    `
export const ContentThirdTextBlock = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px 0 0 80px;
    overflow: hidden;
    `
