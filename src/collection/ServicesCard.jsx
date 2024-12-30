/* eslint-disable react/prop-types */
function ServicesCard({ image, title, text }) {
  return (
    <div className='flex flex-col md:flex-row items-center rounded-full'>
      <div className='md:w-1/2 flex justify-center items-center'>
        <img src={image} className='md:1/2 md:h-screen' alt='Transport' />
      </div>
      <div
        className='md:w-1/2 h-screen p-5 lg:p-10 flex flex-col justify-center bg-custom-blue text-white'
        style={{ backgroundColor: '#0473A8' }}
      >
        <h3 className='text-2xl font-bold mb-4'>{title}</h3>
        <p className='overflow-hidden p-2'>{text}</p>
      </div>
    </div>
  );
}

export default ServicesCard;
