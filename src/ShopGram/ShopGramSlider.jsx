import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ShopGramSliderContent from './ShopGramSliderContent';

function ShopGramSlider() {
    return (
        <>
            <Swiper
                style={{height:'fit-content'}}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="ShopGramSlider"
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
                            slidesPerView: 5,
                            spaceBetween: 20
                        }
                    }
                }
            >
                <SwiperSlide>
                    <ShopGramSliderContent img="/img/gallery-3.jpg" alt="gallery-3"></ShopGramSliderContent>
                </SwiperSlide>
                <SwiperSlide>
                    <ShopGramSliderContent img="/img/gallery-8.jpg" alt="gallery-8"></ShopGramSliderContent>
                </SwiperSlide>
                <SwiperSlide>
                    <ShopGramSliderContent img="/img/gallery-5.jpg" alt="gallery-5"></ShopGramSliderContent>
                </SwiperSlide>
                <SwiperSlide>
                    <ShopGramSliderContent img="/img/gallery-6.jpg" alt="gallery-6"></ShopGramSliderContent>
                </SwiperSlide>
                <SwiperSlide>
                    <ShopGramSliderContent img="/img/gallery-7.jpg" alt="gallery-7"></ShopGramSliderContent>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default ShopGramSlider;