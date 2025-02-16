import React from "react";

function HappyClientsContainerText(props) {

    return (
        <>
            <div className="">
                <div className="my-5 ">
                    <h3 className="font-semibold">{props.heading}</h3>
                    <p>{props.article}</p>
                </div>

                <div className="my-5">
                    <h4 className="font-semibold">{props.name}</h4>
                    <p>{`Custer from ${props.country}`}</p>
                </div>
            </div>
        </>
    )
}

export default HappyClientsContainerText;