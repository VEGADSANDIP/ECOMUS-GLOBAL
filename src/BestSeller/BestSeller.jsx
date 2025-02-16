import React from "react";
import BestSellerText from "./BestSellerText";
import BestSellerContent from "./BestSellerContent";

function BestSeller(){
    return(
        <>
            <section className="container max-w-[95%] mx-auto">
                <BestSellerText></BestSellerText>
                <BestSellerContent></BestSellerContent>
            </section>
        </>
    )
}

export default BestSeller;