import React from "react";

function FooterContainerCard(props){

    return(
        <>
            <div>
                <a href={props.link}>
                    <img src={props.img} alt={props.alt} />
                </a>
            </div>
        </>
    )
}

export default FooterContainerCard;