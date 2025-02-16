import React from "react";

function BestBtn({ bgColor }) {

    return (
        <>
            <div className="border-solid border-2 rounded-full w-fit flex justify-center items-center p-1 " >
                <button className={`w-5 h-5 rounded-full ${bgColor}`}> </button>
            </div>
        </>
    )
}

export default BestBtn;