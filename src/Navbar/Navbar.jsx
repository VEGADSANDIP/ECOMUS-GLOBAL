
import React from "react";



function Navbar(props) {

    return (
        <>
            <div className="">
                <button className="text-lg hover:underline flex items-center" onClick={props.pass}>
                    {props.name}
                    <img className=" w-7" src="/img/arrow_down.svg" alt="" />
                </button>
                
            </div>
        </>
    );
}

export default Navbar;