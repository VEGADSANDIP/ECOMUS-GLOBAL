import React from "react";
import ShopLookText from "./ShopLookText";
import ShopContainer from "./ShopContainer";

function ShopLook(){
    return(
        <>
            <div className="container max-w-[100%] mx-auto">
                <ShopLookText></ShopLookText>
                <ShopContainer></ShopContainer>
            </div>
        </>
    );
}

export default ShopLook;