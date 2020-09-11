import React, {FC} from 'react';
import {MainBuildingImg, MainBuildingSection} from "./MainBuilding.styled";
import contentImage from "../../assets/images/main-building.png";
import contentImage2 from "../../assets/images/main-building2.png";

const MainBuilding: FC = ({progress,nextProgress}) => {
    return (
        <MainBuildingSection
            style={{
                position: progress === 1  ? 'fixed' : 'relative',
                visibility: nextProgress === 0 ? 'visible' : 'hidden'
            }}
        >
            <MainBuildingImg
                src={contentImage}
                alt=""
                style={{
                    opacity: String(1 - progress)
                }}
            />
            <MainBuildingImg
                src={contentImage2}
                alt=""
                style={{
                    opacity: String(progress)
                }}
            />
        </MainBuildingSection>)

}

export default MainBuilding;