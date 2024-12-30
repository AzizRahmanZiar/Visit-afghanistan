/* eslint-disable no-unused-vars */
import GalleryCard from '../collection/GalleryCard';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Gallery() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <GalleryCard
            bgImage='./imgs/masjud.jpg'
            title='Kabul'
            text='Kabul is the Capital of afghanistan. one of the beautifull city in the world.  Kabul is the Capital of afghanistan. one of the beautifuull city in the world. Kabul is the Capital of AFG.'
            first='./imgs/herat.jpg'
            second='./imgs/bamayan1.jpg'
            third='./imgs/bamayan.jpg'
          />
        </SwiperSlide>

        <SwiperSlide>
          <GalleryCard
            bgImage='./imgs/bamayan1.jpg'
            title='Bamyan'
            text='Kabul is the Capital of afghanistan. one of the beautifull city in the world.  Kabul is the Capital of afghanistan. one of the beautifuull city in the world. Kabul is the Capital of AFG.'
            first='./imgs/bamayan.jpg'
            second='./imgs/bamayan1.jpg'
            third='./imgs/white-building.jpg'
          />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryCard
            bgImage='./imgs/bamayan.jpg'
            title='Band-amir'
            text='Kabul is the Capital of afghanistan. one of the beautifull city in the world.  Kabul is the Capital of afghanistan. one of the beautifuull city in the world. Kabul is the Capital of AFG.'
            first='./imgs/bamayan.jpg'
            second='./imgs/bamayan1.jpg'
            third='./imgs/bamayan.jpg'
          />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryCard
            bgImage='./imgs/helmand.jpg'
            title='Darolaman'
            text='Kabul is the Capital of afghanistan. one of the beautifull city in the world.  Kabul is the Capital of afghanistan. one of the beautifuull city in the world. Kabul is the Capital of AFG.'
            first='./imgs/helmand.jpg'
            second='../imgs/bamayan.jpg'
            third='/imgs/bamayan1.jpg'
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Gallery;
