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
    @media (max-width: 991.98px) { 
        height: 80px;
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
    @media (max-width: 991.98px) { 
        padding: 0 40px 20px 24px;
        height: calc(100% - 20px);
        width: calc(100% - 64px);
        align-items: flex-end;
    }
    @media (max-width: 575.98px) { 
        padding: 0 24px 20px ;
        width: calc(100% - 40px);
    }
    `
export const HeaderLogo = styled.img` 
    height: auto;
    width: 110px;
    @media (min-width: 1200px) { 
        width: 140px;
    }
    @media (max-width: 991.98px) {
        width: 110px;
    }
    
    `
export const HeaderLink = styled.span` 
    font: normal normal normal 18px/55px OptimaNormal;
    letter-spacing: 5.4px;
    color: #434B42;
    text-transform: uppercase;
    opacity: 1;
    cursor: pointer;
    
    @media (max-width: 991.98px) {
        font: normal normal normal 16px/32px OptimaNormal;
        letter-spacing: 4.8px;
    }
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
    
    @media (min-width: 1200px) { 
        top: 48px;
    }
    
    @media (max-width: 991.98px) {
        top: 78px;
        font: normal normal normal 16px/16px OptimaNormal;
        letter-spacing: 4.8px;
    }
    
    
    @media (max-width: 767.98px) { 
        top: 48px;
    }
    
    @media (max-width: 575.98px) { 
        top: auto;
        bottom: 40px;
        right: 24px;
     }
    `