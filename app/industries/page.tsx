"use client";

import { basePath } from "@/base-config";
import BreadCrumbSection from "../components/BreadCrumb";
import CommonFaq from "../components/common/CommonFaq";
import { _3dCatalogFaqData } from "../data/faq-data";
import CardDesignTemplate from "../components/common/CardDesignTemplate";
import DemoSectionContact from "../components/common/DemoSectionContact";
import { DATA } from "../data/data";

export default function Industries() {
  return (
    <>
      {/* BredCrumb-Section */}
      <BreadCrumbSection link="/industries" menu="Industries"  bgImageName="Industries_BC.jpg" />
      <section className="row_am app_solution_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="app_text">
                <div
                  className="section_title"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="100"
                >
                  <h2>
                    Tomorrow's Experiences, Delivered Today
                    {/* <span>Bring your products to </span> life—literally. */}
                  </h2>
                </div>
                <p data-aos="fade-up" data-aos-duration="1500">
                  From first click to final inspection, SmyData rewrites the
                  rules of engagement. Our blend of 3D, AR/VR, metaverse
                  engineering, vision AI, and autonomous agents doesn't just
                  slot into your workflow—it redefines it. Whether you're
                  selling sneakers, building jet engines, or teaching future
                  surgeons, we turn every touchpoint into an immersive,
                  data-rich moment that speeds decisions, slashes waste, and
                  delights users long after the wow factor wears off. Dive into
                  the sections below to see how seven very different industries
                  are already scaling faster—and smarter—with SmyData at the
                  core.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="app_images"
                data-aos="fade-in"
                data-aos-duration="1500"
              >
                <ul>
                  <li>
                    <img src={`${basePath}/libs/images/abt_01.png`} alt="" />
                  </li>
                  <li>
                    <a
                      className="popup-youtube play-button"
                      data-url="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
                      data-toggle="modal"
                      data-target="#myModal"
                      title="About Video"
                    >
                      <img src={`${basePath}/libs/images/abt_02.png`} alt="" />
                      <div className="waves-block">
                        <div className="waves wave-1"></div>
                        <div className="waves wave-2"></div>
                        <div className="waves wave-3"></div>
                      </div>
                      <span className="play_icon">
                        <img
                          src={`${basePath}/libs/images/play_black.png`}
                          alt="image"
                        />
                      </span>
                    </a>
                  </li>
                  <li>
                    <img src={`${basePath}/libs/images/abt_03.png`} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="row_am about_app_section" data-aos="fade-in">
        <div className="why_inner">
          <div className="container">
            <div
              className="section_title pb-4"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="100"
            >
              <h2>Industry Solutions Overview </h2>
              <p>
                you'll find ready-to-drop-in copy for an “Industries” page that
                showcases how SmyData's immersive tech and AI stack unlock value
                across seven verticals. Each blurb runs ±90 words—long enough
                for SEO, concise enough for quick scanning.
              </p>
            </div>

            {DATA.industries.map((industry, pos) => (
              <CardDesignTemplate
                key={"industryRow" + pos}
                title={industry.name}
                description={industry.description}
                link={industry.link}
                keyPoints={industry.keyPoints}
                isImageRight={pos % 2 === 0}
              />
            ))}
          </div>
        </div>
      </section>
      <DemoSectionContact />

      {/* Ready to see how SmyData reshapes your industry? Book a personalised demo
      and we’ll build a pilot tailored to your toughest challenge—free. */}

      {/* <CommonFaq
        faqList={_3dCatalogFaqData.faqs}
        id="_3dCatalogFaqs"
        caption={_3dCatalogFaqData.caption}
      /> */}
    </>
  );
}
