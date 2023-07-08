import React, { useEffect, useRef } from 'react';
import "./navBar.css"

const NavBar = () => {
  const logoRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (logoRef.current) {
        logoRef.current.style.transform = "scale(1.1)";
        setTimeout(() => {
          if (logoRef.current) {
            logoRef.current.style.transform = "";
          }
        }, 1000);
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='navbarContainer'>

      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

      <div className="topContent">
        <div className="allInformations">
          <div className="contact">
            <div className="phone"><a href=""><span>+90xxx xxx xxxx</span></a></div>
            <div className="location"><a href=""><span>İstanbul/Kadıköy/...</span></a></div>
            <div className="email"><a href=""><span>example@gmail.com</span></a></div>
          </div>
          <div className="socialMedias">
            <div className="facebook"><a href=""><img src="/images/facebook.png" alt="facebook" /></a></div>
            <div className="instagram"><a href=""><img src="/images/instagram.png" alt="instagram" /></a></div>
          </div>
        </div>
      </div>

      <nav className="navBar">
        {/* <div className="acmedCareLogo" ref={logoRef}> */}
        <div className="acmedCareLogo">
          <img ref={logoRef} src="/images/logo2.png" alt="logo" />
        </div>
        <ul className="content">
          <li><a href=""><span className="material-symbols-outlined">home</span>Anasayfa</a></li>
          <li><a href="">Hizmetlerimiz</a></li>
          <li><a href="">Hakkımızda</a></li>
          <li><a href="">İletişim</a></li>
        </ul>
      </nav>

    </div>
  );
};

export default NavBar;
