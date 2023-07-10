import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import NavBar from '../app/Components/NavBar/NavBar';
import "../pages/index.css"
import Footer from '@/app/Components/Footer/Footer';
import Form from '@/app/Components/Form/Form';
import 'swiper/css';

import BackToTopButton from '../app/Components/BackToTopButton/BackToTopButton';


export default function Home() {

  return (
    <div>
      <div className='mainPageContainer'>
        <NavBar />
        <BackToTopButton />
        <div className='sliderContainer'>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img src="/images/photo1.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/photo1.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/photo1.webp" alt="" />
            </SwiperSlide>
            
          </Swiper>
        </div>
        
        
          <Form></Form>
        <footer>
          <Footer></Footer>
        </footer>
    
      </div>
    </div>






  )
}
