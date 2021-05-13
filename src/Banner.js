import React from 'react';
import widelogo from './widelogo.png'

function Banner(){
    return (
        <>
        {/* <h1 id="banner">newWave</h1> */}
        <img className="bannerlogo" src={widelogo} />
        </>
    )
}

export default Banner