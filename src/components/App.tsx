import React, {FC, useRef} from 'react';
import {Controller, Scene} from 'react-scrollmagic';
import {GlobalStyle} from '../styles/Global.styled';
import Main from "./Main/Main";
import {Timeline} from "react-gsap";
import ContentFirst from "./ContentFirst/ContentFirst";
import ContentSecond from "./ContentSecond/ContentSecond";
import ContentThird from "./ContentThird/ContentThird";
import ContentFourth from "./ContentFourth/ContentFourth";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ContentBackground from "./ContentBackground/ContentBackground";
import {MainWrapper} from "./Main/Main.styled";

const App: FC = () => {
    const headerRef = useRef<HTMLDivElement>(null)
    const contentMainRef = useRef<HTMLDivElement>(null)
    const contentFirstRef = useRef<HTMLDivElement>(null)
    const contentSecondRef = useRef<HTMLDivElement>(null)
    const contactRef = useRef<HTMLDivElement>(null)
    const windowWidth = window.innerWidth;
    return (
        <>
            <Header
                headerRef={headerRef}
                contactRef={contactRef}
            />
            <div className={'scrollmagic-container'}>
                <GlobalStyle/>

                <Controller>
                    <Scene
                        duration={windowWidth > 991.98 ? '100%' :
                        windowWidth < 576 ? '70%' : '30%'}
                        triggerHook={'onLeave'}
                    >
                        {function (progress: number) {
                            return (
                                <MainWrapper>
                                    <Main
                                        currentProgress={progress}
                                        contentMainRef={contentMainRef}
                                    />
                                </MainWrapper>
                            );
                        }}
                    </Scene>

                    <Scene
                        duration={'100%'}
                        triggerHook={'onEnter'}
                    >
                        {function (progress: number) {
                            console.log(progress);
                            if(progress > 0){
                                contentMainRef.current.style.position = 'fixed';
                                contentMainRef.current.style.bottom = progress  * 100 + 'vh';

                            }
                            return (

                                <div >
                                    <Contact contactRef={contactRef}/>
                                    <Footer/>
                                </div>
                            );
                        }}
                    </Scene>
                </Controller>
            </div>
        </>
    );
}

export default App;