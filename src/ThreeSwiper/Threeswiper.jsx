import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './ThreeSwiper.css';
import { Pagination } from 'swiper/modules';
import ThreeContent from './ThreeContent';



export default function Threeswiper() {
    return (
        <>
        <div>
        <Swiper
                loop={Infinity}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="ThreeSlider"
            >
                <SwiperSlide className='three1 '>
                    <ThreeContent heading="Glamorous Glam " text="From casual to formal, we've got you covered "></ThreeContent>
                </SwiperSlide>
                <SwiperSlide className='three2 '>
                <ThreeContent heading="Simply Style " text="From casual to formal, we've got you covered "></ThreeContent>
                </SwiperSlide>
                <SwiperSlide className='three3 '>
                <ThreeContent heading="Discreet Glam " text="From casual to formal, we've got you covered "></ThreeContent>
                </SwiperSlide>
            </Swiper>
        </div>
        </>
    );
}
