import styled from 'styled-components';

export const HallBlock = styled.div`
    display: flex;
    justify-content: space-between;
    pointer-events: none;
    padding: 120px 0 10px;
    align-items: flex-end;
    `
export const HallWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    `
export const HallText = styled.p`
    margin: 0 0 -10px 100px;
    font-size: 30px;
    letter-spacing: 7.5px;
    font-weight: 100;
    text-transform: uppercase;
    max-width: 400px;    
    line-height: 1.6;
    transition: 1.5s;
    opacity: 0;
    ${props => {
    if (props.destination.index === 2)
        return fromTop;
}
}
    `
export const HallImageWrapper = styled.div`
    width: 65%;
    transition: 1.5s;
    position: relative;
&:after{
content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    transition: 1.5s;
    ${props => {
    if (props.destination.index === 2){
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
    if (props.destination.index === 2){
        return '0';
    }
    return '100%'
}
};
    background: white;
}
    `
export const HallImage = styled.img`
    width: 100%;
    transition: 1.5s;
    opacity: 0;
    ${props => {
    if (props.destination.index === 2)
        return fromTop;
}
}
    `

const fromTop = `
    opacity: 1;
`