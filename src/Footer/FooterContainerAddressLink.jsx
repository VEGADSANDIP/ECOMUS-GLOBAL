import React  from "react";

function FooterContainerAddressLink(props){

    return(
        <>
            <div className=" w-fit">
                <a className="font-semibold flex items-center underline" href={props}>{props.text}<img src={props.img} alt="" /></a>
            </div>
        </>
    )
}

export default FooterContainerAddressLink;