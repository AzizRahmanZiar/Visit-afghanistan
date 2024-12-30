/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

function Card({ title, image, content }) {
  return (
    <div className='flex bg-white flex-col sm:w-[20rem] sm1:w-[30rem] gap-6 w-[17rem] md:w-[15rem] lg:w-[18rem] xl:w-[20rem] pb-6 justify-between items-center border rounded-lg shadow-lg'>
      <img
        className='w-full h-48 object-cover rounded-t-lg'
        src={image}
        alt='Card Image'
      />

      <h2 className='font-bold text-xl mb-2'>{title}</h2>
      <p className='text-gray-700 text-base text-center px-2'>{content}</p>
      <button className='mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-800'>
        <Link to='/bamyan'>Learn More</Link>
      </button>
    </div>
  );
}

export default Card;
