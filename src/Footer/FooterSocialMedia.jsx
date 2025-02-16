import React from "react";

function FooterSocialMedia(props){

    return(
        <>
            <div className="w-8 h-8 flex justify-center items-center border border-1 border-black rounded-full p-2">
                <a  href={props.link}>
                    <img className="w-6 h-6" src={props.img} alt={props.alt} />
                </a>
            </div>
        </>
    )
}


export default FooterSocialMedia;