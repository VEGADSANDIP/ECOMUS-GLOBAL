import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './CompanyLogo.css'

function CompanyLogo() {

    return (

        <>
            <div className="border border-1 rounded-xl">
                <Swiper
                    style={{height:"fit-content"}}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="CompanyLogo"
                    breakpoints={
                        {
                            300: {
                                slidesPerView: 2,
                                spaceBetween: 0
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 0
                            },
                            1024: {
                                slidesPerView: 6,
                                spaceBetween: 0
                            }
                        }
                    }
                >
                    <SwiperSlide>
                        <div className="border border-1 border-t-0 border-l-1 border-r-1 border-b-0">
                            <img src="/img/brand-01.png" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="border border-1 border-t-0 border-l-1 border-r-1 border-b-0">
                            <img src="/img/brand-02.png" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="border border-1 border-t-0 border-l-1 border-r-1 border-b-0">
                            <img src="/img/brand-03.png" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="border border-1 border-t-0 border-l-1 border-r-1 border-b-0">
                            <img src="/img/brand-04.png" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="/img/brand-05.png" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="">
                            <img src="/img/brand-06.png" alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default CompanyLogo;