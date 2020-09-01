import React, {FC} from 'react';
import {ApartmentsImage, ApartmentsImageWrapper, ApartmentsText, ApartmentsWrapper} from "./Apartments.styled";
import {HallImageWrapper} from "../Hall/Hall.styled";

const Apartments: FC = ({fullpageState}) => {
    const {direction, destination, origin} = fullpageState;
    return (
        <>
            <div className="section section-4"/>
            <ApartmentsWrapper>
                <ApartmentsImageWrapper
                    destination={destination}
                    direction={direction}
                >
                    <ApartmentsImage
                        src={'https://picsum.photos/600/800'}
                        alt=""
                        destination={destination}
                        direction={direction}
                    />
                </ApartmentsImageWrapper>

                <ApartmentsText
                    destination={destination}
                    direction={direction}
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error illum incidunt laudantium?
                </ApartmentsText>
            </ApartmentsWrapper>
        </>
    )
}

export default Apartments;