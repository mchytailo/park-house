import React, {FC, useState} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import {CustomHeader} from '../styles/CustomHeader';
import '../styles/index.css';
import {GlobalStyle} from '../styles/Global.styled';
import Main from "./Main/Main";
import General from "./General/General";

const App: FC = () => {
    const [ fullpageState, setFullpageState] = useState({
        direction: '',
        destination: {},
        origin:{}
    })
    return (
        <>
            <GlobalStyle/>
            <ReactFullpage
                scrollingSpeed={1000}
                sectionsColor={["orange", "purple",'white','white', "green", "blue"]}
                // menu={'#menu'}
                // anchors={['home', 'about', 'weOffer', 'realEstate', 'ourCases', 'reviews', 'faq', 'blogs']}
                scrollOverflow={true}
                onLeave={(origin, destination, direction)=>{
                    setFullpageState({direction, destination, origin})
                }}
                render={({state, fullpageApi}) => {
                    console.log('fullpageApi',fullpageApi);
                    return (
                        <ReactFullpage.Wrapper>
                            <Main
                                fullpageState={fullpageState}
                            />

                            <div className="section"/>
                            <div className="section"/>
                            <div className="section"/>

                            <div className="section section-4 fp-auto-height">
                                <CustomHeader>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dicta
                                    eligendi eos facere facilis harum nisi quas tempore. Aliquam aut cum dolore fugit,
                                    hic illo inventore iste, necessitatibus obcaecati possimus qui saepe unde
                                    voluptatibus. Alias amet cumque deleniti dignissimos eum facilis ipsa iusto labore
                                    laborum, magnam modi natus nulla omnis optio pariatur, quam quis recusandae
                                    temporibus velit veniam? Ab amet architecto, commodi deserunt dolorem earum,
                                    excepturi facere illo ipsa minus molestias mollitia necessitatibus nemo odit omnis
                                    perferendis placeat porro possimus quam quis quisquam rerum saepe sapiente sed sequi
                                    sint sit tempora totam vel voluptas. Alias aliquid dolore fugit mollitia
                                    vero.!</CustomHeader>
                                <p>Section 4</p>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />

            <General
                fullpageState={fullpageState}
            />


        </>
    );
}

export default App;