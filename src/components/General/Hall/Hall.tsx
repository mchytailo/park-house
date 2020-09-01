import React, {FC} from 'react';
import {HallBlock, HallImage, HallImageWrapper, HallText, HallWrapper} from "./Hall.styled";

const Hall: FC = ({fullpageState}) => {
    const {direction, destination, origin} = fullpageState;
    return (
        <>
            <div className="section section-3"/>
            <HallWrapper>
                <HallBlock>
                    <HallText
                        destination={destination}
                        direction={direction}
                    >
                        Lorem ipsum dolor sit amet, consectetur
                    </HallText>
                    <HallImageWrapper
                        destination={destination}
                        direction={direction}
                    >
                        <HallImage
                            src={'https://picsum.photos/1200/800'}
                            alt=""
                            destination={destination}
                            direction={direction}
                        />
                    </HallImageWrapper>
                </HallBlock>
            </HallWrapper>
        </>
    )
}

export default Hall;