import { Link } from 'react-router-dom';
import ImgaeCard from '../collection/ImgaeCard';

function ImageContainer() {
  return (
    <div className='bg-[url("./imgs/manzira.jpg")] bg-center pb-10 flex flex-col gap-5 items-center justify-center w-screen'>
      <p className='font-freestyle flex flex-col gap-5 w-full py-3 bg-black bg-opacity-25 z-10 items-center justify-center text-4xl text-white'>
        Special 7-Days Tour of
      </p>

      <p className='flex gap-4'>
        <span className='font-fingerpaint text-white'>Kabul</span>
        <span className='font-fingerpaint text-white'>Bamyan</span>
        <span className='font-fingerpaint text-white'>Herat</span>
      </p>

      <div className='flex xsm:flex-col  md:flex-row  justify-center md:gap-10 md:flex-wrap xsm:gap-3 lg:h-[25rem] lg:flex-row'>
        <div className='flex items-start'>
          <ImgaeCard image='./imgs/white-building.jpg' />
        </div>
        <div className='flex items-end'>
          <ImgaeCard image='./imgs/herat.jpg' />
        </div>
        <div className='flex items-start'>
          <ImgaeCard image='./imgs/Homepage.jpg' />
        </div>
        <div className='flex items-end'>
          <ImgaeCard image='./imgs/bamayan.jpg' />
        </div>
        <div className='flex items-start'>
          <ImgaeCard image='./imgs/bamayan1.jpg' />
        </div>
      </div>

      <ul>
        <li className='text-white list-disc'>Transportation (Car & Driver)</li>
        <li className='text-white list-disc'>
          Accommodation in Kabul & Bamiyan
        </li>
        <li className='text-white list-disc'>English-Speaking Tour Guide</li>
        <li className='text-white list-disc'>Breakfast</li>
        <li className='text-white list-disc'>Soft Drinks</li>
        <li className='text-white list-disc'>Invitation Letter</li>
      </ul>
      <p className='mt-4 text-lg font-bold text-white bg-blue-900 py-2 px-4 rounded hover:bg-blue-700'>
        Price: Only $850 USD per person!
      </p>
      <button className='mt-2 bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700'>
        <Link to='/plan'> Contact us to book</Link>
      </button>
    </div>
  );
}

export default ImageContainer;
