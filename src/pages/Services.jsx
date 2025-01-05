/* eslint-disable no-unused-vars */

import ServicesCard from '../collection/ServicesCard';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Services() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative bg-[url('/imgs/Homepage.jpg')] bg-cover bg-center flex flex-col lg:px-52 xl:px-96 xsm:px-10 gap-5 h-[33.3rem] text-white items-center justify-center">
        <div className='absolute inset-0 bg-black opacity-50'></div>

        <h1 className=' text-4xl z-10'>Our services</h1>

        <p className='text-center z-10 lg:px-24'>
          AFG ETC offers comprehensive travel services in Afghanistan, from
          expert-guided tours and secure transportation to comfortable
          accommodations and visa assistance, ensuring a seamless and enriching
          experience for every traveler.
        </p>

        <img
          src='./imgs/vslider.png'
          className={`absolute xsm:top-[30rem] transition-opacity xsm:h-10 xsm:w-10 duration-1000 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
          alt=''
        />
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
              image='./imgs/bed.jpg'
              title='Hotel'
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
              image='./imgs/couples.jpg'
              title='Tour Guid'
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
              image='./imgs/car-1.jpg'
              title='Transport'
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
    </>
  );
}

export default Services;
