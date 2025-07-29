
import { basePath } from "@/base-config";
import Script from "next/script";
import LayoutWrapper from "./components/LayoutWrapper";




export default function RootLayout({ children }: { children: React.ReactNode }) {




  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href={`${basePath}/libs/images/favicon.png`} />

        {/* <link rel="stylesheet" href={`${basePath}/libs/css/bootstrap.min.css`} />
        <link rel="stylesheet" href={`${basePath}/libs/css/icofont.min.css`} />
        <link rel="stylesheet" href={`${basePath}/libs/css/owl.carousel.min.css`} />
        <link rel="stylesheet" href={`${basePath}/libs/css/aos.css`} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href={`${basePath}/libs/css/style.css`} />
        <link rel="stylesheet" href={`${basePath}/libs/css/responsive.css`} />
        <link rel="stylesheet" href={`${basePath}/libs/css/custom-styles.css`} /> */}
        <link rel="stylesheet" href={`${basePath}/libs/css/plugins.css`} />
        <link rel="stylesheet" href={`${basePath}/libs/css/style.css`} />
        <link rel="stylesheet" href={`${basePath}/libs/css/colors/purple.css`} />
        <link rel="stylesheet" href={`${basePath}/libs/css/fonts/thicccboi.css`} />

        <Script src={`${basePath}/libs/js/plugins.js`} strategy="afterInteractive" />
        <Script src={`${basePath}/libs/js/theme.js`} strategy="afterInteractive" />


        {/* Jquery-js-Link  */}
        {/* <script src={`${basePath}/libs/js/jquery.js`}></script> */}
        {/* owl-js-Link  */}
        {/* <script src={`${basePath}/libs/js/owl.carousel.min.js`}></script> */}
        {/* bootstrap-js-Link  */}
        {/* <script src={`${basePath}/libs/js/bootstrap.min.js`}></script> */}
        {/* aos-js-Link  */}
        {/* <script src={`${basePath}/libs/js/aos.js`}></script> */}
        {/* main-js-Link  */}
        {/* <script src="/libs/js/main.js"></script> */}

      </head>
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>


    </html>
  )
}

