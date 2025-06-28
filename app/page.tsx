
'use client';

import Features from './components/Features';
import HeroSection from './components/HeroSection';
import IndustrySnapshots from './components/IndustrySnapshots';
import { _HomeFaqData } from './data/faq-data';
import CommonFaq from './components/common/CommonFaq';
import Carousel from './components/carousel';
import CustomCarousel from './components/CustomCarousel';

export default function HomePage() {

  return (
    <>
      {/* <Carousel /> */}
      <CustomCarousel />
      {/* <HeroSection /> */}
      <Features />
      <IndustrySnapshots />
      <CommonFaq faqList={_HomeFaqData.faqs} id='_3dCatalogFaqs' caption={_HomeFaqData.caption} />
    </>
  );
}
