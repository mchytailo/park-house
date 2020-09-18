import styled from "styled-components";

export const MainWrapper = styled.div`
    height: 200vh;
    position: relative;

    @media (max-width: 991.98px) { 
        height: 130vh;
    }
    @media (max-width: 575.98px) { 
        height: 170vh;
    }
    `
export const MainSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 780px;
    height: calc(100% - 200px);
    padding: 100px 140px;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 10;
    
    @media (min-width: 1200px) {
        padding: 128px 140px 200px;
        height: calc(100% - 328px);
    }
    
    @media (max-width: 991.98px) {
        padding: 70px 5%;
        height: auto;
        max-height: 500px;
    }
    `
export const MainBackground = styled.div`
    bottom: 0;    
    width: 100%;
    height: 200vh;
    @media (max-width: 991.98px) { 
        height: 130vh;
    }
    @media (max-width: 575.98px) { 
        height: 170vh;
    }
    `

export const MainBuildingImg = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
    pointer-events: none;
    transition: .1s;
    width: 100%;
    min-height: 100%;
    min-width: 104vh;
    object-fit: cover;
    object-position: 0;
    `