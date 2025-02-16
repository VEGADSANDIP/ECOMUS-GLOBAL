import React from "react";

function ShopGramSliderContent(props) {
    return (
        <>
            <div>
                <div className="relative">
                    <a href="">
                        <img
                            className="rounded-lg hover:brightness-50"
                            src={props.img}
                            alt={props.alt}
                        />
                    </a>

                    <div className="w-10 h-10 absolute top-[50%] left-[50%] bg-white rounded-full">
                        <a className="w-6 h-6" href="">
                            <img className="p-2"  src="/img/cart.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShopGramSliderContent;
