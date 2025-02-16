import React from "react";

function HomeFashion(props){

    const image = props.image

    return(
        <>
        <div className="border bg-[#FFFFFF] p-2 rounded-md">
            <div>
                <a href={props}><img className="h-auto w-full" src={image} alt="" /></a>
            </div>
            <div>
                <p className="text-center py-2 font-semibold">{props.text}</p>
            </div>
        </div>
        </>
    );
}


export default HomeFashion;