import React, { useState } from "react";
import BestSellerContainer from "../BestSeller/BestSellerContainer";
import HeaderText from "./HeaderText";
import LinkText from "./LinkText";

import Login from "./login";


export default function UserIcon() {

    const [isSearch, setIsSearch] = useState(false);
    const [isCart, setIsCart] = useState(false);

    return (
        <>
            <div className="flex gap-2">
                <div>
                    <button onClick={() => setIsSearch(true)}>
                        <img src="/img/search.svg" alt="Search" />
                    </button>

                    {isSearch && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white  p-6  rounded-md shadow-lg w-full h-full overflow-scroll">
                                <div className="text-end">
                                    <button
                                        onClick={() => setIsSearch(false)}
                                        className=""
                                    >
                                        <img className="w-10" src="/img/close.svg" alt="" />
                                    </button>
                                </div>
                                <div className="mb-7">
                                    <h2 className="text-3xl text-center">Search our site</h2>
                                </div>
                                <div className="flex justify-center items-center">
                                    <input className="w-1/2 h-full p-1 border border-gray-300 rounded " type="text" placeholder="Search" />
                                </div>

                                <div className="flex mt-10">
                                    <div className="w-1/4 ">
                                        <div>
                                            <HeaderText heading="Quick link"></HeaderText>
                                        </div>
                                        <div className=" flex flex-col ">
                                            <LinkText linkText="Fashion"></LinkText>
                                            <LinkText linkText="Men"></LinkText>
                                            <LinkText linkText="Women "></LinkText>
                                            <LinkText linkText="Accessories "></LinkText>
                                        </div>
                                    </div>

                                    <div className="w-auto">
                                        <div>
                                            <HeaderText heading="Need some inspiration?"></HeaderText>
                                        </div>
                                        <div className="grid grid-cols-4 gap-7">
                                            <BestSellerContainer
                                                BestText="Ribbed Tank Top"
                                                BestPrice="$18.00"
                                                bestImg="/img/black-1.jpg"
                                                changeImg="/img/white-1.jpg"
                                            ></BestSellerContainer>
                                            <BestSellerContainer
                                                BestText="Ribbed Tank Top"
                                                BestPrice="$18.00"
                                                bestImg="/img/black-2.jpg"
                                                changeImg="/img/white-2.jpg"
                                            ></BestSellerContainer>
                                            <BestSellerContainer
                                                BestText="Ribbed Tank Top"
                                                BestPrice="$18.00"
                                                bestImg="/img/black-3.jpg"
                                                changeImg="/img/white-3.jpg"
                                            ></BestSellerContainer>
                                            <BestSellerContainer
                                                BestText="Ribbed Tank Top"
                                                BestPrice="$18.00"
                                                bestImg="/img/black-4.jpg"
                                                changeImg="/img/white-4.jpg"
                                            ></BestSellerContainer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    }
                </div>

                <div className="hidden lg:block">
                    <Login></Login>
                </div>

                <div className="hidden lg:block">
                    <a href="">
                        <img src="/img/wishlist.svg" alt="" />
                    </a>
                </div>

                <div>
                    <button onClick={() => setIsCart(true)}>
                        <img src="/img/cart.svg" alt="Cart" />
                    </button>
                    {isCart && (
                        <div className="fixed inset-0 flex items-center justify-end bg-black bg-opacity-50">
                            <div className="bg-white  p-6  rounded-md shadow-lg w-1/3 h-full">
                                <div className="flex justify-between items-center border-b-2 border-gray-200 py-4">
                                    <h2 className="text-2xl">Shopping cart</h2>
                                    <button
                                        onClick={() => setIsCart(false)}
                                        className=""
                                    >
                                        <img className="w-10" src="/img/close.svg" alt="" />
                                    </button>
                                </div>

                                <div className=" border-b-2 border-gray-200 py-4">
                                    <input className="w-full" type="range" />
                                    <p><b>Free Shipping</b>for all orders of <b>$100.00</b></p>
                                </div>

                                <div className="h-full flex flex-col items-center justify-center gap-8">
                                    <h1 className="text-3xl">Your cart is empty</h1>
                                    <p className="px-10 text-center">You may check out all the available products and buy some in the shop</p>
                                    <div className="w-full flex justify-center">
                                        <button className="w-1/2 h-11 text-white  bg-black rounded-md">Return to shop</button>
                                    </div>
                                </div>


                            </div>
                        </div>
                    )
                    }
                </div>
            </div>
        </>
    )
}