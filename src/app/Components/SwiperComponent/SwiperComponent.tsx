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
            text: "Çok uzaklara gitmene gerek yok. Biz yanınızdayız!",
            underText: "denemeee sdfhskjdhnf sdkjfksld ..."
        },
        {
            path: "/Images/photo2.jpg",
            text: "Evinizde hizmet vermeye hazırız!",
            underText: "denemeee sdfhskjdhnf sdkjfksld ..."
        },
        {
            path: "/Images/photo3.jpg",
            text: "Glutatyon: Vücudunuzun Güçlü Koruyucusu!"
        },
        {
            path: "/Images/photo4.jpg",
            text: "Kendinizi Yenileyin, PRP ile Gençleşin!"
        },
        {
            path: "/Images/photo5.jpg",
            text: "Sağlıklı Bir Gelecek İçin Bugünden Başlayın."
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
                <div className='swiperContent'>
                    <div className='swiperContent1'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16V424c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16H256c-8.8 0-16-7.2-16-16V424c0-29.8 20.4-54.9 48-62V304.9c-6-.6-12.1-.9-18.3-.9H178.3c-6.2 0-12.3 .3-18.3 .9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7V311.2zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
                        <p>Evde Muayene</p>
                    </div>
                    <div className='swiperContent2'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 576 512"><path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32V448c0 35.3 28.7 64 64 64H448.5c35.5 0 64.2-28.8 64-64.3l-.7-160.2h32zM256 208c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H320v48c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V320H208c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h48V208z"/></svg>
                        <p>Evde Sağlık</p>
                    </div>
                    <div className='swiperContent3'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 576 512"><path d="M224 24V80H168c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h56v56c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V176h56c13.3 0 24-10.7 24-24V104c0-13.3-10.7-24-24-24H320V24c0-13.3-10.7-24-24-24H248c-13.3 0-24 10.7-24 24zM559.7 392.2c17.8-13.1 21.6-38.1 8.5-55.9s-38.1-21.6-55.9-8.5L392.6 416H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h16 64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288 272 193.7c-29.1 0-57.3 9.9-80 28L68.8 384H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H192 352.5c29 0 57.3-9.3 80.7-26.5l126.6-93.3zm-367-8.2l.9 0 0 0c-.3 0-.6 0-.9 0z"/></svg>
                        <p>Evde Bakım</p>
                    </div>
                    <div className='swiperContent4'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zm96 152c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H288v48c0 8.8-7.2 16-16 16H240c-8.8 0-16-7.2-16-16V320H176c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h48V208z"/></svg>
                        <p>Evde Sağlık Kontrol</p>
                    </div>
                </div>
            </Swiper>
            <div className="backgraoundDark"></div>

        </div >
    )
}

export default SwiperComponent