import React from "react";

function FooterContainerHeader(props){

    return(
        <>
            <div className="w-fit py-4">
                <h3 className="font-semibold  text-base">{props.heading}</h3>
            </div>
        </>
    )
}

export default FooterContainerHeader;