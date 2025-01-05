import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className='relative flex flex-wrap z-50 justify-between items-center text-white p-4 border border-slate-700 bg-slate-900'>
      <div className='flex gap-2'>
        <img
          src='/imgs/afg.png'
          alt='afg map'
          className='h-8 w-8 filter brightness-0 invert'
        />
        <p className='font-bold'>VISIT AFGHANISTAN</p>
      </div>

      <button
        className='md:hidden text-white'
        onClick={toggleMenu}
        aria-label='Toggle menu'
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <ul
        className={`${
          isOpen ? 'flex flex-col xsm:h-[7rem]' : 'hidden'
        } absolute top-16 left-0 flex items-center md:h-5 right-0 bg-slate-900 md:flex md:static md:flex-row md:gap-10 sm1:gap-1 xsm:items-start xsm:pl-2 md:mt-0 w-full md:w-auto font-bold cursor-pointer`}
      >
        <li className='focus:text-blue-500'>
          <Link
            to='/'
            className='focus:text-blue-500'
            onClick={handleLinkClick}
          >
            Home
          </Link>
        </li>
        <li className='focus:text-blue-500'>
          <Link
            to='/services'
            className='focus:text-blue-500'
            onClick={handleLinkClick}
          >
            Services
          </Link>
        </li>
        <li className='focus:text-blue-500'>
          <Link
            to='/gallery'
            className='focus:text-blue-500'
            onClick={handleLinkClick}
          >
            Gallery
          </Link>
        </li>
        <li className='focus:text-blue-500'>
          <Link
            to='/about'
            className='focus:text-blue-500'
            onClick={handleLinkClick}
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
