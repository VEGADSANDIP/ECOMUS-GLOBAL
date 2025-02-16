import React from "react";

function TextHead(props){
    return(
        <>
            <div className="text-center">
                <h1 className="text-5xl py-5">{props.heading}</h1>
                <p className="text-gray-700 text-lg py-5">{props.article}</p>
            </div>
        </>
    )
}

export default TextHead;
