import React from 'react'
import "./Swiper.css"
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Keyboard, Autoplay, Parallax } from 'swiper/modules';
import { text } from 'stream/consumers';
function SwiperComponent() {
    const images = [
        {
            path: "/Images/photo1.jpg",
            text: "Çok uzaklara gitmene gerek yok. Biz yanınızdayız !",
            underText: "denemeee sdfhskjdhnf sdkjfksld ..."
        },
        {
            path: "/Images/photo2.jpg",
            text: "Evinizde hizmet vermeye hazırız !",
            underText: "denemeee sdfhskjdhnf sdkjfksld ..."
        },
        {
            path: "/Images/photo3.jpg",
            text: "boş"
        },
        {
            path: "/Images/photo4.jpg",
            text: "boş"
        },
        {
            path: "/Images/photo5.jpg",
            text: "boş"
        },
        {
            path: "/Images/photo6.webp",
            text: "boş"
        },
        
    ]

    return (
        <div className="containerSlider">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                keyboard={{
                    enabled: true,
                }}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                //   }}
                loop={true}
                pagination={{
                    clickable: true,
                }}

                modules={[Pagination, Keyboard, Autoplay, Parallax]}

            >
                {
                    images.map((content, index) => (
                        <SwiperSlide key={index}>
                            <img src={content.path} alt='Evde Sağlık Resim' />
                            <div className='swiperTextDiv'>
                                <h3>{content.text}</h3>
                                <p>{content.underText}</p>
                            </div>
                            <svg className="arrows">
                                <path className="a1" d="M0 0 L30 32 L60 0"></path>
                                <path className="a2" d="M0 20 L30 52 L60 20"></path>
                                <path className="a3" d="M0 40 L30 72 L60 40"></path>
                            </svg>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="backgraoundDark"></div>
            <div className='swiperContent'>
                <div className='swiperContent1'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="26px" height="26px"><path d="M 20 2.03125 C 19.449219 2.03125 19 2.480469 19 3.03125 L 19 7.8125 L 13.71875 2.53125 C 13.328125 2.140625 12.671875 2.140625 12.28125 2.53125 L 0.5625 14.28125 C 0.171875 14.671875 0.171875 15.296875 0.5625 15.6875 C 0.953125 16.078125 1.578125 16.078125 1.96875 15.6875 L 13 4.65625 L 24.0625 15.71875 C 24.257813 15.914063 24.523438 16.03125 24.78125 16.03125 C 25.039063 16.03125 25.273438 15.914063 25.46875 15.71875 C 25.859375 15.328125 25.859375 14.703125 25.46875 14.3125 L 22 10.84375 L 22 3.03125 C 22 2.480469 21.550781 2.03125 21 2.03125 Z M 13 6.5 L 2 17.5 L 2 23 C 2 24.65625 3.34375 26 5 26 L 21 26 C 22.65625 26 24 24.65625 24 23 L 24 17.5 Z M 11 16 L 15 16 C 15.550781 16 16 16.449219 16 17 L 16 23 C 16 23.550781 15.550781 24 15 24 L 11 24 C 10.449219 24 10 23.550781 10 23 L 10 17 C 10 16.449219 10.449219 16 11 16 Z" /></svg>
                    <p>Evde Muayene</p>
                </div>
                <div className='swiperContent2'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="26px" height="26px"><path d="M 20 2.03125 C 19.449219 2.03125 19 2.480469 19 3.03125 L 19 7.8125 L 13.71875 2.53125 C 13.328125 2.140625 12.671875 2.140625 12.28125 2.53125 L 0.5625 14.28125 C 0.171875 14.671875 0.171875 15.296875 0.5625 15.6875 C 0.953125 16.078125 1.578125 16.078125 1.96875 15.6875 L 13 4.65625 L 24.0625 15.71875 C 24.257813 15.914063 24.523438 16.03125 24.78125 16.03125 C 25.039063 16.03125 25.273438 15.914063 25.46875 15.71875 C 25.859375 15.328125 25.859375 14.703125 25.46875 14.3125 L 22 10.84375 L 22 3.03125 C 22 2.480469 21.550781 2.03125 21 2.03125 Z M 13 6.5 L 2 17.5 L 2 23 C 2 24.65625 3.34375 26 5 26 L 21 26 C 22.65625 26 24 24.65625 24 23 L 24 17.5 Z M 11 16 L 15 16 C 15.550781 16 16 16.449219 16 17 L 16 23 C 16 23.550781 15.550781 24 15 24 L 11 24 C 10.449219 24 10 23.550781 10 23 L 10 17 C 10 16.449219 10.449219 16 11 16 Z" /></svg>
                    <p>Evde Sağlık</p>
                </div>
                <div className='swiperContent3'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="26px" height="26px"><path d="M 20 2.03125 C 19.449219 2.03125 19 2.480469 19 3.03125 L 19 7.8125 L 13.71875 2.53125 C 13.328125 2.140625 12.671875 2.140625 12.28125 2.53125 L 0.5625 14.28125 C 0.171875 14.671875 0.171875 15.296875 0.5625 15.6875 C 0.953125 16.078125 1.578125 16.078125 1.96875 15.6875 L 13 4.65625 L 24.0625 15.71875 C 24.257813 15.914063 24.523438 16.03125 24.78125 16.03125 C 25.039063 16.03125 25.273438 15.914063 25.46875 15.71875 C 25.859375 15.328125 25.859375 14.703125 25.46875 14.3125 L 22 10.84375 L 22 3.03125 C 22 2.480469 21.550781 2.03125 21 2.03125 Z M 13 6.5 L 2 17.5 L 2 23 C 2 24.65625 3.34375 26 5 26 L 21 26 C 22.65625 26 24 24.65625 24 23 L 24 17.5 Z M 11 16 L 15 16 C 15.550781 16 16 16.449219 16 17 L 16 23 C 16 23.550781 15.550781 24 15 24 L 11 24 C 10.449219 24 10 23.550781 10 23 L 10 17 C 10 16.449219 10.449219 16 11 16 Z" /></svg>
                    <p>Evde Bakım</p>
                </div>
                <div className='swiperContent4'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="26px" height="26px"><path d="M 20 2.03125 C 19.449219 2.03125 19 2.480469 19 3.03125 L 19 7.8125 L 13.71875 2.53125 C 13.328125 2.140625 12.671875 2.140625 12.28125 2.53125 L 0.5625 14.28125 C 0.171875 14.671875 0.171875 15.296875 0.5625 15.6875 C 0.953125 16.078125 1.578125 16.078125 1.96875 15.6875 L 13 4.65625 L 24.0625 15.71875 C 24.257813 15.914063 24.523438 16.03125 24.78125 16.03125 C 25.039063 16.03125 25.273438 15.914063 25.46875 15.71875 C 25.859375 15.328125 25.859375 14.703125 25.46875 14.3125 L 22 10.84375 L 22 3.03125 C 22 2.480469 21.550781 2.03125 21 2.03125 Z M 13 6.5 L 2 17.5 L 2 23 C 2 24.65625 3.34375 26 5 26 L 21 26 C 22.65625 26 24 24.65625 24 23 L 24 17.5 Z M 11 16 L 15 16 C 15.550781 16 16 16.449219 16 17 L 16 23 C 16 23.550781 15.550781 24 15 24 L 11 24 C 10.449219 24 10 23.550781 10 23 L 10 17 C 10 16.449219 10.449219 16 11 16 Z" /></svg>
                    <p>Evde Sağlık Kontrol</p>
                </div>
            </div>
        </div >
    )
}

export default SwiperComponent