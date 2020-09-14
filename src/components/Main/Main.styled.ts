import styled from "styled-components";

export const MainWrapper = styled.div`
    height: 100vh;
    `
export const MainSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 100px 140px 20px;
    max-height: 780px;
    height: calc(100% - 120px);
    > div {
        transition: .1s;
    }
    
    @media (min-width: 1200px) { 
        padding: 128px 140px 20px;
        height: calc(100% - 148px);
        
    }
    `