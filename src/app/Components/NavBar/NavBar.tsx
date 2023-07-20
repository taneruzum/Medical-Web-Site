import React, { useEffect, useRef, useState } from 'react';
import "./navBar.css"
import Image from 'next/image';
import Typed from 'typed.js';


const NavBar = () => {

  const [hamburger, setHamburger] = useState(window.innerWidth >= 480);

  const handleResize = () => {
    setHamburger(window.innerWidth >= 480);
  };

  useEffect(() => {
    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const hamburgerCheck = () => {
    setHamburger(!hamburger);
  };



  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        '<strong>Evde</strong> Sağlık Hizmeti. ',
        ' a second sentence. ',
        ' a third sentence ',
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

      {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

      <div className="topContent">
        <div className="allInformations">
          <div className="contact">
            <div className="phone"><span>(+90) 534 872 57 35</span></div>
            <div className="verticalLine"></div>
            <div className="location"><span>İstanbul - Ataşehir </span></div>
             <div className="email"><a href=""><span>example@gmail.com</span></a></div> 
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
         <div className="acmedCareLogo" ref={logoRef}> 
        <div className="acmedCareLogo">
          <img ref={logoRef} src="/images/AcmedCareLogo.jpg" alt="logo" />
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
      </nav> */}

      <div className="navbarTop">
        <div className="navbarTopContent">
          <span>(+90) xxx xxxx xx</span>
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
            {/* <img src="" alt="AcmedCare Logo" /> */}
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
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
              <a href="">Anasayfa</a>
            </li>
            <li><a href="">Hakkımızda</a></li>
            <li><a href="">İletişim</a></li>
            <li><a href="">İletişim</a></li>
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
