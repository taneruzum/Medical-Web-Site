import "../Footer/footer.css"

const Footer= () => {
    return(
        <div>
            <div>
                <div className="Footer">

                    <div className="footerTop">
                        <div className="leftBox">
                        <div className="allContact">
                            <ul>
                                <h3>Bize Ulaş</h3>
                                <li className="mail">E-posta <span>: xxxxxx@mail.com</span></li>
                                <li className="phone">Telefon <span>: +90 53x xxx xxxx</span></li>
                                <li className="location">Konum <span>: İstanbul/Ataşehir</span></li>
                            </ul>
                        </div>
                        
                        <div className="linkler">
                            <ul>
                                <h3>Linkler</h3>
                                <li className="fhome">Anasayfa</li>
                                <li className="fservices">Hizmetlerimiz</li>
                                <li className="fabout">Hakkımızda</li>
                                <li className="fcommunication">İletişim</li>
                            </ul>
                        </div>
                        
                        </div>
                        <div className="footerLogo">
                            <img src="/images/logo2.png" alt="footerlogo" />
                        </div>
                        
                    </div>
                    <div className="footerBot">
                        <div className="footer-content">
                            <p>Telif Hakkı © 2023 AcmedCare. Tüm hakları saklıdır. - Evde Sağlık Hizmeti - </p>
                        </div>
                        
                    </div>
                    
                    
                </div>

            </div>


        </div>

    );

};
export default Footer