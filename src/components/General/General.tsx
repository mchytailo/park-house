import React, {FC} from 'react';
import Hall from "./Hall/Hall";
import Apartments from "./Apartments/Apartments";

const General: FC = ({fullpageState}) => {
    return (
        <>
            <Hall fullpageState={fullpageState}/>
            <Apartments fullpageState={fullpageState}/>
            <div className="section section-5">
            </div>
        </>
    )
}

export default General;