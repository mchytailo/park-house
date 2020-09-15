import styled from "styled-components";

export const IntroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    padding-left: 170px;
    max-width: 600px;
    transition: .3s;
    @media (max-width: 991.98px) {    
        padding-left: 13%;
    }
    `
export const IntroText = styled.p`
    margin: 0;
    text-align: left;
    font: normal normal normal 25px/40px OptimaNormal;
    letter-spacing: 0px;
    color: #FFFFFF;
    margin-bottom: 56px;
    
    @media (max-width: 991.98px) {
        font: normal normal normal 22px/34px OptimaNormal;
        margin-bottom: 40px;
    }
    `

export const IntroLabel = styled.p`
    margin: 0;
    text-align: left;
    font: normal normal normal 22px/40px OptimaNormal;
    letter-spacing: 5.5px;
    color: #FFFFFF;
    text-transform: uppercase;
    @media (max-width: 991.98px) {
        font: normal normal normal 18px/32px OptimaNormal;
        letter-spacing: 4.5px;
    }
    `