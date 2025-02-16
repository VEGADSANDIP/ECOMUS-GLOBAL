import React, { useState } from "react";
import Logo from "./Logo";
import NavbarContent from "./NavbarContent";
import SmallNavBar from "./SmallNavBar";
import UserIcon from "./UserIcon";








function Menubar(props) {





    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-10 bg-white">
                <div className="container max-w-[95%] mx-auto">
                    <div className="flex justify-between items-center py-9">
                        <div className="order-2 lg:order-1">
                            <Logo></Logo>
                        </div>

                        <div className="order-1 lg:hidden">
                            <SmallNavBar></SmallNavBar>
                        </div>

                        <div className="hidden lg:flex lg:order-2 items-center justify-center">
                            <NavbarContent></NavbarContent>

                        </div>

                        <div className="order-3 flex gap-2">
                            <UserIcon></UserIcon>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menubar;
