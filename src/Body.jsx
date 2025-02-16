import React from "react";
import BestSeller from "./BestSeller/BestSeller";
import ShopLook from "./ShopLook/ShopLook";
import HappyClients from "./HappyClients/HappyClients";
import ShopGram from "./ShopGram/ShopGram";

function Body(){

    return(
        <>
            <BestSeller></BestSeller>
            <ShopLook></ShopLook>
            <HappyClients></HappyClients>
            <ShopGram></ShopGram>
        </>
    );
}

export default Body;