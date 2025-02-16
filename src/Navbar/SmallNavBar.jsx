import React, { useState, useReducer, act } from "react";
import SmallLink from "./SmallLink";
import LinkText from "./LinkText";

const initializeState = {
    smallMenubar: false,
    smallHome: false,
    smallShop: false,
    smallProducts: false,
    smallBlog: false,
};

function reducer(state, action) {
    console.log(state, "\n", action, "\n", action.type, "\n", initializeState);
    switch (action.type) {
        case "Toggle_Menubar":
            return { ...state, smallMenubar: !state.smallMenubar };

        case "Toggle_Home":
            return { ...state, smallHome: !state.smallHome };

        case "Toggle_Shop":
            return { ...state, smallShop: !state.smallShop };

        case "Toggle_Products":
            return { ...state, smallProducts: !state.smallProducts };

        case "Toggle_smallBlog":
            return { ...state, smallBlog: !state.smallBlog };

        default:
            break;
    }
}

function SmallNavBar() {
    const [state, dispatch] = useReducer(reducer, initializeState);
    const [smallBlog, SetSmallBlog] = useState(false);

    return (
        <>
            <div>
                <button onClick={() => dispatch({ type: "Toggle_Menubar" })}>
                    <img src="/img/ThreeLine.svg" alt="" />
                </button>
                {state.smallMenubar && (
                    <div className="fixed inset-0 flex items-start justify-start bg-black bg-opacity-25 w-full h-full">
                        <div className="bg-white  p-10  rounded-md shadow-lg w-1/2 h-full">
                            <div className="text-start h-full">
                                <button
                                    className="h-5"
                                    onClick={() => dispatch({ type: "Toggle_Menubar" })}
                                >
                                    <img className="w-8" src="/img/close.svg" alt="" />
                                </button>
                                <div className="h-[95%] my-auto overflow-scroll py-10">
                                    <div className="border border-1 border-t-0 border-l-0 border-r-0 py-2">
                                        <div className="">
                                            <button
                                                className="flex justify-between items-center w-full text-lg"
                                                onClick={() => dispatch({ type: "Toggle_Home" })}
                                            >
                                                Home
                                                <img className="w-6" src="/img/add.svg" alt="" />
                                            </button>
                                        </div>
                                        {state.smallHome && (
                                            <div className="border border-t-0 border-r-0 border-b-0 ms-6">
                                                <SmallLink SmallLink="Home Fashion 01"></SmallLink>
                                                <SmallLink SmallLink="Home Multi Brand"></SmallLink>
                                                <SmallLink SmallLink="Home Gift Card"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 2"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 02"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 03"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 04"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 05"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 06"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 07"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 08"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture"></SmallLink>
                                                <SmallLink SmallLink="Home Electronic"></SmallLink>
                                                <SmallLink SmallLink="Home Grocery"></SmallLink>
                                                <SmallLink SmallLink="Home Sneaker"></SmallLink>
                                                <SmallLink SmallLink="Home Jewelry"></SmallLink>
                                                <SmallLink SmallLink="Home Dog Accessories"></SmallLink>
                                                <SmallLink SmallLink="Home Baby"></SmallLink>
                                                <SmallLink SmallLink="Home Kitchen Wear"></SmallLink>
                                                <SmallLink SmallLink="Home Handbag"></SmallLink>
                                                <SmallLink SmallLink="Home Tee"></SmallLink>
                                                <SmallLink SmallLink="Home Socks"></SmallLink>
                                                <SmallLink SmallLink="Home Phone case"></SmallLink>
                                            </div>
                                        )}
                                    </div>

                                    <div className="border border-1 border-t-0 border-l-0 border-r-0 py-2">
                                        <div className="">
                                            <button
                                                className="flex justify-between items-center w-full text-lg"
                                                onClick={() => dispatch({ type: "Toggle_Shop" })}
                                            >
                                                Shop
                                                <img className="w-6" src="/img/add.svg" alt="" />
                                            </button>
                                        </div>{" "}
                                        {state.smallShop && (
                                            <div className="border border-t-0 border-r-0 border-b-0 ms-6">
                                                <SmallLink SmallLink="Home Fashion 01"></SmallLink>
                                                <SmallLink SmallLink="Home Multi Brand"></SmallLink>
                                                <SmallLink SmallLink="Home Gift Card"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 2"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 02"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 03"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 04"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 05"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 06"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 07"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 08"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture"></SmallLink>
                                                <SmallLink SmallLink="Home Electronic"></SmallLink>
                                                <SmallLink SmallLink="Home Grocery"></SmallLink>
                                                <SmallLink SmallLink="Home Sneaker"></SmallLink>
                                                <SmallLink SmallLink="Home Jewelry"></SmallLink>
                                                <SmallLink SmallLink="Home Dog Accessories"></SmallLink>
                                                <SmallLink SmallLink="Home Baby"></SmallLink>
                                                <SmallLink SmallLink="Home Kitchen Wear"></SmallLink>
                                                <SmallLink SmallLink="Home Handbag"></SmallLink>
                                                <SmallLink SmallLink="Home Tee"></SmallLink>
                                                <SmallLink SmallLink="Home Socks"></SmallLink>
                                                <SmallLink SmallLink="Home Phone case"></SmallLink>
                                            </div>
                                        )}
                                    </div>

                                    <div className="border border-1 border-t-0 border-l-0 border-r-0 py-2">
                                        <div className="">
                                            <button
                                                className="flex justify-between items-center w-full text-lg"
                                                onClick={() =>
                                                    dispatch({type:'Toggle_Products'})
                                                }
                                            >
                                                Products
                                                <img className="w-6" src="/img/add.svg" alt="" />
                                            </button>
                                        </div>
                                        {state.smallProducts && (
                                            <div className="border border-t-0 border-r-0 border-b-0 ms-6">
                                                <SmallLink SmallLink="Home Fashion 01"></SmallLink>
                                                <SmallLink SmallLink="Home Multi Brand"></SmallLink>
                                                <SmallLink SmallLink="Home Gift Card"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 2"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 02"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 03"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 04"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 05"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 06"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 07"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 08"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture"></SmallLink>
                                                <SmallLink SmallLink="Home Electronic"></SmallLink>
                                                <SmallLink SmallLink="Home Grocery"></SmallLink>
                                                <SmallLink SmallLink="Home Sneaker"></SmallLink>
                                                <SmallLink SmallLink="Home Jewelry"></SmallLink>
                                                <SmallLink SmallLink="Home Dog Accessories"></SmallLink>
                                                <SmallLink SmallLink="Home Baby"></SmallLink>
                                                <SmallLink SmallLink="Home Kitchen Wear"></SmallLink>
                                                <SmallLink SmallLink="Home Handbag"></SmallLink>
                                                <SmallLink SmallLink="Home Tee"></SmallLink>
                                                <SmallLink SmallLink="Home Socks"></SmallLink>
                                                <SmallLink SmallLink="Home Phone case"></SmallLink>
                                            </div>
                                        )}
                                    </div>

                                    <div className="border border-1 border-t-0 border-l-0 border-r-0 py-2">
                                        <div className="">
                                            <button
                                                className="flex justify-between items-center w-full text-lg"
                                                onClick={()=> dispatch({type:'Toggle_Blog'})}
                                            >
                                                Blog
                                                <img className="w-6" src="/img/add.svg" alt="" />
                                            </button>
                                        </div>
                                        {state.smallBlog && (
                                            <div className="border border-t-0 border-r-0 border-b-0 ms-6">
                                                <SmallLink SmallLink="Home Fashion 01"></SmallLink>
                                                <SmallLink SmallLink="Home Multi Brand"></SmallLink>
                                                <SmallLink SmallLink="Home Gift Card"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 2"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 02"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 03"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 04"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 05"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 06"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 07"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture 08"></SmallLink>
                                                <SmallLink SmallLink="Home Furniture"></SmallLink>
                                                <SmallLink SmallLink="Home Electronic"></SmallLink>
                                                <SmallLink SmallLink="Home Grocery"></SmallLink>
                                                <SmallLink SmallLink="Home Sneaker"></SmallLink>
                                                <SmallLink SmallLink="Home Jewelry"></SmallLink>
                                                <SmallLink SmallLink="Home Dog Accessories"></SmallLink>
                                                <SmallLink SmallLink="Home Baby"></SmallLink>
                                                <SmallLink SmallLink="Home Kitchen Wear"></SmallLink>
                                                <SmallLink SmallLink="Home Handbag"></SmallLink>
                                                <SmallLink SmallLink="Home Tee"></SmallLink>
                                                <SmallLink SmallLink="Home Socks"></SmallLink>
                                                <SmallLink SmallLink="Home Phone case"></SmallLink>
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <LinkText linkText="Buy Now"></LinkText>
                                    </div>

                                    <div>
                                        <div className="flex gap-5 w-fit h-fit">
                                            <button className="flex gap-3 border border-1 py-2 px-4 rounded-md text-lg hover:bg-black hover:text-white">
                                                <img
                                                    src="/img/wishlist.svg"
                                                    alt=""
                                                    className="transition-all duration-200 hover:invert"
                                                />
                                                Wishlist
                                            </button>
                                            <button className="flex gap-3 border border-1 py-2  px-4  rounded-md text-lg hover:bg-black hover:text-white">
                                                <img src="/img/search.svg" alt="" />
                                                Search
                                            </button>
                                        </div>

                                        <div>
                                            <address className="">
                                                <p className="my-2">
                                                    Address: 1234 Fashion Street, Suite 567,New York, NY
                                                </p>
                                                <p className="my-2">
                                                    Email:{" "}
                                                    <a
                                                        className="font-semibold"
                                                        href="mailto:info@fashionshop.com"
                                                    >
                                                        info@fashionshop.com
                                                    </a>
                                                </p>
                                                <p className="my-2">
                                                    Phone:{" "}
                                                    <a className="font-semibold" href="tel:(212)555-1234">
                                                        (212)555-1234
                                                    </a>
                                                </p>
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default SmallNavBar;
