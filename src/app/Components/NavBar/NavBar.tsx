import React, { useEffect, useRef } from 'react';
import "./navBar.css"
import Image from 'next/image';

const NavBar = () => {
  //  aşşağıdan logoRef aç

  // const logoRef = useRef<HTMLImageElement | null>(null);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (logoRef.current) {
  //       logoRef.current.style.transform = "scale(1.1)";
  //       setTimeout(() => {
  //         if (logoRef.current) {
  //           logoRef.current.style.transform = "";
  //         }
  //       }, 1000);
  //     }
  //   }, 2000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  const scrollPage = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const navbarHeight = 180
      const topOffset = section.offsetTop - navbarHeight
      window.scrollTo({ top: topOffset, behavior: "smooth" })
    }
  }

  // const scrollToServices = () => {
  //   const servicesSection = document.getElementById('servicesSection');
  //   if (servicesSection) {
  //     const topOffset = servicesSection.offsetTop - 180;
  //     window.scrollTo({ top: topOffset, behavior: 'smooth' });
  //   }
  // };

  // const scrollToAboutUs = () => {
  //   const aboutSection = document.getElementById("aboutUs")
  //   if (aboutSection) {
  //     const topOffset = aboutSection.offsetTop - 180;
  //     window.scrollTo({ top: topOffset, behavior: 'smooth' });
  //   }
  // }

  return (
    <div className='navbarContainer'>

      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

      <div className="topContent">
        <div className="allInformations">
          <div className="contact">
            <div className="phone"><span>(+90) 534 872 57 35</span></div>
            <div className="verticalLine"></div>
            <div className="location"><span>İstanbul - Ataşehir </span></div>
            {/* <div className="email"><a href=""><span>example@gmail.com</span></a></div> */}
          </div>
          
          <div className="socialMedias">
            <div className="instagram"><a href="https://www.instagram.com/acmedcare/?hl=tr" target="_blank" rel="noopener"><Image
              width={40}
              height={40}
              style={{ objectFit: "cover", borderRadius: "50%" }}
              src="/images/instagram.png"
              alt="instagram"
              title='Bizi Takip Et' /></a></div>
          </div>
        </div>
      </div>

      <nav className="navBar">
        {/* <div className="acmedCareLogo" ref={logoRef}> */}
        <div className="acmedCareLogo">
          <img /*ref={logoRef}*/ src="/images/AcmedCareLogo.jpg" alt="logo" />
        </div>
        <ul className="content">
          <li><span className="material-symbols-outlined">home</span>Anasayfa</li>
          <div className="verticalLine"></div>
          <li onClick={() => scrollPage("servicesSection")}>Hizmetlerimiz</li>
          <div className="verticalLine"></div>
          <li onClick={() => scrollPage("aboutUs")}>Hakkımızda</li>
          <div className="verticalLine"></div>
          <li>İletişim</li>
        </ul>
      </nav>

    </div>
  );
};

export default NavBar;
