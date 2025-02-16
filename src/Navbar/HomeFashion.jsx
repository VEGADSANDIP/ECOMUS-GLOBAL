import React from "react";


function HomeFashion(props){

    const image = props.image

    return(
        <>
        <div className="border bg-[#FFFFFF] p-2 rounded-md">
            <div className="sm:hidden lg:block">
                <a href={props}><img className="h-auto w-full" src={image} alt="" /></a>
            </div>
            <div>
                <a href="{}" className="text-center py-2 font-semibold">{props.text}</a>
            </div>
        </div>
        </>
    );
}


export default HomeFashion;