
import React from "react";



function Navbar(props) {

    return (
        <>
            <div className="flex items-center">
                <button className="text-lg hover:underline" onClick={props.pass}>
                    {props.name}
                </button>
                <img className="w-7" src="/img/arrow_down.svg" alt="" />
            </div>
        </>
    );
}

export default Navbar;