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
    svg: (<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M297.4 9.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0zm-96 144l-34.8 34.8c-12.9 12.9-21.9 29.2-25.8 47.1L116.8 342.9c-1.3 5.9-4.3 11.4-8.6 15.7L9.4 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l98.8-98.8c4.3-4.3 9.7-7.3 15.7-8.6l107.6-23.9c17.8-4 34.1-12.9 47.1-25.8l34.7-34.7c0 0 .1-.1 .1-.1s.1-.1 .1-.1l74.6-74.6-45.3-45.3L336 242.7 269.3 176l52.1-52.1L276.1 78.6l-74.7 74.7zM224 221.3L290.7 288l-12.2 12.2c-4.3 4.3-9.7 7.3-15.7 8.6l-76.7 17 17-76.7c1.3-5.9 4.3-11.4 8.6-15.7L224 221.3z"/></svg>),
    text:"Glutatyon, doğal bir antioksidan olarak hücreleri korur ve detoksifikasyon süreçlerine destek olur. Sağlığınız için güçlü bir kalkan sağlayan bu önemli molekülü keşfedin."

  },
  {
    name: "İlaç Yönetimi",
    svg: (<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 576 512"><path d="M112 96c-26.5 0-48 21.5-48 48V256h96V144c0-26.5-21.5-48-48-48zM0 144C0 82.1 50.1 32 112 32s112 50.1 112 112V368c0 61.9-50.1 112-112 112S0 429.9 0 368V144zM554.9 399.4c-7.1 12.3-23.7 13.1-33.8 3.1L333.5 214.9c-10-10-9.3-26.7 3.1-33.8C360 167.7 387.1 160 416 160c88.4 0 160 71.6 160 160c0 28.9-7.7 56-21.1 79.4zm-59.5 59.5C472 472.3 444.9 480 416 480c-88.4 0-160-71.6-160-160c0-28.9 7.7-56 21.1-79.4c7.1-12.3 23.7-13.1 33.8-3.1L498.5 425.1c10 10 9.3 26.7-3.1 33.8z"/></svg>),
    text:"İlaçların doğru dozlarda yönetilmesi ve takibi."

  },
  {
    name: "Yara Bakımı ve Pansuman",
    svg: (<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 640 512"><path d="M480 416h96c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H480V416zM448 96H192V416H448V96zM64 96C28.7 96 0 124.7 0 160V352c0 35.3 28.7 64 64 64h96V96H64zM248 208a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM248 304a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>),
    text:"Yara temizliği ve pansuman yapılması."
  },
  {
    name: "Enjeksiyonlar",
    svg: (<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M441 7l32 32 32 32c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15L417.9 128l55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-72-72L295 73c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l55 55L422.1 56 407 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0zM210.3 155.7l61.1-61.1c.3 .3 .6 .7 1 1l16 16 56 56 56 56 16 16c.3 .3 .6 .6 1 1l-191 191c-10.5 10.5-24.7 16.4-39.6 16.4H97.9L41 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l57-57V325.3c0-14.9 5.9-29.1 16.4-39.6l43.3-43.3 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57 41.4-41.4 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57z"/></svg>),
    text:"İntramüsküler veya subkutan enjeksiyonların uygulanması."
  },
  {
    name: "Serum Uygulanması",
    svg: (<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M441 7l32 32 32 32c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15L417.9 128l55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-72-72L295 73c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l55 55L422.1 56 407 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0zM210.3 155.7l61.1-61.1c.3 .3 .6 .7 1 1l16 16 56 56 56 56 16 16c.3 .3 .6 .6 1 1l-191 191c-10.5 10.5-24.7 16.4-39.6 16.4H97.9L41 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l57-57V325.3c0-14.9 5.9-29.1 16.4-39.6l43.3-43.3 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57 41.4-41.4 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57z"/></svg>),
    text:"İntravenöz yolla sıvı ve ilaç tedavisinin evde uygulanması."
  },
  {
    name: "İdrar/Dışkı Örneği Analizi",
    svg: (<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>),
    text:"Örneklerin alınması ve analiz edilmesi."
  },
  {
    name: "Fizyoterapi",
    svg: (<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 576 512"><path d="M224 24V80H168c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h56v56c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V176h56c13.3 0 24-10.7 24-24V104c0-13.3-10.7-24-24-24H320V24c0-13.3-10.7-24-24-24H248c-13.3 0-24 10.7-24 24zM559.7 392.2c17.8-13.1 21.6-38.1 8.5-55.9s-38.1-21.6-55.9-8.5L392.6 416H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h16 64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288 272 193.7c-29.1 0-57.3 9.9-80 28L68.8 384H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H192 352.5c29 0 57.3-9.3 80.7-26.5l126.6-93.3zm-367-8.2l.9 0 0 0c-.3 0-.6 0-.9 0z"/></svg>),
    text:"Fizyoterapi uygulamaları ve egzersiz programlarının düzenlenmesi."
  },
  {
    name: "Tıbbi Cihaz Yönetimi",
    svg: (<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 640 512"><path d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM288 160c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H352v48c0 8.8-7.2 16-16 16H304c-8.8 0-16-7.2-16-16V272H240c-8.8 0-16-7.2-16-16V224c0-8.8 7.2-16 16-16h48V160z"/></svg>),
    text:"Evde kullanılan tıbbi cihazların kurulumu ve yönetimi."
  },
  {
    name: "Kronik Hastalık Yönetimi",
    svg: (<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 640 512"><path d="M192 0c13.3 0 24 10.7 24 24V37.5c0 35.6 43.1 53.5 68.3 28.3l9.5-9.5c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-9.5 9.5C293 124.9 310.9 168 346.5 168H360c13.3 0 24 10.7 24 24s-10.7 24-24 24H346.5c-35.6 0-53.5 43.1-28.3 68.3l9.5 9.5c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-9.5-9.5C259.1 293 216 310.9 216 346.5V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V346.5c0-35.6-43.1-53.5-68.3-28.3l-9.5 9.5c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l9.5-9.5C91 259.1 73.1 216 37.5 216H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H37.5c35.6 0 53.5-43.1 28.3-68.3l-9.5-9.5c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l9.5 9.5C124.9 91 168 73.1 168 37.5V24c0-13.3 10.7-24 24-24zm48 224a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm-48-64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm320 80c0 33 39.9 49.5 63.2 26.2c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6C574.5 312.1 591 352 624 352c8.8 0 16 7.2 16 16s-7.2 16-16 16c-33 0-49.5 39.9-26.2 63.2c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0C551.9 446.5 512 463 512 496c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-33-39.9-49.5-63.2-26.2c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6C417.5 423.9 401 384 368 384c-8.8 0-16-7.2-16-16s7.2-16 16-16c33 0 49.5-39.9 26.2-63.2c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0C440.1 289.5 480 273 480 240c0-8.8 7.2-16 16-16s16 7.2 16 16zm0 112a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>),
    text:"Kronik hastalıkların takibi ve yönetimi."
  },
  {
    name: "Sağlık İzleme ve Raporlama",
    svg: (<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M228.3 469.1L47.6 300.4c-4.2-3.9-8.2-8.1-11.9-12.4h87c22.6 0 43-13.6 51.7-34.5l10.5-25.2 49.3 109.5c3.8 8.5 12.1 14 21.4 14.1s17.8-5 22-13.3L320 253.7l1.7 3.4c9.5 19 28.9 31 50.1 31H476.3c-3.7 4.3-7.7 8.5-11.9 12.4L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9zM503.7 240h-132c-3 0-5.8-1.7-7.2-4.4l-23.2-46.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-41.4 82.8L205.9 158.2c-3.9-8.7-12.7-14.3-22.2-14.1s-18.1 5.9-21.8 14.8l-31.8 76.3c-1.2 3-4.2 4.9-7.4 4.9H16c-2.6 0-5 .4-7.3 1.1C3 225.2 0 208.2 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141C165 36.5 211.4 51.4 244 84l12 12 12-12c32.6-32.6 79-47.5 124.6-39.9C461.5 55.6 512 115.2 512 185.1v5.8c0 16.9-2.8 33.5-8.3 49.1z"/></svg>),
    text:"Hastanın sağlık durumunun takibi ve düzenli raporlama."
  },
  {
    name: "İlaç Eğitimi",
    svg: (<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 576 512"><path d="M64 144c0-26.5 21.5-48 48-48s48 21.5 48 48V256H64V144zM0 144V368c0 61.9 50.1 112 112 112s112-50.1 112-112V189.6c1.8 19.1 8.2 38 19.8 54.8L372.3 431.7c35.5 51.7 105.3 64.3 156 28.1s63-107.5 27.5-159.2L427.3 113.3C391.8 61.5 321.9 49 271.3 85.2c-28 20-44.3 50.8-47.3 83V144c0-61.9-50.1-112-112-112S0 82.1 0 144zm296.6 64.2c-16-23.3-10-55.3 11.9-71c21.2-15.1 50.5-10.3 66 12.2l67 97.6L361.6 303l-65-94.8zM491 407.7c-.8 .6-1.6 1.1-2.4 1.6l4-2.8c-.5 .4-1 .8-1.6 1.2z"/></svg>),
    text:"Hasta veya bakıcılara ilaçların doğru kullanımı konusunda eğitim verilmesi."
  },
  {
    name: "Sağlık Danışmanlığı",
    svg: (<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M96 128V70.2c0-13.3 8.3-25.3 20.8-30l96-36c7.2-2.7 15.2-2.7 22.5 0l96 36c12.5 4.7 20.8 16.6 20.8 30V128h-.3c.2 2.6 .3 5.3 .3 8v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V136c0-2.7 .1-5.4 .3-8H96zm48 48c0 44.2 35.8 80 80 80s80-35.8 80-80V160H144v16zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6zM208 48V64H192c-4.4 0-8 3.6-8 8V88c0 4.4 3.6 8 8 8h16v16c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V96h16c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8H240V48c0-4.4-3.6-8-8-8H216c-4.4 0-8 3.6-8 8z"/></svg>),
    text:"Evdeki hasta veya bakıcılara sağlık durumu hakkında danışmanlık yapılması."
  },
  {
    name: "Küçük Cerrahi Müdaleler",
    svg: (<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16V424c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16H256c-8.8 0-16-7.2-16-16V424c0-29.8 20.4-54.9 48-62V304.9c-6-.6-12.1-.9-18.3-.9H178.3c-6.2 0-12.3 .3-18.3 .9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7V311.2zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>),
    text:"Küçük cerrahi prosedürlerin evde yapılması veya yönlendirilmesi."
  },
  {
    name: "Acil Yardım Uygulamaları",
    svg: (<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 576 512"><path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32V448c0 35.3 28.7 64 64 64H448.5c35.5 0 64.2-28.8 64-64.3l-.7-160.2h32zM256 208c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H320v48c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V320H208c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h48V208z"/></svg>),
    text:"Acil durumlarda gerekli ilk yardım müdahalesinin yapılması."
  },
  {
    name: "Acil Durum Müdahalesi",
    svg: (<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 640 512"><path d="M192 48c0-26.5 21.5-48 48-48H400c26.5 0 48 21.5 48 48V512H368V432c0-26.5-21.5-48-48-48s-48 21.5-48 48v80H192V48zM48 96H160V512H48c-26.5 0-48-21.5-48-48V320H80c8.8 0 16-7.2 16-16s-7.2-16-16-16H0V224H80c8.8 0 16-7.2 16-16s-7.2-16-16-16H0V144c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v48H560c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64H560c-8.8 0-16 7.2-16 16s7.2 16 16 16h80V464c0 26.5-21.5 48-48 48H480V96H592zM312 64c-8.8 0-16 7.2-16 16v24H272c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h24v24c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V152h24c8.8 0 16-7.2 16-16V120c0-8.8-7.2-16-16-16H344V80c0-8.8-7.2-16-16-16H312z"/></svg>),
    text:"Evde acil durumların yönetimi ve gerekli müdahalenin yapılması."
  },
]
const EnjeksiyonSvg = () => {

}
export default function Home() {

  return (
    

    <div className='mainPageContainer'>
      <Head>
      <link rel="icon" href="/images/AcmedCareLogo.jpg" sizes="32x32" />
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="keywords" content="evde sağlık hizmeti, evde bakım telefon, evde sağlık telefon, evde saglik hizmeti, ataşehir , ataşehir sağlık hizmeti, evde saglik, yaşlılara evde sağlık hizmeti, evde bakım sağlık hizmetleri, glutatyon, glutatyon fiyat, glutatyon takviyesi, doping serum, prp uygulaması, prp tedavisi"></meta>
        
        <title>AcmedCare | Evde Sağlık Hizmeti</title>
        <meta name="description" content="İstanbul Ataşehir'de evde sağlık hizmeti ve uzman ekibimizle sağlığınızı güvence altına alın. PRP ve glutatyon gibi hizmetlerimize de göz at." />
      </Head>
      <div className="body">
        
      <NavBar/>
      {/* <SwiperComponent/> 
      <BackToTopButton/>
      <Communication/> */}
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
              <p> <strong>Evde sağlık hizmeti</strong>,<b> yaşlılar, kronik hastalar, sürekli bakıma ihtiyaç duyanlar, rehabilitasyon sürecinde olanlar veya evde bakımı tercih eden herhangi bir kişi için faydalı olabilir. Bu hizmet, hastaların kendi evlerinde kalırken ihtiyaç duydukları sağlık hizmetlerine erişimlerini kolaylaştırır ve hastaneye gitme zorunluluğunu azaltır.</b></p>
              <p>Ayrıca evde sağlık hizmeti, hasta konforunu ön planda tutarken aynı zamanda hasta ve hasta yakınları arasında güçlü bir iletişim ve güven ilişkisi oluşturmayı amaçlar. Bu sayede hastalar, tedavi süreciyle ilgili daha iyi bilgilendirilir ve kendi sağlık durumlarına aktif bir şekilde katılım sağlarlar.</p>



            </article>



          </section>

        </div>
        <div className="informationBox2">
          <h2>Ataşehir | Evde Sağlık Hizmeti</h2>
            <p><strong>Hoş Geldiniz! AcmedCare olarak, sizlere evinizde kaliteli sağlık hizmetleri sunuyoruz. Yaş fark etmeksizin, her bireyin sağlığı bizim için önemlidir ve özel bakım ve tedavi imkanları sağlamak için buradayız. Ataşehir ve çevre bölgelerde yerel olarak faaliyet gösteriyor ve hizmetlerimizi geniş bir kesime sunuyoruz. </strong></p> 
            <p>Sağlık hizmetlerimiz, hastalarımızın konforlu ve güvenli bir ortamda kaliteli bakım almalarını sağlar. 
            Deneyimli sağlık uzmanlarımız, hasta bakımında uzmanlaşmış olup, güvenilir ve özenli bir şekilde tedavi süreçlerini yönetir.</p>
            
            <p>Size özel ihtiyaçlarınızı dikkate alarak, evde sağlık hizmetlerini uygun bir plan dahilinde sunuyoruz. Sağlık hizmetlerimiz, yaşam kalitenizi artırmak ve sağlıklı bir yaşam sürmenize yardımcı olmak için özenle hazırlanmıştır. Medikal tedaviler, ilaç takibi, tıbbi kontroller, sağlık danışmanlığı ve fizyoterapi gibi birçok hizmet seçeneği sunuyoruz.</p>
            
            <p>Sağlık ve refahınız bizim önceliğimizdir. Siz ve sevdikleriniz için en iyi evde sağlık hizmetini almak istiyorsanız bize ulaşın!
            <strong> AcmedCare | Telefon: 0534 872 57 35</strong> </p>
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
                    <span>PRP uygulamaları arasından <strong>'cilt gençleştirme' </strong>ve <strong>'saç dökülmesi'</strong>  üzerine tedavilerimiz bulunmaktarı.</span>
            
              </section>
            </article>
          </section>
          
        </div>
        
        <div className="aboutUsText" id='aboutUs'>
          <h2>Hakkımızda</h2>
           <p><strong>AcmedCare, Ataşehir genelinde evde sağlık hizmetleri sunan bir doktor grubudur. Ekibimiz, uzman doktorlar ve deneyimli sağlık personeliyle birlikte çalışarak hasta odaklı ve profesyonel bir hizmet sunmayı hedeflemektedir. </strong></p> 

            <p>Evde sağlık hizmeti alanında uzun yıllardır faaliyet gösteren AcmedCare, hasta konforunu ve iyileşme sürecini en üst düzeyde tutmayı amaçlamaktadır. Ataşehir ve çevresinde yaşayan hastalarımıza, kapsamlı bir sağlık hizmeti sunarak, onların sağlıklı bir şekilde evde kalabilmelerine ve rahat bir yaşam sürmelerine yardımcı olmaktayız.</p>

            <p>Hizmetlerimiz arasında; evde doktor muayenesi, tıbbi bakım, ilaç uygulaması, enjeksiyon, yara bakımı, kan ve tahlil örneklerinin alınması, evde fizyoterapi ve rehabilitasyon gibi birçok alan bulunmaktadır. Tüm hizmetlerimizi uzman ekip üyelerimizle birlikte, hasta odaklı ve güvenli bir şekilde sunmaktayız.</p>

            <p>AcmedCare olarak, hastalarımızın konforunu ve sağlığını ön planda tutan, güvenilir ve nitelikli bir sağlık hizmeti sunmak için çalışmaktayız. Siz de Ataşehir ve çevresinde evde sağlık hizmeti almak isteyen hastalarımız arasına katılabilirsiniz. Bize ulaşarak detaylı bilgi alabilir veya randevu oluşturabilirsiniz.</p>
            
            <strong>"AcmedCare, evde sağlık hizmetinde güvenilir bir adrestir. Sağlığınızı bizimle güvenle paylaşabilirsiniz."</strong> 

        </div>
        
      </div>

        <Footer></Footer>
      </div>
 
    </div>
  )
}
