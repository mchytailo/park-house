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
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    opacity:${
    props =>{
        if(props.currentProgress === 1){
            return String(1 - props.nextProgress) + ' !important'
        }

    }
};
    transform: translateY(${
    props =>{
        if(props.currentProgress === 1){
            return String(props.nextProgress * (-100)) + 'vh';
        }

    }
});

&:after {
        content: '';
        display: block;
        background: white;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: ${
    props =>{
        if(props.currentProgress > 0){
            return String((props.currentProgress) * 100) + '%'
        }

    }
}; 
    }
    `
export const ContentSecondImage = styled.img`
    width: 100%
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
};
    transform: translateY(${
    props =>{
        if(props.currentProgress === 1){
            return String(props.nextProgress * (-80)) + 'vh';
        }

    }
});
    `