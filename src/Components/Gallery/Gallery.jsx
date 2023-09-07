'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import Image from 'next/image'
import img1 from '@/app/assets/img/img1.jpeg'
import img2 from '@/app/assets/img/img2.jpeg'
import img3 from '@/app/assets/img/img3.jpeg'
// import required modules
import { Pagination } from 'swiper/modules';

const Gallery = () => {
    return (
        <div>
            <h2 className='text-7xl font-serif text-center uppercase py-10'>Our Gallery</h2>
            <div className={` rounded-lg bg-[url(https://images.pexels.com/photos/7123960/pexels-photo-7123960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]`}>
                <div className='bg-[#10101044] py-10'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Image
                                alt="..."
                                src={img1}
                                width={400}
                                height={600}
                                placeholder='blur'
                                className='rounded-none w-[400px] h-[600px]'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                alt="..."
                                src={img2}
                                width={400}
                                height={600}
                                placeholder='blur'
                                className='rounded-none w-[400px] h-[600px]'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                alt="..."
                                src={img3}
                                width={400}
                                height={600}
                                placeholder='blur'
                                className='rounded-none w-[400px] h-[600px]'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                alt="..."
                                src={img1}
                                width={400}
                                height={600}
                                placeholder='blur'
                                className='rounded-none w-[400px] h-[600px]'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                alt="..."
                                src={img2}
                                width={400}
                                height={600}
                                placeholder='blur'
                                className='rounded-none w-[400px] h-[600px]'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                alt="..."
                                src={img3}
                                width={400}
                                height={600}
                                placeholder='blur'
                                className='rounded-none w-[400px] h-[600px]'
                            />
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Gallery;