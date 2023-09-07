import Image from 'next/image'
import HeaderCarousel  from '@/Components/HeaderCarousel/HeaderCarousel';
import InstituteHistory  from '@/Components/InstituteHistory/InstituteHistory';
import Gallery  from '@/Components/Gallery/Gallery';
import EmployeHistory  from '@/Components/EmployeHistory/EmployeHistory';
import NoticeBoard  from '@/Components/NoticeBoard/NoticeBoard';

export default function Home() {
  return (
    <main>
      {/* <h1 className='text-7xl'>Hello World</h1> */}
      <HeaderCarousel></HeaderCarousel>
      <div>
          <div>
            <InstituteHistory></InstituteHistory>
            <EmployeHistory></EmployeHistory>
            <Gallery></Gallery>
            <NoticeBoard />
          </div>
      </div>
    </main>
  )
}
