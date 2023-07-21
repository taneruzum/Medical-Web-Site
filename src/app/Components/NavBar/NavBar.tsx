import React, { useEffect, useRef, useState } from 'react';
import "./navBar.css"
import Image from 'next/image';
import Typed from 'typed.js';


const NavBar = () => {

  const [hamburger, setHamburger] = useState(true)

  const hamburgerCheck = () => {
    setHamburger(!hamburger)
  }

  const handleHomePageClick = () => {
    window.location.reload(); // Sayfayı yenilemek için kullanıyoruz.
    window.scrollTo(0, 0); 
  };
  



  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        '<strong>Evde Sağlık Telefon</strong> ',
        '<strong>Glutatyon Nedir ?</strong> ',
        '<strong>PRP Tedavisi</strong> ',
        '<strong>Evde Sağlık Hizmeti</strong> '
      ],
      typeSpeed: 100,
      loop: true,
      loopCount: 3,
      backDelay: 2000,
      backSpeed: 30,
      // cursorChar:"'_'",


    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


  //////////////////////////////////////
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

      <div className="navbarTop">
        <div className="navbarTopContent">
          <span>(+90)534 872 57 35 </span>
          <span>İstanbul / Ataşehir</span>

        </div>
        <div className="navbarTopSocial">
          <figure className='icons'>
            <a href="https://www.instagram.com/acmedcare/?hl=tr" target="_blank" rel="noopener"><img src="/images/instagram.png" alt="Instagram Logo" /></a>
          </figure>

        </div>
      </div>
      <div className="navbarBottom">


        <div className="logoDiv">
          <figure>
            <img src="/images/icons/heart-svg.svg" alt="AcmedCare Logo" />
          </figure>
          <div className='logoAndMulti'>
            <p>AcmedCare </p>
            <div className='multiTextDiv'>
              <span className='multiText' ref={el}></span>
            </div>
          </div>
        </div>
        <div className={`containerLi ${hamburger ? "active" : ""}`} style={{ display: `${hamburger ? "flex" : "none"}` }}>
          <ul>
            <li onClick={handleHomePageClick}>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
              <span>Anasayfa</span>
            </li>
            <li onClick={() => scrollPage('servicesSection')}> <span>Hizmetlerimiz</span></li>
            <li onClick={() => scrollPage('aboutUs')}> <span>Hakkımızda</span></li>
            <li onClick={() => scrollPage('')}><span>İletişim</span></li>
          </ul>
        </div>
        <div className='noneStick' style={{ width: "316px" }} />
        <div className='hamburgerSvgDiv' onClick={hamburgerCheck}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px"><path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" /></svg>
        </div>
      </div>
    </div >
  );
};

export default NavBar;
