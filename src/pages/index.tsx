import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import NavBar from '../app/Components/NavBar/NavBar';
import "../pages/index.css"


export default function Home() {
  return (
    <div>
      <div className='mainPageContainer'>
        <NavBar />
        <div className='sliderContainer'>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img src="/images/photo1.webp" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div style={{ width: "100%", textAlign: "center", marginTop: "2rem", marginBottom: "2rem", height: "50px" }}>
          deneme
        </div>
        <div style={{ width: "100%", textAlign: "center", marginTop: "2rem", marginBottom: "2rem", height: "50px" }}>
          deneme2
        </div>
        <div style={{ width: "100%", textAlign: "center", marginTop: "2rem", marginBottom: "2rem", height: "50px" }}>
          deneme3
        </div>
        <div style={{ width: "100%", textAlign: "center", marginTop: "2rem", marginBottom: "2rem", height: "50px" }}>
          deneme4
        </div>

      </div>
    </div>






  )
}
