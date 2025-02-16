import React from "react";
import Menubar from './Navbar/Menubar.jsx';
import Threeswiper from './ThreeSwiper/Threeswiper.jsx';
import Marquee from './Marquee/Marquee.jsx';

function Header(){
    return(
        <>
        <Menubar></Menubar>
        <Threeswiper></Threeswiper>
        <Marquee></Marquee>
        </>
    )
}

export default Header;