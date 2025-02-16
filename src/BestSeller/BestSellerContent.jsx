import React from "react";
import BestSellerContainer from "./BestSellerContainer";
import LoadMore from "../LoadMore/LoadMore";



function BestSellerContent() {
    return (
        <>
            <div className="grid grid-cols-2 gap-2  md:grid-cols-3 md:gap-3 xl:grid-cols-4 xl:gap-4  ">
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
                <BestSellerContainer
                    BestText="Ribbed Tank Top"
                    BestPrice="$18.00"
                    bestImg="/img/black-5.jpg"
                    changeImg="/img/white-5.jpg"
                ></BestSellerContainer>
                <BestSellerContainer
                    BestText="Ribbed Tank Top"
                    BestPrice="$18.00"
                    bestImg="/img/black-6.jpg"
                    changeImg="/img/white-6.jpg"
                ></BestSellerContainer>
                <BestSellerContainer
                    BestText="Ribbed Tank Top"
                    BestPrice="$18.00"
                    bestImg="/img/black-7.jpg"
                    changeImg="/img/white-7.jpg"
                ></BestSellerContainer>
                <BestSellerContainer
                    BestText="Ribbed Tank Top"
                    BestPrice="$18.00"
                    bestImg="/img/black-8.jpg"
                    changeImg="/img/white-8.jpg"
                ></BestSellerContainer>
            </div>
            <div className="pt-10 flex justify-center items-center">
            <LoadMore
                
                btnName="Load More"
                bgColor="bg-black"
                textColor="text-white"
                btnPadding="p-4"
                rounded = "rounded-md"

            >
            </LoadMore>
            </div>
        </>
    )
}

export default BestSellerContent;