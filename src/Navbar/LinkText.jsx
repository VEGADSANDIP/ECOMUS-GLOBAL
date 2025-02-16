import React from "react";

function LinkText(props){

    return(
        <>
            <div className="w-fit my-3 text-gray-600">
                <a className="hover:text-red-600" href={props}>{props.linkText}</a>
            </div>
        </>
    )
}

export default LinkText;