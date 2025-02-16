import React, { useState } from "react";
import Navbar from "./Navbar";
import HomeFashion from "./HomeFashion";
import BestSellerContainer from "../BestSeller/BestSellerContainer";
import HeaderText from "./HeaderText";
import LinkText from "./LinkText";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


function NavbarContent(props) {


    const [isHome, setIsHome] = useState(false);
    const [isShop, setIsShop] = useState(false);
    const [isBlog, setIsBlog] = useState(false);
    const [isPages, setIsPages] = useState(false);
    const [isProducts, setIsProducts] = useState(false);


    return (
        <>
            <div className="flex items-center justify-center gap-5">
                <div>
                    <div>
                        <Navbar pass={() => setIsHome(true)} isHome={isHome} name="Home"></Navbar>
                    </div>
                    {isHome && (
                        <div className="fixed inset-0 flex items-end justify-center bg-black bg-opacity-25 ">
                            <div className="bg-white  p-6  rounded-md shadow-lg w-full h-[86%] ">
                                <div className="container max-w-[95%] mx-auto">
                                    <div className="text-end">
                                        <button onClick={() => setIsHome(false)}>
                                            <img className="w-10" src="/img/close.svg" alt="" />
                                        </button>
                                    </div>

                                    <div className="h-screen overflow-scroll rounded-md pb-28">
                                        
                                        <div className="grid grid-cols-6  gap-3  bg-[#FAFAFA] p-2 ">
                                            <HomeFashion image="/img/home-01.jpg" text="Home-Fashion-01"></HomeFashion>
                                            <HomeFashion image="/img/home-02.jpg" text="Home-Fashion-01"></HomeFashion>
                                            <HomeFashion image="/img/home-03.jpg" text="Home-Fashion-01"></HomeFashion>
                                            <HomeFashion image="/img/home-04.jpg" text="Home-Fashion-01"></HomeFashion>
                                            <HomeFashion image="/img/home-05.jpg" text="Home-Fashion-01"></HomeFashion>
                                            <HomeFashion image="/img/home-07.jpg" text="Home-Fashion-01"></HomeFashion>
                                            <HomeFashion image="/img/home-08.jpg" text="Home-Fashion-01"></HomeFashion>
                                            <HomeFashion image="/img/home-01.jpg" text="Home-Fashion-01"></HomeFashion>
                                            <HomeFashion image="/img/home-02.jpg" text="Home-Fashion-01"></HomeFashion>
                                            <HomeFashion image="/img/home-03.jpg" text="Home-Fashion-01"></HomeFashion>
                                            <HomeFashion image="/img/home-04.jpg" text="Home-Fashion-01"></HomeFashion>
                                            <HomeFashion image="/img/home-05.jpg" text="Home-Fashion-01"></HomeFashion>
                                            <HomeFashion image="/img/home-07.jpg" text="Home-Fashion-01"></HomeFashion>
                                            <HomeFashion image="/img/home-08.jpg" text="Home-Fashion-01"></HomeFashion>
                                            <HomeFashion image="/img/home-01.jpg" text="Home-Fashion-01"></HomeFashion>
                                            <HomeFashion image="/img/home-02.jpg" text="Home-Fashion-01"></HomeFashion>
                                            <HomeFashion image="/img/home-03.jpg" text="Home-Fashion-01"></HomeFashion>
                                            <HomeFashion image="/img/home-04.jpg" text="Home-Fashion-01"></HomeFashion>
                                            <HomeFashion image="/img/home-05.jpg" text="Home-Fashion-01"></HomeFashion>
                                            <HomeFashion image="/img/home-07.jpg" text="Home-Fashion-01"></HomeFashion>
                                            <HomeFashion image="/img/home-08.jpg" text="Home-Fashion-01"></HomeFashion>
                                            <HomeFashion image="/img/home-01.jpg" text="Home-Fashion-01"></HomeFashion>
                                            <HomeFashion image="/img/home-02.jpg" text="Home-Fashion-01"></HomeFashion>
                                            <HomeFashion image="/img/home-03.jpg" text="Home-Fashion-01"></HomeFashion>
                                            <HomeFashion image="/img/home-04.jpg" text="Home-Fashion-01"></HomeFashion>
                                            <HomeFashion image="/img/home-05.jpg" text="Home-Fashion-01"></HomeFashion>
                                            <HomeFashion image="/img/home-07.jpg" text="Home-Fashion-01"></HomeFashion>
                                            <HomeFashion image="/img/home-08.jpg" text="Home-Fashion-01"></HomeFashion>
                                        </div>

                                        <div className="text-center mt-9">
                                            <button className="h-12 text-white bg-black  p-2 rounded-md">
                                                View All Demo(46+)
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    }
                </div>

                <div>
                    <div>
                        <Navbar pass={() => setIsShop(true)} isShop={isShop} name="Shop"></Navbar>
                    </div>
                    {isShop && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25">
                            <div className="bg-white  p-6  rounded-md shadow-lg w-full h-fit">
                                <div className="container max-w-[95%] mx-auto">
                                    <div className="text-end">
                                        <button onClick={() => setIsShop(false)}>
                                            <img className="w-10" src="/img/close.svg" alt="" />
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-2">
                                        <div className="grid grid-cols-3">
                                            <div>
                                                <div>
                                                    <HeaderText heading="Shop layouts"></HeaderText>
                                                </div>
                                                <div>
                                                    <LinkText linkText="Default" ></LinkText>
                                                    <LinkText linkText="Left sidebar" ></LinkText>
                                                    <LinkText linkText="Right sidebar" ></LinkText>
                                                    <LinkText linkText="Full width" ></LinkText>
                                                    <LinkText linkText="Sub collection" ></LinkText>
                                                    <LinkText linkText="Collections list" ></LinkText>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <HeaderText heading="Features"></HeaderText>
                                                </div>
                                                <div>
                                                    <LinkText linkText="Default" ></LinkText>
                                                    <LinkText linkText="Left sidebar" ></LinkText>
                                                    <LinkText linkText="Right sidebar" ></LinkText>
                                                    <LinkText linkText="Full width" ></LinkText>
                                                    <LinkText linkText="Sub collection" ></LinkText>
                                                    <LinkText linkText="Collections list" ></LinkText>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <HeaderText heading="Product styles"></HeaderText>
                                                </div>
                                                <div>
                                                    <LinkText linkText="Pagination links" ></LinkText>
                                                    <LinkText linkText="Pagination load more" ></LinkText>
                                                    <LinkText linkText="Pagination infinite scrolling" ></LinkText>
                                                    <LinkText linkText="Filter sidebar" ></LinkText>
                                                    <LinkText linkText="Filter hidden" ></LinkText>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="relative overflow-hidden">
                                                <a href={props}><img
                                                    className="rounded-lg transition duration-300 ease-in-out hover:scale-110" src="/img/collection-1.jpg" alt="" /></a>
                                                <div className="absolute bottom-10 flex justify-center w-full ">
                                                    <button className="p-2  rounded-md flex gap-2 items-center bg-white hover:bg-black hover:text-white ">Men<img src="/img/North East.svg" alt="" /></button>
                                                </div>
                                            </div>
                                            <div className="relative overflow-hidden">
                                                <a href={props}><img
                                                    className="rounded-lg transition duration-500 ease-in-out hover:scale-110" src="/img/collection-2.jpg" alt="" /></a>
                                                <div className="absolute bottom-10 flex justify-center w-full ">
                                                    <button className="p-2  rounded-md flex gap-2 items-center bg-white hover:bg-black hover:text-white ">Woman<img src="/img/North East.svg" alt="" /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    }
                </div>

                <div>
                    <div>
                        <Navbar pass={() => setIsProducts(true)} isProducts={isProducts} name="Products"></Navbar>
                    </div>
                    {isProducts && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25">
                            <div className="bg-white  p-6  rounded-md shadow-lg w-full h-fit">
                                <div className="container max-w-[95%] mx-auto">
                                    <div className="text-end">
                                        <button onClick={() => setIsProducts(false)}>
                                            <img className="w-10" src="/img/close.svg" alt="" />
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-3">
                                        <div className="grid grid-cols-2">

                                            <div>
                                                <div>
                                                    <HeaderText heading="Product layouts"></HeaderText>
                                                </div>
                                                <div>
                                                    <LinkText linkText="Product default"></LinkText>
                                                    <LinkText linkText="Product grid 1"></LinkText>
                                                    <LinkText linkText="Product grid 2"></LinkText>
                                                    <LinkText linkText="Product stacked"></LinkText>
                                                    <LinkText linkText="Product right thumbnails"></LinkText>
                                                    <LinkText linkText="Product bottom thumbnails"></LinkText>
                                                    <LinkText linkText="Product drawer sidebar"></LinkText>
                                                    <LinkText linkText="Product description accordion"></LinkText>
                                                    <LinkText linkText="Product description list"></LinkText>
                                                </div>
                                            </div>

                                            <div>
                                                <div>
                                                    <HeaderText heading="Product details"></HeaderText>
                                                </div>
                                                <div>
                                                    <LinkText linkText="Product inner zoom"></LinkText>
                                                    <LinkText linkText="Product zoom magnifier"></LinkText>
                                                    <LinkText linkText="Product no zoom"></LinkText>
                                                    <LinkText linkText="Product photo swipe popup"></LinkText>
                                                    <LinkText linkText="Product external zoom and photo swipe popup"></LinkText>
                                                    <LinkText linkText="Product video"></LinkText>
                                                    <LinkText linkText="Product 3D, AR models"></LinkText>
                                                    <LinkText linkText="Product options & customize"></LinkText>
                                                    <LinkText linkText="Advanced product types"></LinkText>
                                                    <LinkText linkText="Recipient information form for gift card products"></LinkText>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2">
                                            <div>
                                                <div>
                                                    <HeaderText heading="Product swatch"></HeaderText>
                                                </div>
                                                <div>
                                                    <LinkText linkText="Product color swatch"></LinkText>
                                                    <LinkText linkText="Product rectangle"></LinkText>
                                                    <LinkText linkText="Product rectangle color"></LinkText>
                                                    <LinkText linkText="Product swatch image"></LinkText>
                                                    <LinkText linkText="Product swatch image rounded"></LinkText>
                                                    <LinkText linkText="Product swatch dropdown"></LinkText>
                                                    <LinkText linkText="Product swatch dropdown color"></LinkText>
                                                </div>
                                            </div>

                                            <div>
                                                <div>
                                                    <HeaderText heading="Product features"></HeaderText>
                                                </div>
                                                <div>
                                                    <LinkText linkText="Frequently bought together"></LinkText>
                                                    <LinkText linkText="Frequently bought together 2"></LinkText>
                                                    <LinkText linkText="Frequently Bought Together"></LinkText>
                                                    <LinkText linkText="Product up sell features"></LinkText>
                                                    <LinkText linkText="Product pre-orders"></LinkText>
                                                    <LinkText linkText="Back in stock notification"></LinkText>
                                                    <LinkText linkText="Product pickup"></LinkText>
                                                    <LinkText linkText="Variant images grouped"></LinkText>
                                                    <LinkText linkText="Complimentary products"></LinkText>
                                                    <LinkText linkText="Integration Ry viu app"></LinkText>
                                                    <LinkText linkText="Quick order list"></LinkText>
                                                    <LinkText linkText="Sale Notification"></LinkText>
                                                    <LinkText linkText="Volume Discount"></LinkText>
                                                    <LinkText linkText="Volume Discount Grid"></LinkText>
                                                    <LinkText linkText="Buy X Get Y"></LinkText>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1">
                                            <Swiper
                                                style={{ height: 'fit-content' }}
                                                slidesPerView={2}
                                                spaceBetween={10}
                                                loop={true}
                                                pagination={{
                                                    clickable: true,
                                                }}
                                                navigation={true}
                                                modules={[Navigation]}
                                                className="products"
                                            >
                                                <SwiperSlide>
                                                    <BestSellerContainer
                                                        BestText="Ribbed Tank Top"
                                                        BestPrice="$18.00"
                                                        bestImg="/img/black-1.jpg"
                                                        changeImg="/img/white-1.jpg"

                                                    ></BestSellerContainer>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <BestSellerContainer
                                                        BestText="Ribbed Tank Top"
                                                        BestPrice="$18.00"
                                                        bestImg="/img/black-2.jpg"
                                                        changeImg="/img/white-2.jpg"

                                                    ></BestSellerContainer>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <BestSellerContainer
                                                        BestText="Ribbed Tank Top"
                                                        BestPrice="$18.00"
                                                        bestImg="/img/black-3.jpg"
                                                        changeImg="/img/white-3.jpg"

                                                    ></BestSellerContainer>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <BestSellerContainer
                                                        BestText="Ribbed Tank Top"
                                                        BestPrice="$18.00"
                                                        bestImg="/img/black-4.jpg"
                                                        changeImg="/img/white-4.jpg"

                                                    ></BestSellerContainer>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    }
                </div>

                <div>
                    <div>
                        <Navbar pass={() => setIsPages(true)} isPages={isPages} name="Pages"></Navbar>
                    </div>
                    {isPages && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25">
                            <div className="bg-white  p-6  rounded-md shadow-lg w-[60%] h-fit">
                                <div className="container max-w-[95%] mx-auto">
                                    <div className="text-end">
                                        <button onClick={() => setIsPages(false)}>
                                            <img className="w-10" src="/img/close.svg" alt="" />
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-3">
                                        <div>
                                            <div>
                                                <HeaderText heading="Header layouts"></HeaderText>
                                            </div>
                                            <div>
                                                <LinkText linkText="Static"></LinkText>
                                                <LinkText linkText="Static logo center"></LinkText>
                                                <LinkText linkText="Transparent"></LinkText>
                                                <LinkText linkText="Static top bar"></LinkText>
                                                <LinkText linkText="Announcement bar"></LinkText>
                                                <LinkText linkText="Menu bottom"></LinkText>
                                                <LinkText linkText="Menu bottom with categories"></LinkText>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <HeaderText heading="Features"></HeaderText>
                                            </div>
                                            <div>
                                                <LinkText linkText="Search full width"></LinkText>
                                                <LinkText linkText="Search hidden sidebar"></LinkText>
                                                <LinkText linkText="Search page"></LinkText>
                                                <LinkText linkText="Lookbook product"></LinkText>
                                                <LinkText linkText="Bundle product"></LinkText>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <HeaderText heading="Other pages"></HeaderText>
                                            </div>
                                            <div>
                                                <LinkText linkText="About us"></LinkText>
                                                <LinkText linkText="Brands"></LinkText>
                                                <LinkText linkText="Brand V2"></LinkText>
                                                <LinkText linkText="Contact 1"></LinkText>
                                                <LinkText linkText="Contact 2"></LinkText>
                                                <LinkText linkText="FAQ 01"></LinkText>
                                                <LinkText linkText="FAQ 02"></LinkText>
                                                <LinkText linkText="Our store"></LinkText>
                                                <LinkText linkText="Store locator"></LinkText>
                                                <LinkText linkText="Timeline"></LinkText>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    }
                </div>

                <div>
                    <div>
                        <Navbar pass={() => setIsBlog(true)} isBlog={isBlog} name="Blog"></Navbar>
                    </div>
                    {isBlog && (
                        <>
                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25">
                                <div className="bg-white  p-6  rounded-md shadow-lg w-[60%] h-fit">
                                    <div className="text-end">
                                        <button onClick={() => setIsBlog(false)}>
                                            <img className="w-10" src="/img/close.svg" alt="" />
                                        </button>
                                    </div>

                                    <div>

                                    </div>
                                </div>

                            </div>
                        </>
                    )}
                </div>

                <div>
                <a className="hover:underline" href={props}>Buy Now</a>
                </div>
            </div>

        </>
    );
}

export default NavbarContent;