import React from "react";
import ShopGramSlider from "./ShopGramSlider";
import ShopGramInfoSlider from "./ShopGramInfoSlider";
import TextHead from "../TextHead/TextHead";

function ShopGram() {

    return (
        <>
            <section className=" container max-w-[95%] mx-auto">
                <TextHead
                    heading="Shop Gram"
                    article="Inspire and let yourself be inspired, from one unique fashion to another."></TextHead>
                <div className="my-10">
                <ShopGramSlider></ShopGramSlider>
                </div>
                <div className="mt-12">
                    <ShopGramInfoSlider></ShopGramInfoSlider>
                </div>

            </section>
        </>
    )
}

export default ShopGram;
