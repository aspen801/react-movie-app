import React from "react";
import "./homepage.scss"

import background from '/assets/tenet.jpg'


const HomePage = () => {
    
    return (
        <div className="homepage__main-wrapper">
            <img src={background} alt="" />
        </div>
    )
}

export default HomePage