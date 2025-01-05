import { useEffect, useState } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { TbWorldWww } from 'react-icons/tb';

function About() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="relative bg-[url('/imgs/about.jpg')] bg-cover bg-center flex flex-col  gap-5 h-[33.3rem] text-white items-center justify-center">
        <div className='absolute inset-0 bg-black opacity-50'></div>

        <h1 className='uppercase font-bold text-4xl z-10'>About us</h1>
        <img
          src='./imgs/vslider.png'
          className={`absolute xsm:top-[30rem] transition-opacity xsm:h-10 xsm:w-10 duration-1000 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
          alt=''
        />
      </div>

      <div className="relative md:m-5 bg-[url('/imgs/world.jpg')] bg-cover bg-center flex flex-col gap-5 h-[27rem] text-white justify-center">
        <div className='absolute inset-0 bg-black opacity-50'></div>

        <p className='z-10 text-center xsm:px-2 md:w-1/2'>
          At AFG - AFGHANISTAN TOUR & TRAVEL MANAGEMENT COMPANY (AFG TMC), our
          vision is to redefine travel by creating immersive, meaningful, and
          sustainable experiences. We aspire to inspire transformative journeys
          where cultural exchange, responsible tourism, and positive impact are
          at the heart of every adventure. By embracing innovation, fostering
          global partnerships, and championing excellence, we aim to set a new
          benchmark in the travel
        </p>
      </div>

      <div className="relative bg-[url('/imgs/plain.jpg')] md:m-5 transform scale-x-[-1] bg-cover bg-center flex flex-col gap-10 h-[27rem] text-white ">
        <div className='transform scale-x-[-1] sm:px-5 md:w-1/2 md:px-6  flex flex-col'>
          <div className='xsm:h-[16rem] xsm:mb-5  xsm:overflow-hidden'>
            <p className='xsm:p-4 text-center'>
              At AFG - AFGHANISTAN TOUR & TRAVEL MANAGEMENT COMPANY (AFG TMC),
              our vision is to redefine travel by creating immersive,
              meaningful, and sustainable experiences. We aspire to inspire
              transformative journeys where cultural exchange, responsible
              tourism, and positive impact are at the heart of every adventure.
              By embracing innovation, fostering global partnerships, and
              championing excellence, we aim to set a new benchmark in the
              travel
            </p>
          </div>

          <div className='flex  xsm:flex-row xsm:justify-between px-1  xsm:gap-4 xsm:items-start'>
            <div className='flex xsm:flex-col items-center'>
              <img
                src='/imgs/afg.png'
                className=' filter xsm:h-[4rem] lg:h-[6rem] lg:w-[6rem] xsm:w-[4rem] brightness-0 invert'
                alt='Afghanistan map'
              />
              <div className='text-center flex flex-col'>
                <span className='font-semibold'>Visit</span>
                <span className='font-semibold'>Afghanistan</span>
              </div>
            </div>

            <div className='flex flex-col'>
              <span className='font-bold'>Contact us:</span>
              <div className='flex gap-2 mt-[-0.7rem]'>
                <span>_______________</span>
              </div>
              <ul className='mt-2 space-y-2'>
                <li className='flex items-center'>
                  <IoLogoWhatsapp className='mr-2' />
                  0702492682
                </li>
                <li className='flex items-center'>
                  <MdEmail className='mr-2' />
                  luilala.channel@gmail.com
                </li>
                <li className='flex items-center'>
                  <TbWorldWww className='mr-2' />
                  luilala.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
