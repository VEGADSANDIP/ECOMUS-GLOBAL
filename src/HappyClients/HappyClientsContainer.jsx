import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './HappyClientsContainer.css';
import HappyClientsContent from './HappyClientsContent';
import HappyClientsContainerText from './HappyClientsContainerText';
import HappyClientUser from './HappyClientsUser';

function HappyClientsContainer() {

    return (
        <>
            <div>
                <Swiper
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="HappyClient"
                    breakpoints={
                        {
                            300: {
                                slidesPerView: 1,
                                spaceBetween: 0
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 0
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 0
                            }
                        }
                    }
                >
                    <SwiperSlide className='HappyClientsSwiperSlide'>
                        <div className='p-10 mx-12'>
                            <div className='flex justify-start items-center gap-2 my-5'>
                                <HappyClientsContent></HappyClientsContent>
                                <HappyClientsContent></HappyClientsContent>
                                <HappyClientsContent></HappyClientsContent>
                                <HappyClientsContent></HappyClientsContent>
                                <HappyClientsContent></HappyClientsContent>
                            </div>
                            <div className=''>
                                <HappyClientsContainerText
                                    heading="Best Online Fashion Site"
                                    article="“I always find something stylish and affordable on this web fashion site”"
                                    name="Robert smith"
                                    country="USA"
                                >
                                </HappyClientsContainerText>
                            </div>

                            <div className=''>
                                <HappyClientUser
                                    imgHappyClient="/img/collection-1.jpg"
                                    name="Jersey thong body"
                                    price="$112.00"></HappyClientUser>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='HappyClientsSwiperSlide'>

                        <div className='p-10 mx-12'>
                            <div className='flex justify-start items-center gap-2 my-5'>
                                <HappyClientsContent></HappyClientsContent>
                                <HappyClientsContent></HappyClientsContent>
                                <HappyClientsContent></HappyClientsContent>
                                <HappyClientsContent></HappyClientsContent>
                                <HappyClientsContent></HappyClientsContent>
                            </div>
                            <div className=''>
                                <HappyClientsContainerText
                                    heading="Best Online Fashion Site"
                                    article="“I always find something stylish and affordable on this web fashion site”"
                                    name="Robert smith"
                                    country="USA"
                                >
                                </HappyClientsContainerText>
                            </div>

                            <div className=''>
                                <HappyClientUser
                                    imgHappyClient="/img/collection-1.jpg"
                                    name="Jersey thong body"
                                    price="$112.00"></HappyClientUser>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='HappyClientsSwiperSlide'>
                        <div className='p-10 mx-12'>
                            <div className='flex justify-start items-center gap-2 my-5'>
                                <HappyClientsContent></HappyClientsContent>
                                <HappyClientsContent></HappyClientsContent>
                                <HappyClientsContent></HappyClientsContent>
                                <HappyClientsContent></HappyClientsContent>
                                <HappyClientsContent></HappyClientsContent>
                            </div>
                            <div className=''>
                                <HappyClientsContainerText
                                    heading="Best Online Fashion Site"
                                    article="“I always find something stylish and affordable on this web fashion site”"
                                    name="Robert smith"
                                    country="USA"
                                >
                                </HappyClientsContainerText>
                            </div>

                            <div className=''>
                                <HappyClientUser
                                    imgHappyClient="/img/collection-1.jpg"
                                    name="Jersey thong body"
                                    price="$112.00"></HappyClientUser>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='HappyClientsSwiperSlide'>
                        <div className='p-10 mx-12'>
                            <div className='flex justify-start items-center gap-2 my-5'>
                                <HappyClientsContent></HappyClientsContent>
                                <HappyClientsContent></HappyClientsContent>
                                <HappyClientsContent></HappyClientsContent>
                                <HappyClientsContent></HappyClientsContent>
                                <HappyClientsContent></HappyClientsContent>
                            </div>
                            <div className=''>
                                <HappyClientsContainerText
                                    heading="Best Online Fashion Site"
                                    article="“I always find something stylish and affordable on this web fashion site”"
                                    name="Robert smith"
                                    country="USA"
                                >
                                </HappyClientsContainerText>
                            </div>

                            <div className=''>
                                <HappyClientUser
                                    imgHappyClient="/img/collection-1.jpg"
                                    name="Jersey thong body"
                                    price="$112.00"></HappyClientUser>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default HappyClientsContainer;





