function Hero() {
  return (
    <div className="relative bg-[url('/imgs/Homepage.jpg')] bg-cover bg-center flex flex-col lg:px-52 xl:px-96 xsm:px-10 gap-5 h-[33.3rem] text-white items-center justify-center">
      <div className='absolute inset-0 bg-black opacity-50'></div>

      <h1 className='uppercase font-freehand text-4xl z-10'>Welcome to</h1>
      <h2 className='uppercase font-bold tracking-wider text-4xl z-10'>
        Afghanistan
      </h2>
      <p className='text-center z-10'>
        AFG ETC offers comprehensive travel services in Afghanistan, from
        expert-guided tours and secure transportation to comfortable
        accommodations and visa assistance, ensuring a seamless and enriching
        experience for every traveler.
      </p>
    </div>
  );
}

export default Hero;
