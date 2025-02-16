import React from "react";
// import './ShopContainer.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ShopPopup from "./ShopPopup";


function ShopContainer() {

    return (
        <>
            <div>
                <Swiper
                    slidesPerView={2}
                    loop={Infinity}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="ThreeSlider"
                    breakpoints={
                        {
                            300: {
                                slidesPerView: 1
                            },
                            768: {
                                slidesPerView: 1
                            },
                            769: {
                                slidesPerView: 2
                            }
                        }
                    }
                >
                    <SwiperSlide>
                        <div className="relative">
                            <img
                                className="w-full h-full"
                                src="/img/lookbook-3.jpg"
                                alt="" />
                            <div className="flex justify-center items-center absolute " style={{ left: '45%', bottom: '34%' }}>
                                <ShopPopup top="-90px" img="/img/collection-1.jpg"></ShopPopup>
                            </div>
                            <div className="flex justify-center items-center absolute" style={{ right: '36%', bottom: '11%' }}>
                                <ShopPopup></ShopPopup>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="relative">
                            <img
                                className="w-full h-full"
                                src="/img/lookbook-4.jpg"
                                alt="" />
                            <div className="flex justify-center items-center absolute" style={{ left: '40%', top: '12%' }}>
                                <ShopPopup></ShopPopup>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default ShopContainer;