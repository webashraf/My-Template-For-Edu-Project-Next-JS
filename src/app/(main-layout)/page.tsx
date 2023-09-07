import Image from 'next/image'
import HeaderCarousel  from '@/Components/HeaderCarousel/HeaderCarousel';
import InstituteHistory  from '@/Components/InstituteHistory/InstituteHistory';
import EmployeHistory  from '@/Components/EmployeHistory/EmployeHistory';

export default function Home() {
  return (
    <main>
      {/* <h1 className='text-7xl'>Hello World</h1> */}
      <HeaderCarousel></HeaderCarousel>
      <div>
          <div>
            <InstituteHistory></InstituteHistory>
            <EmployeHistory></EmployeHistory>
          </div>
      </div>
    </main>
  )
}
