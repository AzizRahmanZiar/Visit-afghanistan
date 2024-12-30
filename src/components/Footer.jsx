import { FaTiktok } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { TbWorldWww } from 'react-icons/tb';

function Footer() {
  return (
    <footer
      className='w-screen text-white p-5'
      style={{ backgroundColor: '#0473A8' }}
    >
      <div className='w-full flex xsm:flex-col gap-10 md:flex-row justify-between'>
        <div className='flex items-center lg:w-[25rem] flex-col '>
          <img
            src='./imgs/afg.png'
            className='w-20 h-20 mb-4 filter brightness-0 invert'
            alt='Afghanistan map'
          />
          <div className='text-center flex flex-col'>
            <span className='font-semibold'>Visit</span>
            <span className='font-semibold'>Afghanistan</span>
          </div>
          <p className='text-center mt-2'>
            Visit Afghanistan is a special company. You can enjoy your vacation
            with us and explore every place in Afghanistan.
          </p>
        </div>

        <div className='flex flex-col'>
          <span className='font-bold'>Office</span>
          <div className='flex gap-2 mt-[-0.7rem]'>
            <span>___</span>
            <span>____</span>
          </div>
          <ul className='mt-2 space-y-2'>
            <li className='flex items-center'>
              <FaLocationDot className='mr-2' />
              Kandahar, Afghanistan
            </li>
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

        <div>
          <span className='font-bold'>Links</span>
          <div className='flex gap-2 mt-[-0.7rem]'>
            <span>___</span>
            <span>____</span>
          </div>
          <ul className='flex flex-col gap-2 mt-2'>
            <li>Home</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>About</li>
          </ul>
        </div>

        <div>
          <span className='font-bold '>Social</span>
          <div className='flex gap-2 mt-[-0.7rem]'>
            <span>___</span>
            <span>____</span>
          </div>
          <span className='block text-sm mt-1'>Follow us on social media</span>
          <ul className='flex space-x-4 mt-2'>
            <li>
              <FaTiktok className='text-xl' />
            </li>
            <li>
              <FaFacebookF className='text-xl' />
            </li>
            <li>
              <FaYoutube className='text-xl' />
            </li>
            <li>
              <FaInstagramSquare className='text-xl' />
            </li>
          </ul>
        </div>
      </div>

      <div className='border-t border-dotted border-white mt-5' />

      <div className='text-center mt-3 text-sm'>
        <p>Copyright © 2010-2024 Visit Afg Company S.L. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
