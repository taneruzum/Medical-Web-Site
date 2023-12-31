import "../Footer/footer.css"

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (

        <div className="Footer">

            <div className="footerTop">
                <div className="leftBox">
                    <div className="aboutus">
                        <ul>
                            <h4>Amacımız</h4>
                            <li>AcmeDCare olarak, evde sağlık hizmetleri konusunda sektörde öncü olmayı hedeflemekteyiz. Amacımız öncelikle Ataşehir genelinde hizmet vermektir. Siz veya sevdikleriniz için en iyi evde sağlık hizmetini sunmak için buradayız.</li>
                        </ul>
                    </div>
                    <div className="allContact">
                        <ul>
                            <h4>Bize Ulaş</h4>
                            <li className="mail">E-posta : <span>xxxxxxxxxxxxxxxx</span></li>
                            <li className="phone">Telefon : <span> xxxxxxxxxxxxxxxx</span></li>
                            <li className="location">Konum : <span> xxxxxxxxxxxxxxxx</span></li>
                        </ul>
                    </div>

                    <div className="linkler">
                        <ul>
                            <h4>Linkler</h4>
                            <li className="fhome">Anasayfa</li>
                            <li className="fservices">Hizmetlerimiz</li>
                            <li className="fabout">Hakkımızda</li>
                            <li className="fcommunication">İletişim</li>
                        </ul>
                    </div>

                </div>

            </div>
            <div className="footerBot">
                <div className="footer-content">
                    <p>Telif Hakkı © {currentYear} AcmedCare. Tüm hakları saklıdır.</p>
                        <span>- Evde Sağlık Hizmeti - </span>
                </div>

            </div>
        </div>


    );

};
export default Footer