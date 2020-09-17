import React, {FC, useEffect} from 'react';
import {ContentBackgroundSection} from "./ContentBackground.styled";

const ContentBackground: FC = ({currentProgress, contentMainRef, headerRef}) => {
    useEffect(() => {
        let contentMainBlock = contentMainRef.current;
        let headerBlock = headerRef.current;
        let fixedHeader = document.getElementsByClassName('header-fixed')[0];
        if (currentProgress === 1) {
            contentMainBlock.style.visibility = 'hidden'
            fixedHeader.style.visibility = 'hidden'
        } else {
            contentMainBlock.style.visibility = 'visible'
            fixedHeader.style.visibility = 'visible'
        }
        headerBlock.style.top = String((1 - currentProgress) * (-100)) + '%'
    }, [currentProgress])
    return (
        <ContentBackgroundSection
            style={{
                position: currentProgress === 1 ? 'fixed' : 'relative'
            }}
            className={'content-background-section'}
        />
    )

}

export default ContentBackground;