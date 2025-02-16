import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ShopGramInfoSliderText from './ShopGramInfoSliderText';


function ShopGramInfoSlider() {
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
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 0
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        }
                    }
                }
            >
                <SwiperSlide className='border border-1 rounded-lg'>
                    <ShopGramInfoSliderText 
                    img="/img/deployed_code_50dp_000000_FILL0_wght400_GRAD0_opsz48.svg" 
                    heading="Free Shipping" 
                    text="You will love at great low prices"></ShopGramInfoSliderText>
                </SwiperSlide>
                <SwiperSlide  className='border border-1 rounded-lg'>
                    <ShopGramInfoSliderText 
                    img="/img/credit_card_50dp_000000_FILL0_wght400_GRAD0_opsz48.svg" 
                    heading="Flexible Payment" 
                    text="Pay with Multiple Credit Cards"></ShopGramInfoSliderText>
                </SwiperSlide>
                <SwiperSlide  className='border border-1 rounded-lg'>
                    <ShopGramInfoSliderText 
                    img="/img/keyboard_return_50dp_000000_FILL0_wght400_GRAD0_opsz48.svg" 
                    heading="14 Day Returns" 
                    text="Within 30 days for an exchange"></ShopGramInfoSliderText>
                </SwiperSlide>
                <SwiperSlide  className='border border-1 rounded-lg'>
                    <ShopGramInfoSliderText 
                    img="/img/support_agent_50dp_000000_FILL0_wght400_GRAD0_opsz48.svg" 
                    heading="Premium Support" 
                    text="Outstanding premium support"></ShopGramInfoSliderText>
                </SwiperSlide>

            </Swiper>
        </>
    );
}

export default ShopGramInfoSlider;