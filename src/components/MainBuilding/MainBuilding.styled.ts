import styled from "styled-components";

export const MainBuildingSection = styled.div`
    position: relative;
    height: 100vh;
    bottom: 0;
    left: 0;
    right: 0;
    transition: .1s;
    
@media (max-width: 991.98px) { 
    height: 30vh;

}
    `

export const MainBuildingImg = styled.img`
    position: absolute;
    bottom: -15%;
    left: 0;
    min-height: 250%;
    min-width: 100%;
    pointer-events: none;
    transition: .1s;
    @media (min-width: 1200px) { 
        bottom: 0;
    }
@media (max-width: 991.98px) { 
    width: 150%;
    min-height: auto;
    min-width: auto;

        bottom: 0;
}
    
    `