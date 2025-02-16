import React from "react";

function LoadMore(props){

    return(
        <>
            <div>
                <button className={`
                    ${props.bgColor} 
                    ${props.textColor} 
                    ${props.btnPadding}
                    ${props.rounded}
                    `}>
                    {props.btnName}
                </button>
            </div>
        </>
    )
}


export default LoadMore;