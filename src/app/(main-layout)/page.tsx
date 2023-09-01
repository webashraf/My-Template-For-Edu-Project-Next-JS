import Image from 'next/image'
import HeaderCarousel  from '@/Components/HeaderCarousel/HeaderCarousel';
import InstituteHistory  from '@/Components/InstituteHistory/InstituteHistory';

export default function Home() {
  return (
    <main className="w-[1280px] mx-auto">
      {/* <h1 className='text-7xl'>Hello World</h1> */}
      <HeaderCarousel></HeaderCarousel>
      <InstituteHistory></InstituteHistory>
    </main>
  )
}
