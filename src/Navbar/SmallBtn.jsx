import React from "react";

function SmallBtn({TogglePopup,text,children}) {

    return (
        <>
            <div className="">
                <button 
                className="flex justify-between items-center w-full text-lg"
                onClick={TogglePopup}
                        >
                        {text}
                        <img className="w-6" src="/img/add.svg" alt="" />
                        {children}
                </button>
            </div>

        </>
    )
}

export default SmallBtn;