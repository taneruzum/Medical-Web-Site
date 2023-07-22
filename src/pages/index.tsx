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
import Services from '@/app/Components/OurServices/Services';


const EnjeksiyonSvg = () => {

}
export default function Home() {

  return (


    <div className='mainPageContainer'>
      <Head>
        <link rel="icon" href="/images/AcmedCareLogo.jpg" sizes="32x32" />
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="evde sağlık hizmeti, evde bakım telefon, evde sağlık telefon, evde saglik hizmeti, ataşehir , ataşehir sağlık hizmeti, evde saglik, yaşlılara evde sağlık hizmeti, evde bakım sağlık hizmetleri, glutatyon, glutatyon fiyat, glutatyon takviyesi, doping serum, prp uygulaması, prp tedavisi"></meta>

        <title>AcmedCare | Evde Sağlık Hizmeti</title>
        <meta name="description" content="İstanbul Ataşehir'de evde sağlık hizmeti ve uzman ekibimizle sağlığınızı güvence altına alın. PRP ve glutatyon gibi hizmetlerimize de göz at." />
      </Head>
      <div className="body">

        <NavBar/>
        <SwiperComponent />
        <BackToTopButton />
        <Communication/>
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
          <Services />
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
