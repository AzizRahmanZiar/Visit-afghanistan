import ServicesCard from '../collection/ServicesCard';
/* eslint-disable no-unused-vars */
// import Navbar from '../components/Navbar';

// import Bamyan from './Bamyan';

import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

function Bamyan() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative bg-[url('/imgs/bamayan1.jpg')] bg-cover bg-center flex flex-col gap-5 h-[33.3rem] text-white items-center justify-center">
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='flex flex-col gap-5 inset-0 text-center text-white'>
          <h2 className='uppercase font-bold z-10 xsm:px-4  tracking-wider text-2xl'>
            Bamyan
          </h2>
        </div>
        <img
          src='./imgs/vslider.png'
          className={`absolute xsm:top-[30rem] transition-opacity xsm:h-10 xsm:w-10 duration-1000 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
          alt=''
        />
      </div>
      <div className='flex flex-col justify-center items-center text-center xsm:px-5 md:mx-[5rem] py-10'>
        <p>
          Bamyan is one of the beautifull city if afghanistan. Bamyan is one of
          the beautifull city if afghanistan. Bamyan is one of the beautifull
          city if afghanistan. Bamyan is one of the beautifull city if
          afghanistan. Bamyan is one of the beautifull city if afghanistan.
          Bamyan is one of the beautifull city if afghanistan. Bamyan is one of
          the beautifull city if afghanistan. Bamyan is one of the beautifull
          city if afghanistan. Bamyan is one of the beautifull city if
          afghanistan. Bamyan is one of the beautifull city if afghanistan.
          Bamyan is one of the beautifull city if afghanistan. Bamyan is one of
          the beautifull city if afghanistan. Bamyan is one of the beautifull
          city if afghanistan. Bamyan is one of the beautifull city if
          afghanistan. Bamyan is one of the beautifull city if afghanistan.
          Bamyan is one of the beautifull city if afghanistan. Bamyan is one of
          the beautifull city if afghanistan.
        </p>
        <button
          className='w-32 text-white font-bold py-2 px-4  mt-10 rounded hover:bg-blue-800'
          style={{ backgroundColor: '#0473A8' }}
        >
          <Link to='/booking'>Book Tour</Link>
        </button>
      </div>
      <div className='p-5'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper'
        >
          <SwiperSlide>
            <ServicesCard
              image='./imgs/band-a-amir.jpg'
              title='Band-E-Amir'
              text='   Our transportation services include reliable and safe ground
            transportation across Afghanistan. HAMIDI TMC offers affordable car
            rental services with professional drivers who are well-versed in
            local routes, ensuring efficient and timely travel. Whether you need
            a standard vehicle or an armored car, our drivers are highly skilled
            and experienced, providing a secure and comfortable journey. Our
            transportation services include reliable and safe ground
            transportation across Afghanistan. HAMIDI TMC offers affordable car
            rental services with professional drivers who are well-versed in
            local routes, ensuring efficient and timely travel. Whether you need
            a standard vehicle or an armored car, our drivers are highly skilled
            and experienced, providing a secure and comfortable journey.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServicesCard
              image='./imgs/bamayan1.jpg'
              title='Buddha Statue'
              text='   Our transportation services include reliable and safe ground
            transportation across Afghanistan. HAMIDI TMC offers affordable car
            rental services with professional drivers who are well-versed in
            local routes, ensuring efficient and timely travel. Whether you need
            a standard vehicle or an armored car, our drivers are highly skilled
            and experienced, providing a secure and comfortable journey. Our
            transportation services include reliable and safe ground
            transportation across Afghanistan. HAMIDI TMC offers affordable car
            rental services with professional drivers who are well-versed in
            local routes, ensuring efficient and timely travel. Whether you need
            a standard vehicle or an armored car, our drivers are highly skilled
            and experienced, providing a secure and comfortable journey.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServicesCard
              image='./imgs/helmand.jpg'
              title='Agricultural lands'
              text='   Our transportation services include reliable and safe ground
            transportation across Afghanistan. HAMIDI TMC offers affordable car
            rental services with professional drivers who are well-versed in
            local routes, ensuring efficient and timely travel. Whether you need
            a standard vehicle or an armored car, our drivers are highly skilled
            and experienced, providing a secure and comfortable journey. Our
            transportation services include reliable and safe ground
            transportation across Afghanistan. HAMIDI TMC offers affordable car
            rental services with professional drivers who are well-versed in
            local routes, ensuring efficient and timely travel. Whether you need
            a standard vehicle or an armored car, our drivers are highly skilled
            and experienced, providing a secure and comfortable journey.'
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='flex  bg-[url("/imgs/bg-1.jpg")] bg-cover  flex-col  overflow-hidden   justify-between py-5  h-screen'>
        <div className='flex flex-row lg:p-10 justify-between'>
          <div className='flex flex-col px-2 gap-2 inset-0 text-white'>
            <p className=' flex  z-10 xsm:text-sm xsm:gap-2'>
              <span>Join Our Incredible </span>
              <span className=''>
                7-Day <span className='text-slate-700 font-bold'>BAMYAN</span>{' '}
                Group Tour
              </span>
            </p>

            <ul>
              <li className='list-disc text-sm'>
                Transportation (Car & Driver){' '}
              </li>
              <li className='list-disc text-sm'>
                Accommodation in Kabul & Bamiyan
              </li>
              <li className='list-disc text-sm'>English-Speaking Tour Guide</li>
              <li className='list-disc text-sm'>Breakfast</li>
              <li className='list-disc text-sm'>Soft Drinks</li>
              <li className='list-disc text-sm'> Permission Letter</li>
              <li className='list-disc text-sm'>Invitation Letter</li>
              <li className='list-disc text-sm'>
                Pay for one, bring two people
              </li>
            </ul>

            <p className='mt-4 w-[10rem] lg:w-[19rem] text-center text-lg font-bold text-white bg-blue-900 xsm:p-2 rounded hover:bg-blue-700'>
              Price: Only $850 USD per person!
            </p>
          </div>
          <div className='flex sm:ml-[5rem] relative xsm:top-[12rem] md:top-20  xsm:w-[40%] lg:w-1/2'>
            <img
              src='./imgs/bamayan1.jpg'
              className='xsm:w-[6rem] lg:w-[12rem] lg:h-[19rem] xsm:h-[8rem] sm1:w-[10rem] lg:left-[-3rem] sm1:h-[12rem] md:h-[15rem] sm:w-[8rem] sm:h-[10rem] absolute top-0 left-0 sm:top-[-3rem] sm:left-[-7rem] rounded-md '
              alt=''
            />
            <img
              src='./imgs/band-a-amir.jpg'
              className='xsm:w-[6rem] lg:w-[12rem] lg:h-[19rem] xsm:h-[8rem] sm1:w-[10rem] lg:left-[23rem] sm1:h-[12rem] md:h-[15rem] sm:w-[8rem] sm:h-[10rem] sm:top-[-3rem] sm:left-[6rem]  rounded-md top-3 left-5 absolute '
              alt=''
            />
            <img
              src='./imgs/helmand.jpg'
              className='xsm:w-[6rem] lg:w-[12rem] lg:h-[19rem] xsm:h-[8rem] lg:left-[10rem] sm1:w-[10rem] md:h-[15rem] sm1:h-[12rem] sm:w-[8rem] sm:h-[10rem] absolute sm:top-[2rem] sm:left-[-0.5rem]  rounded-md top-7 left-10'
              alt=''
            />
          </div>
        </div>

        <div className='flex items-center justify-center'>
          <button
            className='w-48 z-10 text-white font-bold py-2 px-4  mt-10 rounded hover:bg-blue-800'
            style={{ backgroundColor: '#0473A8' }}
          >
            Contact us to book
          </button>
        </div>
      </div>
    </>
  );
}

export default Bamyan;
