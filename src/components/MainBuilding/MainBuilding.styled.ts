import styled from "styled-components";

export const MainBuildingSection = styled.div`
    position: relative;
    height: 100vh;
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;
    transition: .1s;
    `

export const MainBuildingImg = styled.img`
    position: absolute;
    bottom: -15%;
    left: 0;
    min-height: 200%;
    min-width: 100%;
    pointer-events: none;
    transition: .1s;
    
    @media (min-width: 1200px) { 
        bottom: 0;
    }
    
    `