import React from "react";

function SmallLink(props){

    return(

        <>
            <div className="ps-3 my-2">
            <a href={props}>{props.SmallLink}</a>
            </div>
        </>
    )
}

export default SmallLink;