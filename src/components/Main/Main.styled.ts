import styled from "styled-components";

export const MainWrapper = styled.div`
    height: 100vh;
    `
export const MainSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 780px;
    height: calc(100% - 200px);
    padding: 100px 140px;
    > div {
        transition: .1s;
    }
    
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