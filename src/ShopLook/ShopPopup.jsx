import React, { useState } from "react";

function ShopPopup(props){
    const [shopPopup, SetShopPopup] = useState(false);

    return(
        <>
            <button 
            className=" bg-white p-2 rounded-full"
            onClick={()=> SetShopPopup(true)}>
                <div className="h-2 w-2 bg-black rounded-full">
                </div>
            </button>

            {
                shopPopup && (
                    <div className={`absolute inset-0 ${props.top}`}>
                        <div className="bg-white  p-6  rounded-md shadow-lg w-1/2 flex justify-center items-center">
                            <div>
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default ShopPopup;