import styled from "styled-components";



export const HeaderWrapper = styled.div`  
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    @media (min-width: 1200px) {  
        height: 100px;
        
    }
    `
export const HeaderBlock = styled.div`  
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: calc(100% - 40px);
    padding: 0 20px;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    
    @media (min-width: 1200px) { 
        padding: 0 40px;
        width: calc(100% - 80px);
    }
    `
export const HeaderLogo = styled.img` 
    height: auto;
    width: 110px;
    @media (min-width: 1200px) { 
        width: 140px;
    }
    
    `
export const HeaderLink = styled.span` 
    font: normal normal normal 18px/55px OptimaNormal;
    letter-spacing: 5.4px;
    color: #434B42;
    text-transform: uppercase;
    opacity: 1;
    cursor: pointer;
    `
export const HeaderLinkFixed = styled.span` 
    font: normal normal normal 18px/55px OptimaNormal;
    letter-spacing: 5.4px;
    color: #fff;
    text-transform: uppercase;
    opacity: 1;
    position: fixed;
    top: 28px;
    right: 40px;
    z-index: 1000;
    cursor: pointer;
    
    @media (min-width: 1200px) { 
        top: 48px;
    }
    `