import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../app/globals.css"
import 'swiper/css/navigation';
import NavBar from '../app/Components/NavBar/NavBar';
import "../pages/index.css"
import Footer from '@/app/Components/Footer/Footer';
import 'swiper/css';
import BackToTopButton from '../app/Components/BackToTopButton/BackToTopButton';
import SwiperComponent from '../app/Components/SwiperComponent/SwiperComponent';
import Communication from '@/app/Components/commCart/Communication';
import { url } from 'inspector';
import Head from 'next/head'


const services = [
  {
    name: "Glutatyon Tedavisi",
    svg: (<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M441 7l32 32 32 32c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15L417.9 128l55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-72-72L295 73c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l55 55L422.1 56 407 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0zM210.3 155.7l61.1-61.1c.3 .3 .6 .7 1 1l16 16 56 56 56 56 16 16c.3 .3 .6 .6 1 1l-191 191c-10.5 10.5-24.7 16.4-39.6 16.4H97.9L41 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l57-57V325.3c0-14.9 5.9-29.1 16.4-39.6l43.3-43.3 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57 41.4-41.4 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57z" /></svg>),
    text: "Glutatyon, doğal bir antioksidan olarak hücreleri korur ve detoksifikasyon süreçlerine destek olur. Sağlığınız için güçlü bir kalkan sağlayan bu önemli molekülü keşfedin."

  },
  {
    name: "İlaç Yönetimi",
    svg: (<svg className='serviceSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path d="M 20 2.03125 C 19.449219 2.03125 19 2.480469 19 3.03125 L 19 7.8125 L 13.71875 2.53125 C 13.328125 2.140625 12.671875 2.140625 12.28125 2.53125 L 0.5625 14.28125 C 0.171875 14.671875 0.171875 15.296875 0.5625 15.6875 C 0.953125 16.078125 1.578125 16.078125 1.96875 15.6875 L 13 4.65625 L 24.0625 15.71875 C 24.257813 15.914063 24.523438 16.03125 24.78125 16.03125 C 25.039063 16.03125 25.273438 15.914063 25.46875 15.71875 C 25.859375 15.328125 25.859375 14.703125 25.46875 14.3125 L 22 10.84375 L 22 3.03125 C 22 2.480469 21.550781 2.03125 21 2.03125 Z M 13 6.5 L 2 17.5 L 2 23 C 2 24.65625 3.34375 26 5 26 L 21 26 C 22.65625 26 24 24.65625 24 23 L 24 17.5 Z M 11 16 L 15 16 C 15.550781 16 16 16.449219 16 17 L 16 23 C 16 23.550781 15.550781 24 15 24 L 11 24 C 10.449219 24 10 23.550781 10 23 L 10 17 C 10 16.449219 10.449219 16 11 16 Z" /></svg>),
    text: "İlaçların doğru dozlarda yönetilmesi ve takibi."

  },
  {
    name: "Yara Bakımı ve Pansuman",
    svg: (<svg className='serviceSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path d="M 20 2.03125 C 19.449219 2.03125 19 2.480469 19 3.03125 L 19 7.8125 L 13.71875 2.53125 C 13.328125 2.140625 12.671875 2.140625 12.28125 2.53125 L 0.5625 14.28125 C 0.171875 14.671875 0.171875 15.296875 0.5625 15.6875 C 0.953125 16.078125 1.578125 16.078125 1.96875 15.6875 L 13 4.65625 L 24.0625 15.71875 C 24.257813 15.914063 24.523438 16.03125 24.78125 16.03125 C 25.039063 16.03125 25.273438 15.914063 25.46875 15.71875 C 25.859375 15.328125 25.859375 14.703125 25.46875 14.3125 L 22 10.84375 L 22 3.03125 C 22 2.480469 21.550781 2.03125 21 2.03125 Z M 13 6.5 L 2 17.5 L 2 23 C 2 24.65625 3.34375 26 5 26 L 21 26 C 22.65625 26 24 24.65625 24 23 L 24 17.5 Z M 11 16 L 15 16 C 15.550781 16 16 16.449219 16 17 L 16 23 C 16 23.550781 15.550781 24 15 24 L 11 24 C 10.449219 24 10 23.550781 10 23 L 10 17 C 10 16.449219 10.449219 16 11 16 Z" /></svg>),
    text: "Yara temizliği ve pansuman yapılması."
  },
  {
    name: "Enjeksiyonlar",
    svg: (<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M441 7l32 32 32 32c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15L417.9 128l55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-72-72L295 73c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l55 55L422.1 56 407 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0zM210.3 155.7l61.1-61.1c.3 .3 .6 .7 1 1l16 16 56 56 56 56 16 16c.3 .3 .6 .6 1 1l-191 191c-10.5 10.5-24.7 16.4-39.6 16.4H97.9L41 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l57-57V325.3c0-14.9 5.9-29.1 16.4-39.6l43.3-43.3 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57 41.4-41.4 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57z" /></svg>),
    text: "İntramüsküler veya subkutan enjeksiyonların uygulanması."
  },
  {
    name: "Serum Uygulanması",
    svg: (<svg className='serviceSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path d="M 20 2.03125 C 19.449219 2.03125 19 2.480469 19 3.03125 L 19 7.8125 L 13.71875 2.53125 C 13.328125 2.140625 12.671875 2.140625 12.28125 2.53125 L 0.5625 14.28125 C 0.171875 14.671875 0.171875 15.296875 0.5625 15.6875 C 0.953125 16.078125 1.578125 16.078125 1.96875 15.6875 L 13 4.65625 L 24.0625 15.71875 C 24.257813 15.914063 24.523438 16.03125 24.78125 16.03125 C 25.039063 16.03125 25.273438 15.914063 25.46875 15.71875 C 25.859375 15.328125 25.859375 14.703125 25.46875 14.3125 L 22 10.84375 L 22 3.03125 C 22 2.480469 21.550781 2.03125 21 2.03125 Z M 13 6.5 L 2 17.5 L 2 23 C 2 24.65625 3.34375 26 5 26 L 21 26 C 22.65625 26 24 24.65625 24 23 L 24 17.5 Z M 11 16 L 15 16 C 15.550781 16 16 16.449219 16 17 L 16 23 C 16 23.550781 15.550781 24 15 24 L 11 24 C 10.449219 24 10 23.550781 10 23 L 10 17 C 10 16.449219 10.449219 16 11 16 Z" /></svg>),
    text: "İntravenöz yolla sıvı ve ilaç tedavisinin evde uygulanması."
  },
  {
    name: "İdrar/Dışkı Örneği Analizi",
    svg: (<svg className='serviceSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path d="M 20 2.03125 C 19.449219 2.03125 19 2.480469 19 3.03125 L 19 7.8125 L 13.71875 2.53125 C 13.328125 2.140625 12.671875 2.140625 12.28125 2.53125 L 0.5625 14.28125 C 0.171875 14.671875 0.171875 15.296875 0.5625 15.6875 C 0.953125 16.078125 1.578125 16.078125 1.96875 15.6875 L 13 4.65625 L 24.0625 15.71875 C 24.257813 15.914063 24.523438 16.03125 24.78125 16.03125 C 25.039063 16.03125 25.273438 15.914063 25.46875 15.71875 C 25.859375 15.328125 25.859375 14.703125 25.46875 14.3125 L 22 10.84375 L 22 3.03125 C 22 2.480469 21.550781 2.03125 21 2.03125 Z M 13 6.5 L 2 17.5 L 2 23 C 2 24.65625 3.34375 26 5 26 L 21 26 C 22.65625 26 24 24.65625 24 23 L 24 17.5 Z M 11 16 L 15 16 C 15.550781 16 16 16.449219 16 17 L 16 23 C 16 23.550781 15.550781 24 15 24 L 11 24 C 10.449219 24 10 23.550781 10 23 L 10 17 C 10 16.449219 10.449219 16 11 16 Z" /></svg>),
    text: "Örneklerin alınması ve analiz edilmesi."
  },
  {
    name: "Fizyoterapi",
    svg: (<svg className='serviceSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path d="M 20 2.03125 C 19.449219 2.03125 19 2.480469 19 3.03125 L 19 7.8125 L 13.71875 2.53125 C 13.328125 2.140625 12.671875 2.140625 12.28125 2.53125 L 0.5625 14.28125 C 0.171875 14.671875 0.171875 15.296875 0.5625 15.6875 C 0.953125 16.078125 1.578125 16.078125 1.96875 15.6875 L 13 4.65625 L 24.0625 15.71875 C 24.257813 15.914063 24.523438 16.03125 24.78125 16.03125 C 25.039063 16.03125 25.273438 15.914063 25.46875 15.71875 C 25.859375 15.328125 25.859375 14.703125 25.46875 14.3125 L 22 10.84375 L 22 3.03125 C 22 2.480469 21.550781 2.03125 21 2.03125 Z M 13 6.5 L 2 17.5 L 2 23 C 2 24.65625 3.34375 26 5 26 L 21 26 C 22.65625 26 24 24.65625 24 23 L 24 17.5 Z M 11 16 L 15 16 C 15.550781 16 16 16.449219 16 17 L 16 23 C 16 23.550781 15.550781 24 15 24 L 11 24 C 10.449219 24 10 23.550781 10 23 L 10 17 C 10 16.449219 10.449219 16 11 16 Z" /></svg>),
    text: "Fizyoterapi uygulamaları ve egzersiz programlarının düzenlenmesi."
  },
  {
    name: "Tıbbi Cihaz Yönetimi",
    svg: (<svg className='serviceSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path d="M 20 2.03125 C 19.449219 2.03125 19 2.480469 19 3.03125 L 19 7.8125 L 13.71875 2.53125 C 13.328125 2.140625 12.671875 2.140625 12.28125 2.53125 L 0.5625 14.28125 C 0.171875 14.671875 0.171875 15.296875 0.5625 15.6875 C 0.953125 16.078125 1.578125 16.078125 1.96875 15.6875 L 13 4.65625 L 24.0625 15.71875 C 24.257813 15.914063 24.523438 16.03125 24.78125 16.03125 C 25.039063 16.03125 25.273438 15.914063 25.46875 15.71875 C 25.859375 15.328125 25.859375 14.703125 25.46875 14.3125 L 22 10.84375 L 22 3.03125 C 22 2.480469 21.550781 2.03125 21 2.03125 Z M 13 6.5 L 2 17.5 L 2 23 C 2 24.65625 3.34375 26 5 26 L 21 26 C 22.65625 26 24 24.65625 24 23 L 24 17.5 Z M 11 16 L 15 16 C 15.550781 16 16 16.449219 16 17 L 16 23 C 16 23.550781 15.550781 24 15 24 L 11 24 C 10.449219 24 10 23.550781 10 23 L 10 17 C 10 16.449219 10.449219 16 11 16 Z" /></svg>),
    text: "Evde kullanılan tıbbi cihazların kurulumu ve yönetimi."
  },
  {
    name: "Kronik Hastalık Yönetimi",
    svg: (<svg className='serviceSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path d="M 20 2.03125 C 19.449219 2.03125 19 2.480469 19 3.03125 L 19 7.8125 L 13.71875 2.53125 C 13.328125 2.140625 12.671875 2.140625 12.28125 2.53125 L 0.5625 14.28125 C 0.171875 14.671875 0.171875 15.296875 0.5625 15.6875 C 0.953125 16.078125 1.578125 16.078125 1.96875 15.6875 L 13 4.65625 L 24.0625 15.71875 C 24.257813 15.914063 24.523438 16.03125 24.78125 16.03125 C 25.039063 16.03125 25.273438 15.914063 25.46875 15.71875 C 25.859375 15.328125 25.859375 14.703125 25.46875 14.3125 L 22 10.84375 L 22 3.03125 C 22 2.480469 21.550781 2.03125 21 2.03125 Z M 13 6.5 L 2 17.5 L 2 23 C 2 24.65625 3.34375 26 5 26 L 21 26 C 22.65625 26 24 24.65625 24 23 L 24 17.5 Z M 11 16 L 15 16 C 15.550781 16 16 16.449219 16 17 L 16 23 C 16 23.550781 15.550781 24 15 24 L 11 24 C 10.449219 24 10 23.550781 10 23 L 10 17 C 10 16.449219 10.449219 16 11 16 Z" /></svg>),
    text: "Kronik hastalıkların takibi ve yönetimi."
  },
  {
    name: "Sağlık İzleme ve Raporlama",
    svg: (<svg className='serviceSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path d="M 20 2.03125 C 19.449219 2.03125 19 2.480469 19 3.03125 L 19 7.8125 L 13.71875 2.53125 C 13.328125 2.140625 12.671875 2.140625 12.28125 2.53125 L 0.5625 14.28125 C 0.171875 14.671875 0.171875 15.296875 0.5625 15.6875 C 0.953125 16.078125 1.578125 16.078125 1.96875 15.6875 L 13 4.65625 L 24.0625 15.71875 C 24.257813 15.914063 24.523438 16.03125 24.78125 16.03125 C 25.039063 16.03125 25.273438 15.914063 25.46875 15.71875 C 25.859375 15.328125 25.859375 14.703125 25.46875 14.3125 L 22 10.84375 L 22 3.03125 C 22 2.480469 21.550781 2.03125 21 2.03125 Z M 13 6.5 L 2 17.5 L 2 23 C 2 24.65625 3.34375 26 5 26 L 21 26 C 22.65625 26 24 24.65625 24 23 L 24 17.5 Z M 11 16 L 15 16 C 15.550781 16 16 16.449219 16 17 L 16 23 C 16 23.550781 15.550781 24 15 24 L 11 24 C 10.449219 24 10 23.550781 10 23 L 10 17 C 10 16.449219 10.449219 16 11 16 Z" /></svg>),
    text: "Hastanın sağlık durumunun takibi ve düzenli raporlama."
  },
  {
    name: "İlaç Eğitimi",
    svg: (<svg className='serviceSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path d="M 20 2.03125 C 19.449219 2.03125 19 2.480469 19 3.03125 L 19 7.8125 L 13.71875 2.53125 C 13.328125 2.140625 12.671875 2.140625 12.28125 2.53125 L 0.5625 14.28125 C 0.171875 14.671875 0.171875 15.296875 0.5625 15.6875 C 0.953125 16.078125 1.578125 16.078125 1.96875 15.6875 L 13 4.65625 L 24.0625 15.71875 C 24.257813 15.914063 24.523438 16.03125 24.78125 16.03125 C 25.039063 16.03125 25.273438 15.914063 25.46875 15.71875 C 25.859375 15.328125 25.859375 14.703125 25.46875 14.3125 L 22 10.84375 L 22 3.03125 C 22 2.480469 21.550781 2.03125 21 2.03125 Z M 13 6.5 L 2 17.5 L 2 23 C 2 24.65625 3.34375 26 5 26 L 21 26 C 22.65625 26 24 24.65625 24 23 L 24 17.5 Z M 11 16 L 15 16 C 15.550781 16 16 16.449219 16 17 L 16 23 C 16 23.550781 15.550781 24 15 24 L 11 24 C 10.449219 24 10 23.550781 10 23 L 10 17 C 10 16.449219 10.449219 16 11 16 Z" /></svg>),
    text: "Hasta veya bakıcılara ilaçların doğru kullanımı konusunda eğitim verilmesi."
  },
  {
    name: "Sağlık Danışmanlığı",
    svg: (<svg className='serviceSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path d="M 20 2.03125 C 19.449219 2.03125 19 2.480469 19 3.03125 L 19 7.8125 L 13.71875 2.53125 C 13.328125 2.140625 12.671875 2.140625 12.28125 2.53125 L 0.5625 14.28125 C 0.171875 14.671875 0.171875 15.296875 0.5625 15.6875 C 0.953125 16.078125 1.578125 16.078125 1.96875 15.6875 L 13 4.65625 L 24.0625 15.71875 C 24.257813 15.914063 24.523438 16.03125 24.78125 16.03125 C 25.039063 16.03125 25.273438 15.914063 25.46875 15.71875 C 25.859375 15.328125 25.859375 14.703125 25.46875 14.3125 L 22 10.84375 L 22 3.03125 C 22 2.480469 21.550781 2.03125 21 2.03125 Z M 13 6.5 L 2 17.5 L 2 23 C 2 24.65625 3.34375 26 5 26 L 21 26 C 22.65625 26 24 24.65625 24 23 L 24 17.5 Z M 11 16 L 15 16 C 15.550781 16 16 16.449219 16 17 L 16 23 C 16 23.550781 15.550781 24 15 24 L 11 24 C 10.449219 24 10 23.550781 10 23 L 10 17 C 10 16.449219 10.449219 16 11 16 Z" /></svg>),
    text: "Evdeki hasta veya bakıcılara sağlık durumu hakkında danışmanlık yapılması."
  },
  {
    name: "Küçük Cerrahi Müdaleler",
    svg: (<svg className='serviceSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path d="M 20 2.03125 C 19.449219 2.03125 19 2.480469 19 3.03125 L 19 7.8125 L 13.71875 2.53125 C 13.328125 2.140625 12.671875 2.140625 12.28125 2.53125 L 0.5625 14.28125 C 0.171875 14.671875 0.171875 15.296875 0.5625 15.6875 C 0.953125 16.078125 1.578125 16.078125 1.96875 15.6875 L 13 4.65625 L 24.0625 15.71875 C 24.257813 15.914063 24.523438 16.03125 24.78125 16.03125 C 25.039063 16.03125 25.273438 15.914063 25.46875 15.71875 C 25.859375 15.328125 25.859375 14.703125 25.46875 14.3125 L 22 10.84375 L 22 3.03125 C 22 2.480469 21.550781 2.03125 21 2.03125 Z M 13 6.5 L 2 17.5 L 2 23 C 2 24.65625 3.34375 26 5 26 L 21 26 C 22.65625 26 24 24.65625 24 23 L 24 17.5 Z M 11 16 L 15 16 C 15.550781 16 16 16.449219 16 17 L 16 23 C 16 23.550781 15.550781 24 15 24 L 11 24 C 10.449219 24 10 23.550781 10 23 L 10 17 C 10 16.449219 10.449219 16 11 16 Z" /></svg>),
    text: "Küçük cerrahi prosedürlerin evde yapılması veya yönlendirilmesi."
  },
  {
    name: "Acil Yardım Uygulamaları",
    svg: (<svg className='serviceSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path d="M 20 2.03125 C 19.449219 2.03125 19 2.480469 19 3.03125 L 19 7.8125 L 13.71875 2.53125 C 13.328125 2.140625 12.671875 2.140625 12.28125 2.53125 L 0.5625 14.28125 C 0.171875 14.671875 0.171875 15.296875 0.5625 15.6875 C 0.953125 16.078125 1.578125 16.078125 1.96875 15.6875 L 13 4.65625 L 24.0625 15.71875 C 24.257813 15.914063 24.523438 16.03125 24.78125 16.03125 C 25.039063 16.03125 25.273438 15.914063 25.46875 15.71875 C 25.859375 15.328125 25.859375 14.703125 25.46875 14.3125 L 22 10.84375 L 22 3.03125 C 22 2.480469 21.550781 2.03125 21 2.03125 Z M 13 6.5 L 2 17.5 L 2 23 C 2 24.65625 3.34375 26 5 26 L 21 26 C 22.65625 26 24 24.65625 24 23 L 24 17.5 Z M 11 16 L 15 16 C 15.550781 16 16 16.449219 16 17 L 16 23 C 16 23.550781 15.550781 24 15 24 L 11 24 C 10.449219 24 10 23.550781 10 23 L 10 17 C 10 16.449219 10.449219 16 11 16 Z" /></svg>),
    text: "Acil durumlarda gerekli ilk yardım müdahalesinin yapılması."
  },
  {
    name: "Acil Durum Müdahalesi",
    svg: (<svg className='serviceSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path d="M 20 2.03125 C 19.449219 2.03125 19 2.480469 19 3.03125 L 19 7.8125 L 13.71875 2.53125 C 13.328125 2.140625 12.671875 2.140625 12.28125 2.53125 L 0.5625 14.28125 C 0.171875 14.671875 0.171875 15.296875 0.5625 15.6875 C 0.953125 16.078125 1.578125 16.078125 1.96875 15.6875 L 13 4.65625 L 24.0625 15.71875 C 24.257813 15.914063 24.523438 16.03125 24.78125 16.03125 C 25.039063 16.03125 25.273438 15.914063 25.46875 15.71875 C 25.859375 15.328125 25.859375 14.703125 25.46875 14.3125 L 22 10.84375 L 22 3.03125 C 22 2.480469 21.550781 2.03125 21 2.03125 Z M 13 6.5 L 2 17.5 L 2 23 C 2 24.65625 3.34375 26 5 26 L 21 26 C 22.65625 26 24 24.65625 24 23 L 24 17.5 Z M 11 16 L 15 16 C 15.550781 16 16 16.449219 16 17 L 16 23 C 16 23.550781 15.550781 24 15 24 L 11 24 C 10.449219 24 10 23.550781 10 23 L 10 17 C 10 16.449219 10.449219 16 11 16 Z" /></svg>),
    text: "Evde acil durumların yönetimi ve gerekli müdahalenin yapılması."
  },
]
const EnjeksiyonSvg = () => {

}
export default function Home() {

  return (


    <div className='mainPageContainer'>
      <Head>


        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="evde sağlık hizmeti, evde bakım telefon, evde sağlık telefon, evde saglik hizmeti, ataşehir , ataşehir sağlık hizmeti, evde saglik, yaşlılara evde sağlık hizmeti, evde bakım sağlık hizmetleri, glutatyon, glutatyon fiyat, glutatyon takviyesi, doping serum, prp uygulaması, prp tedavisi"></meta>

        <title>AcmedCare | Evde Sağlık Hizmeti</title>
        <meta name="description" content="İstanbul Ataşehir'de uzman ekip tarafından sunulan evde sağlık hizmetiyle sağlığınızı güvence altına alın." />
      </Head>






      {/* <Communication /> */}
      <NavBar />
      <BackToTopButton />
      <SwiperComponent />
      <div className='globalContentContainer'>
        <div className="informationBox">
          <figure className='figure'>
            <img src="/images/photomain.jpg" alt="Ataşehir Evde Sağlık" />
          </figure>
          <section className='section'>
            <header><h1>Evde Sağlık Hizmeti</h1>
              <h2>Evde Sağlık Hizmeti Nedir ?</h2>
            </header>
            <article>
              <p> <strong>Evde sağlık hizmeti</strong>, sağlık profesyonellerinin hasta ve hasta yakınlarının evinde sağlık hizmeti sunmasıdır. Bu hizmet, hasta konforunu ve bakım kalitesini artırmayı hedeflerken, hastanın hastanede yatması veya klinik ziyaretleri gerektiren durumları azaltmayı amaçlar.</p>
              <section className='middleText'>
                <strong>Evde sağlık hizmeti</strong>, bir dizi sağlık hizmeti sunabilir, örneğin:

                <p> <b>1. Tıbbi Bakım:</b>  Evde sağlık hizmeti, yaraların bakımı, ilaç yönetimi, enjeksiyonlar, tansiyon ölçümü, kan testleri gibi tıbbi işlemleri içerebilir.</p>

                <p><b>2. Rehabilitasyon:</b>  Evde sağlık hizmeti, fizyoterapi, konuşma terapisi, iş terapisi gibi rehabilitasyon hizmetlerini evde sunabilir.</p>

                <p><b>3. Hasta Eğitimi:</b>  Evde sağlık hizmeti sağlayıcıları, hastalara ve hasta bakım verenlerine hastalık yönetimi, ilaç kullanımı, beslenme konularında eğitim sağlayabilir.</p>

                <p><b>4. Psikolojik Destek:</b>  Evde sağlık hizmeti, psikolojik destek hizmetleri sunarak hastaların ve hasta yakınlarının duygusal ve ruhsal ihtiyaçlarına da yanıt verebilir.</p>
              </section>
              <p> <strong>Evde sağlık hizmeti</strong>, yaşlılar, kronik hastalar, sürekli bakıma ihtiyaç duyanlar, rehabilitasyon sürecinde olanlar veya evde bakımı tercih eden herhangi bir kişi için faydalı olabilir. Bu hizmet, hastaların kendi evlerinde kalırken ihtiyaç duydukları sağlık hizmetlerine erişimlerini kolaylaştırır ve hastaneye gitme zorunluluğunu azaltır.</p>
              <p>Ayrıca evde sağlık hizmeti, hasta konforunu ön planda tutarken aynı zamanda hasta ve hasta yakınları arasında güçlü bir iletişim ve güven ilişkisi oluşturmayı amaçlar. Bu sayede hastalar, tedavi süreciyle ilgili daha iyi bilgilendirilir ve kendi sağlık durumlarına aktif bir şekilde katılım sağlarlar.</p>



            </article>



          </section>

        </div>
        <div className="informationBox2">
          <h2>Ataşehir | Evde Sağlık Hizmeti</h2>
          <p>
            <strong>Hoş Geldiniz! AcmedCare olarak, sizlere evinizde kaliteli sağlık hizmetleri sunuyoruz.
              Yaş fark etmeksizin, her bireyin sağlığı bizim için önemlidir ve özel bakım ve tedavi imkanları sağlamak için buradayız.
              Ataşehir ve çevre bölgelerde yerel olarak faaliyet gösteriyor ve hizmetlerimizi geniş bir kesime sunuyoruz.
            </strong>
            Sağlık hizmetlerimiz, hastalarımızın konforlu ve güvenli bir ortamda kaliteli bakım almalarını sağlar.
          </p>

          <p>
            Deneyimli sağlık uzmanlarımız, hasta bakımında uzmanlaşmış olup, güvenilir ve özenli bir şekilde tedavi süreçlerini yönetir.
            Size özel ihtiyaçlarınızı dikkate alarak, evde sağlık hizmetlerini uygun bir plan dahilinde sunuyoruz.
          </p>

          <p>
            Sağlık hizmetlerimiz, yaşam kalitenizi artırmak ve sağlıklı bir yaşam sürmenize yardımcı olmak için özenle hazırlanmıştır.
            Medikal tedaviler, ilaç takibi, tıbbi kontroller, sağlık danışmanlığı ve fizyoterapi gibi birçok hizmet seçeneği sunuyoruz.
            Sağlık ve refahınız bizim önceliğimizdir. Siz ve sevdikleriniz için en iyi evde sağlık hizmetini almak istiyorsanız bize ulaşın!
            <strong> AcmedCare | Telefon: 0534 872 57 35</strong>
          </p>

        </div>


        <div className='servicesContainer' id='servicesSection'>
          <h2>
            Evde Sağlık Hizmetlerimiz
          </h2>
          <div className='services'>
            {
              services.map((service, index) => (
                <div className='servicesItem' key={index}>
                  <div className='servicesHeader'>
                    {service.svg}
                    <p>{service.name}</p>
                  </div>
                  <div className='additional-content'>
                    <p>{service.text}</p>
                  </div>
                </div>
              ))
            }

          </div>
        </div>

        <div className="otherServicesHeader">Diğer Uygulamalarımız</div>

        <div className="informationBox3">
          <figure className='figure'>
            <img src="/images/photomain2.jpg" alt="PRP Uygulaması" />
          </figure>
          <section className='section'>
            <header><h2>PRP Tedavisi</h2>
              <h3>PRP Tedavisi Nedir ?</h3>
            </header>
            <article>
              <p> PRP (Platelet-Rich Plasma), Türkçe adıyla "Trombosit Zengin Plazma", medikal ve estetik alanda kullanılan bir tedavi yöntemidir. Bu yöntem, hastanın kendi kanından elde edilen plazma içeriğindeki trombosit miktarının arttırılarak kullanılmasına dayanır.</p>
              <section className='middleText'>
                <h3>PRP Uygulaması Nasıl Gerçekleşir ?</h3>
                PRP uygulaması şu adımlarla gerçekleştirilir:

                <p><b>1. Kan Örneği Alma: </b> İlk adım, hastadan bir kan örneği alınmasıdır. Bu işlem, diğer rutin kan testlerinde kullanılan bir iğneyle yapılan basit bir kan alma işlemidir. </p>
                <p><b>2. Kanın Santrifüj Edilmesi: </b>Alınan kan örneği, özel bir santrifüj cihazında döndürülerek trombositler, plazmadan ayrıştırılır ve yoğunlaştırılır. Bu şekilde elde edilen trombosit zengin plazma, vücutta iyileşme süreçlerini desteklemek için kullanılır.</p>
                <p><b>3. Uygulama: </b> Elde edilen PRP, genellikle enjeksiyon yoluyla veya cilt yüzeyine uygulanarak kullanılır. Bu işlem, yaraların ve hasarlı dokuların iyileşme sürecini hızlandırmaya ve yeni hücre oluşumunu teşvik etmeye yardımcı olabilir.</p>
                <br />

                <h3>PRP Uygulaması Hangi Alanlarda Kullanılır ?</h3>
                PRP tedavisi, çeşitli alanlarda kullanılmaktadır:

                <p><b>Cilt Gençleştirme: </b> PRP, cildin yeniden yapılanmasını teşvik ederek kollajen üretimini artırabilir ve ciltte sıkılık ve elastikiyet kazandırabilir.</p>
                <p><b>Saç Dökülmesi Tedavisi: </b>PRP, saç köklerinin güçlenmesine ve saç büyümesinin teşvik edilmesine yardımcı olabilir.</p>
                <p><b>Eklem Ağrıları: </b> PRP, eklem hasarlarının onarımını destekleyerek ve iltihaplanmayı azaltarak eklem ağrılarına yardımcı olabilir.</p>
                <p><b>Cerrahi Sonrası İyileşme: </b> PRP, cerrahi operasyon sonrasında iyileşme sürecini hızlandırmak ve doku onarımını teşvik etmek için kullanılabilir.</p>

              </section>
            </article>
          </section>

        </div>

        <div className="aboutUsText" id='aboutUs'>
          <h2>Hakkımızda</h2>
          <p>
            <strong>
              AcmedCare, Ataşehir genelinde evde sağlık hizmetleri sunan bir doktor grubudur.
              Ekibimiz, uzman doktorlar ve deneyimli sağlık personeliyle birlikte çalışarak hasta odaklı ve profesyonel bir hizmet sunmayı hedeflemektedir.
            </strong>
          </p>

          <p>
            Evde sağlık hizmeti alanında uzun yıllardır faaliyet gösteren AcmedCare, hasta konforunu ve iyileşme sürecini en üst düzeyde tutmayı amaçlamaktadır.
            Ataşehir ve çevresinde yaşayan hastalarımıza, kapsamlı bir sağlık hizmeti sunarak, onların
            sağlıklı bir şekilde evde kalabilmelerine ve rahat bir yaşam sürmelerine yardımcı olmaktayız.
          </p>

          <p>
            Hizmetlerimiz arasında; evde doktor muayenesi, tıbbi bakım, ilaç uygulaması, enjeksiyon, yara bakımı, kan ve tahlil örneklerinin alınması,
            evde fizyoterapi ve rehabilitasyon gibi birçok alan bulunmaktadır. Tüm hizmetlerimizi uzman ekip üyelerimizle birlikte, hasta odaklı ve güvenli bir şekilde sunmaktayız.
          </p>

          <p>
            AcmedCare olarak, hastalarımızın konforunu ve sağlığını ön planda tutan, güvenilir ve nitelikli bir sağlık hizmeti sunmak için çalışmaktayız.
            Siz de Ataşehir ve çevresinde evde sağlık hizmeti almak isteyen hastalarımız arasına katılabilirsiniz.
            Bize ulaşarak detaylı bilgi alabilir veya randevu oluşturabilirsiniz.
          </p>

          <p>
            <strong> "AcmedCare, evde sağlık hizmetinde güvenilir bir adrestir. Sağlığınızı bizimle güvenle paylaşabilirsiniz." </strong>
          </p>

        </div>

      </div>
      {/* <div className="main-div">
        Hover over me
        <div className="additional-content">
          Additional content
        </div>
      </div> */}
      {/* <Swiper
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
            
          </Swiper> */}
      {/* <div style={{ marginTop: "40px" }}>
        deneme
      </div>
      <div style={{ marginTop: "40px" }}>
        deneme
      </div>
      <div style={{ marginTop: "40px" }}>
        deneme
      </div>
      <div style={{ marginTop: "40px" }}>
        deneme
      </div>
      <div style={{ marginTop: "40px" }}>
        deneme
      </div> */}

      <footer>
        <Footer></Footer>
      </footer>

    </div >
  )
}
