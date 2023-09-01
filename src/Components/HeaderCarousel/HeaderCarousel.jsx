'use client';
import { Carousel } from 'flowbite-react';
import Image from 'next/image'
import img1 from '@/app/assets/img/img1.jpeg'
import img2 from '@/app/assets/img/img2.jpeg'
import img3 from '@/app/assets/img/img3.jpeg'

const HeaderCarousel = () => {
    return (
        <div>
            <Carousel className='h-[90vh] rounded-none'>
                <Image
                    alt="..."
                    src={img1}
                    width={1280}
                    height={600}
                    placeholder='blur'
                    className='rounded-none'
                />
                <Image
                    alt="..."
                    src={img2}
                    width={1280}
                    height={600}
                    placeholder='blur'
                    className='rounded-none'
                />
                <Image
                    alt="..."
                    src={img3}
                    width={1280}
                    height={600}
                    placeholder='blur'
                    className='rounded-none'
                />
            </Carousel>
            <div className='w-[800px] mx-auto flex items-center justify-between py-10'>
                <button className='px-4 py-2 bg-emerald-600 text-white w-[200px]'>সর্ব শেষ ঘষনাঃ</button><div className='w-full'><marquee>এই মূহুর্তে কোন প্রকার ঘষনা নাই।</marquee></div>
            </div>
        </div>
    )
}

export default HeaderCarousel;