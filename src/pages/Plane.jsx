function Plane() {
  return (
    <>
      <div className='flex  bg-[url("/imgs/band-a-amir.jpg")] lg:gap-28 overflow-hidden md:flex-row md:justify-between  xsm:flex-col   relative bg-cover xsm:justify-center   bg-center h-[33.3rem]'>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='flex lg:ml-5 flex-col xsm:h-1/2 md:w-1/2 justify-center gap-3 inset-0 text-white xsm:p-3'>
          <h2 className='uppercase font-bold z-10 tracking-wider xsm:text-2xl'>
            Plane your trip with us...
          </h2>
          <p className='font-freestyle sm:text-3xl flex flex-col text-2xl z-10'>
            <span>Incredible 7-day of</span>
            <span>Bamyan Group Tour</span>
          </p>
        </div>
        <div className=' flex relative sm:flex-row md:ml-0 sm:ml-[4rem] md:w-1/2 xsm:h-1/2'>
          <img
            src='./imgs/bamayan1.jpg'
            className='md:w-[11rem] md:h-[11rem]  lg:h-[13rem] lg:w-[12rem] lg:top-[1rem] md:top-[2rem] md:left-0 xsm:w-[7rem] xsm:h-[7rem] sm:h-[8rem] sm:w-[8rem] absolute sm:top-[-2rem]   xsm:top-0 xsm:left-[4rem] rounded-md '
            alt=''
          />
          <img
            src='./imgs/band-a-amir.jpg'
            className='md:h-[11rem] md:w-[11rem] lg:h-[13rem] lg:top-[16rem] lg:w-[12rem] md:top-[14rem] md:left-0 xsm:w-[7rem] xsm:h-[7rem] sm:h-[8rem] sm:w-[8rem] sm:top-8 xsm:top-[6rem] xsm:left-[9rem] sm:left-[10rem]  rounded-md absolute top-0 left-0  '
            alt=''
          />
          <img
            src='./imgs/helmand.jpg'
            className='md:top-[3rem] lg:w-[12rem] lg:h-[22rem]   lg:left-[15rem] md:left-[12rem] md:h-[20rem] xsm:w-[7rem] sm:left-[16rem] sm:top-[6rem] xsm:h-[7rem] sm:h-[8rem] md:w-[11rem] sm:w-[8rem] xsm:top-[10rem] xsm:left-[14rem] absolute top-[-12rem]  left-[15rem] rounded-md '
            alt=''
          />
        </div>
      </div>

      <p className='font-freestyle flex flex-col gap-5 mt-5 w-full py-3 bg-slate-800 z-10 items-center justify-center text-4xl'>
        <span className='text-white'>Special 7-Days Tour of</span>
      </p>

      <div className='flex justify-between items-center'>
        <div
          className='h-[35rem] my-5 md:w-[7rem] sm:w-[3rem] lg:w-[10rem] xsm:w-[1rem]'
          style={{ backgroundColor: '#0473A8' }}
        ></div>

        <form action='' className='flex items-center flex-col gap-5'>
          <input
            type='text'
            className='border xsm:h-[2rem] lg:h-[3rem] sm:w-[18rem] xsm:w-[15rem] md:w-[25rem] border-gray-600 rounded-full px-4'
            placeholder='Enter your fullname'
          />
          <input
            type='text'
            placeholder='Enter your whatsapp number or email'
            className='border xsm:h-[2rem] lg:h-[3rem] sm:w-[18rem]  xsm:w-[15rem] md:w-[25rem] border-gray-500 rounded-full px-4'
          />

          <input
            type='text'
            placeholder='Enter travel date(year/month/day)'
            className='border lg:h-[3rem]  xsm:h-[2rem] sm:w-[18rem] xsm:w-[15rem] md:w-[25rem] border-gray-600 rounded-full px-4'
          />
          <label>Your message</label>
          <input
            type='textarea'
            className='border xsm:h-[15rem] xsm:w-[15rem] sm:w-[18rem]  md:h-[10rem] md:w-[25rem] border-gray-600 rounded-xl px-4'
          />

          <input
            type='submit'
            value='save and send'
            className='text-white xsm:h-[2rem]  xsm:w-[8rem]  cursor-pointer rounded-xl'
            style={{ backgroundColor: '#0473A8' }}
          />
        </form>

        <div
          className='h-[35rem] my-5 md:w-[7rem] sm:w-[3rem] lg:w-[10rem] xsm:w-[1rem] '
          style={{ backgroundColor: '#0473A8' }}
        ></div>
      </div>
    </>
  );
}

export default Plane;
