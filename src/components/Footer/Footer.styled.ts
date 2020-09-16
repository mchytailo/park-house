import styled from "styled-components";

export const FooterSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
    
    @media (min-width: 1200px) { 
        padding: 56px 100px 28px;
    }
    
    @media (max-width: 991.98px) {
        padding: 40px 40px 0;
    }
    
    `

export const FooterLogoBlock = styled.div`
margin: 0 0 24px 0;
    `

export const FooterLogo = styled.img`
    width: 96px;
    height: auto;
    `

export const FooterText = styled.p`
    text-align: left;
    font: normal normal normal 14px/20px OptimaNormal;
    letter-spacing: 0px;
    color: #797972;
    margin: 0 0 24px 0;
    `