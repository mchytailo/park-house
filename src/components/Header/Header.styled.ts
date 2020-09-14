import styled from "styled-components";



export const HeaderWrapper = styled.div`  
    height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    `
export const HeaderBlock = styled.div`  
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: calc(100% - 80px);
    padding: 0 40px;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    `
export const HeaderLogo = styled.img` 
    width: 140px;
    height: auto;
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
    top: 48px;
    right: 40px;
    z-index: 1000;
    cursor: pointer;
    `