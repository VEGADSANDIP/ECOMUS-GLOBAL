import React from "react";

function UserIcon() {
    return (
        <>
            <div className="flex justify-center items-center gap-4">
            <button className="">
                <img className=" hover:bg-black p-0.5 md:p-1 lg:p-2 bg-white rounded-md " src="/img/cart.svg" alt="cart" />
            </button>
            <button className="hidden md:block">
                <img className=" hover:bg-black  md:p-1 lg:p-2 bg-white rounded-md " src="/img/wishlist.svg" alt="wishlist" />
            </button>
            <button className="hidden md:block ">
                <img className=" hover:bg-black md:p-1 lg:p-2 bg-white rounded-md " src="/img/check.svg" alt="check" />
            </button>
            <button className="">
                <img className=" hover:bg-black p-0.5 md:p-1 lg:p-2 bg-white rounded-md " src="/img/visibility.svg" alt="visible" />
            </button>
            </div>
        </>
    )
}

export default UserIcon;