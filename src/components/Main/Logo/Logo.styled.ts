import styled from "styled-components";

export const LogoWrapper = styled.div`
    display: flex;
    margin-bottom: 80px;
    transition: 1s;
    max-width: 100%;
    width: 360px;
    max-width: 720px;
    @media (max-width: 1280px) {
        max-width: 400px;
    }
    @media (min-width: 992px) {
        width: 100%;
    }
    @media (max-width: 767.98px) { 
        max-width: 330px;
        width: 100%;
    }
    
    @media (max-width: 575.98px) { 
        max-width: none;
        margin-bottom: 20px;
    }
    `
export const LogoIcon = styled.img`
    width: 100%;
    `