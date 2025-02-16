import React from "react";

function HappyClientUser(props){

    return(

        <>
            <div className="flex items-center justify-between border border-1 border-t-1 border-l-0 border-r-0 border-b-0 pt-5">
                <div className="basis-[30%] text-center">
                    <a href="">
                    <img className="object-cover rounded-lg w-full"  src={props.imgHappyClient} alt="" />
                    </a>
                </div>
                <div className="text-start flex flex-col items-center justify-center">
                    <a className=" hover:text-red-600 w-fit"  href="">{props.name}</a>
                    <p className=" font-semibold">{props.price}</p>
                </div>
                <div className="flex items-center justify-center">
                    <button className=""><img  src="/img/North East.svg" alt="" /></button>
                </div>
            </div>
        </>
    )
}


export default HappyClientUser;