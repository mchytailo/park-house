import styled from "styled-components";

export const ParalaxImageWrapper = styled.div`
    &.active img{
        bottom: 0;
    }
    `
export const StyledParalaxImage = styled.img`
        height: 120vh;
        position: absolute;
        bottom: ${props => props.parallaxImage ? '-100%' : '0'};
        right: 0;
        transition: 1.5s;
    `