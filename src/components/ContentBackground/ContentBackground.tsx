import React, {FC, RefObject, useEffect} from 'react';
import {ContentBackgroundSection} from "./ContentBackground.styled";

interface IProps {
    currentProgress: number,
    contentMainRef: RefObject<HTMLDivElement> | null
    headerRef: RefObject<HTMLDivElement> | null
}

const ContentBackground: FC<IProps> = ({currentProgress, contentMainRef, headerRef}) => {
    useEffect(() => {
        let contentMainBlock = contentMainRef && contentMainRef.current || null;
        let headerBlock = headerRef && headerRef.current || null;
        let fixedHeader = document.getElementsByClassName('header-fixed')[0] as HTMLElement;
        if (currentProgress === 1) {
            contentMainBlock && (contentMainBlock.style.visibility = 'hidden');
            fixedHeader.style.visibility = 'hidden';
        } else {
            contentMainBlock && (contentMainBlock.style.visibility = 'visible');
            fixedHeader.style.visibility = 'visible';
        }
        headerBlock && (headerBlock.style.top = String((1 - currentProgress) * (-100)) + '%')
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