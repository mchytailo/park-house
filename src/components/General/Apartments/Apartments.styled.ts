import styled from 'styled-components';

export const ApartmentsWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    pointer-events: none;
    padding: 120px 0 10px 0;
    align-items: center;
    `
export const ApartmentsText = styled.p`
    margin: 0 auto;
    font-size: 30px;
    letter-spacing: 7.5px;
    font-weight: 100;
    text-transform: uppercase;
    max-width: 400px;    
    line-height: 1.6;
    max-width: 800px;
    text-align: center;
    transition: 1.5s;
    opacity: 0;
    ${props => {
    if (props.destination.index === 3)
    // if (props.direction === "down" && props.destination.index === 3)
        return fromTop;
}
}
    `

export const ApartmentsImageWrapper = styled.div`
    width: 35%;
    transition: 1.5s;
    position: relative;
&:after{
content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    transition: 1.5s;
    ${props => {
    if (props.destination.index === 3){
        return `
        width: 0;
        opacity: 1;
        `;
    }
    return `
        width: 100%;
        opacity: 0;
        `;
}
}
    width: ${props => {
    if (props.destination.index === 3){
        return '0';
    }
    return '100%'
}
};
    background: white;
}
    `
export const ApartmentsImage = styled.img`
    width: 100%;
    transition: 1.5s;
    opacity: 0;
    ${props => {
    if (props.destination.index === 3)
        return fromTop;
}
}
    `

const fromTop = `
    opacity: 1;
`