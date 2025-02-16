import React from "react";

function FooterContainerLink(props){

    return(
        <>
            <div className="w-fit my-3">
                <a className="hover:text-red-600" href={props}>{props.link}</a>
            </div>
        </>
    )
}

export default FooterContainerLink;