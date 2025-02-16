import React, { useState } from "react";
import BestBtn from "./BestBtn";
import UserIcon from "../UserIcon/UserIcon";
import ClotheSize from "../clothesSize/ClothesSize";
function BestSellerContainer(props) {

    const [hover, setHover] = useState(false);

    return (

        <>
            <div>
                <div
                    className="relative"
                    onMouseEnter={()=> setHover(true)}
                    onMouseLeave={()=> setHover(false)}>
                    <a href={props}>
                        <img className="w-full rounded-lg" src={hover? props.changeImg: props.bestImg} alt="" />
                    </a>
                    <div className="absolute bottom-12 w-full ">
                        <UserIcon></UserIcon>
                    </div>
                    <div className="absolute bottom-0 w-full">
                        <ClotheSize></ClotheSize>
                    </div>
                </div>
                <div className="pt-5 w-fit">
                    <a className="hover:text-red-600" href={props}><p>{props.BestText}</p></a>
                    <b>{props.BestPrice}</b>
                </div>
                <div className="flex justify-start items-center pt-5 w-fit gap-3">
                    <BestBtn bgColor = "bg-black"></BestBtn>
                    <BestBtn bgColor = "bg-red-500"></BestBtn>
                    <BestBtn bgColor = "bg-yellow-500"></BestBtn>
                </div>
            </div>
        </>
    )
}

export default BestSellerContainer;