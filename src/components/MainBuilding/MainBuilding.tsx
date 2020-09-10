import React, {FC} from 'react';
import {MainBuildingImg, MainBuildingSection} from "./MainBuilding.styled";
import contentImage from "../../assets/images/Example.png";

const MainBuilding: FC = () => {
    return (
        <MainBuildingSection>
            <MainBuildingImg src={contentImage} alt=""/>
        </MainBuildingSection>)

}

export default MainBuilding;