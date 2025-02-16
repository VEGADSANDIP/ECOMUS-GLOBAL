import React from "react";

function ThreeContent(props){
    return(
        <>
            <div className="absolute top-[40%] left-[2%] w-1/4">
                <h1 className="font-medium text-8xl my-3">{props.heading}</h1>
                <p className="font-normal text-lg my-3">{props.text}</p>
                <button className=" bg-black text-white h-fit flex items-center p-3 rounded-md text-lg gap-2">Shop Collection 
                    <div className="w-7">
                    <img className=" filter invert" src="/img/arrow_right.svg" alt="" />
                    </div>
                </button>
            </div>
        </>
    )
}

export default ThreeContent;