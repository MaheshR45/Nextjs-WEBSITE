import { basePath } from "@/base-config";

import HeaderSection from "./components/Header";
import Footer from "./components/Footer";
import MainScripts from "./components/MainScripts";
import NewsLetterSection from "./components/NewsLetterSection";

// import HeaderSection from './components/Header';
// import TrustedSection from './components/TrustedSection';
// import MainScripts from './components/MainScripts';
// import AboutSection from './components/AboutSection';
// import ModernUiSection from './components/ModernUiSection';
// import HowItWorksSection from './components/HowItWorks';
// import Testimonials from './components/Testimonials';
// import Pricing from './components/Pricing';

export default function RootLayout({ children }: { children: React.ReactNode }) {



  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href={`${basePath}/libs/images/favicon.png`} />

        <link rel="stylesheet" href={`${basePath}/libs/css/bootstrap.min.css`} />
        <link rel="stylesheet" href={`${basePath}/libs/css/icofont.min.css`} />
        <link rel="stylesheet" href={`${basePath}/libs/css/owl.carousel.min.css`} />
        <link rel="stylesheet" href={`${basePath}/libs/css/aos.css`} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href={`${basePath}/libs/css/style.css`} />
        <link rel="stylesheet" href={`${basePath}/libs/css/responsive.css`} />
        <link rel="stylesheet" href={`${basePath}/libs/css/custom-styles.css`} />

        {/* Jquery-js-Link  */}
        <script src={`${basePath}/libs/js/jquery.js`}></script>
        {/* owl-js-Link  */}
        <script src={`${basePath}/libs/js/owl.carousel.min.js`}></script>
        {/* bootstrap-js-Link  */}
        <script src={`${basePath}/libs/js/bootstrap.min.js`}></script>
        {/* aos-js-Link  */}
        <script src={`${basePath}/libs/js/aos.js`}></script>
        {/* main-js-Link  */}
        {/* <script src="/libs/js/main.js"></script> */}
      </head>
      <body>
        <div className="page_wrapper">

          {/* Preloader */}
          <div id="preloader">
            <div id="loader"></div>
          </div>
          <HeaderSection />
          {children}
          {/* <TrustedSection /> */}
          {/* <AboutSection /> */}
          {/* <ModernUiSection /> */}
          {/* <HowItWorksSection /> */}
          {/* <Testimonials /> */}
          {/* <Pricing /> */}
          {/* <NewsLetterSection /> */}
          <Footer />
          <div className="purple_backdrop"></div>
        </div>

        {/* runs all the jQuery/AOS/Owl‐init code on mount */}
        <MainScripts />

      </body>
    </html>
  )
}

