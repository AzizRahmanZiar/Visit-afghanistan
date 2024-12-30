/* eslint-disable react/prop-types */
function GalleryCard({ bgImage, title, text, first, second, third }) {
  return (
    <div>
      <div
        className='flex xsm:flex-col md:flex-row overflow-hidden relative bg-cover items-center justify-start xsm:pt-10 bg-center h-screen'
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-100'></div>

        <div className='flex sm:justify-end flex-col gap-5 md:w-1/2 xsm:h-1/2 inset-0 text-white px-5 relative z-10'>
          <h2 className='uppercase font-bold tracking-wider text-4xl'>
            {title}
          </h2>
          <p>{text}</p>
          <button
            className='w-32 text-white font-bold py-2 px-4 rounded hover:bg-blue-800'
            style={{ backgroundColor: '#0473A8' }}
          >
            View more
          </button>
        </div>
        <div className='flex sm:items-end relative w-1/2 z-10'>
          <img
            src={first}
            className='xsm:w-[8rem] xsm:h-[8rem] lg:w-[15rem] lg:h-[18rem] lg:top-[-8rem] lg:left-0 md:w-[10rem] md:h-[10rem] absolute xsm:top-2 xsm:left-0 md:top-[-5rem] md:left-0 rounded-md transition-all duration-300 hover:outline hover:outline-white hover:outline-4'
            alt=''
          />
          <img
            src={second}
            className='lg:top-[-5rem] lg:left-[17rem] xsm:w-[8rem] lg:w-[15rem] lg:h-[18rem] xsm:h-[8rem] md:w-[10rem] md:h-[10rem] xsm:top-[6rem] xsm:left-[4rem] md:top-8 md:left-[10rem]  rounded-md absolute top-[5rem] left-[2rem] h-64 transition-all duration-300 hover:outline hover:outline-white hover:outline-4'
            alt=''
          />
          <img
            src={third}
            className='lg:top-[-3rem] lg:left-[35rem] w-52 xl:top-0 xl:left-[35rem] xsm:w-[8rem] md:top-[9rem] lg:w-[15rem] lg:h-[18rem] md:left-[20rem] md:w-[10rem] md:h-[10rem] xsm:h-[8rem] xsm:top-[9rem] xsm:left-[10rem]  absolute top-2 left-[3rem] rounded-md h-64 transition-all duration-300 hover:outline hover:outline-white hover:outline-4'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
