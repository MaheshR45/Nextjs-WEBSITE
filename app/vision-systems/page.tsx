"use client";

import { basePath } from "@/base-config";
import BreadCrumbSection from "../components/BreadCrumb";
import CommonFaq from "../components/common/CommonFaq";
import { _3dCatalogFaqData, visionSystems } from "../data/faq-data";
import BoxTemplate from "../components/common/BoxTemplate";
import { DATA } from "../data/data";
import BoxTemplateWithIcon from "../components/common/BoxTemplateWithIcon";

export default function VisionSystems() {
  return (
    <>
      {/* BredCrumb-Section */}
      <BreadCrumbSection
        link="/vision-systems"
        menu="Vision Systems"
        caption={
          "Vision Systems — Track, detect, and decide faster than the human eye."
        }
        bgImageName="VS_BC.jpg"
      />

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
                    Turn a warehouse of moving parts into
                    <span>crystal-clear data </span>
                  </h2>
                </div>
                <p data-aos="fade-up" data-aos-duration="1500">
                  SmyData's AI-powered vision platform layers deep-learning
                  object detection, millisecond tracking, and autonomous
                  condition monitoring onto any IP camera feed. Pallets,
                  forklifts, and people are identified, counted, and
                  time-stamped in real time, feeding alerts and analytics
                  straight into your WMS or ERP. The result: safer aisles,
                  vanishing bottlenecks, and productivity insights you could
                  never capture with manual audits.
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

      <section className="row_am why_we_section" data-aos="fade-in">
        <div className="why_inner">
          <div className="container">
            <div
              className="section_title"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="100"
            >
              <h2>
                Why warehouses are upgrading to <span>Vision Systems</span>
              </h2>
              {/* <p>
                Lorem Ipsum is simply dummy text of the printing and typese
                tting indus orem Ipsum has beenthe standard dummy.
              </p> */}
            </div>
            <div className="row">
              {DATA.visionSystems.keyPoints.map((item, pos) => (
                <div
                  key={"aiAgentsBoxTemplateWithIconDiv" + pos}
                  className="col-md-6 col-lg-3"
                >
                  <BoxTemplateWithIcon
                    key={"aiAgentsBoxTemplateWithIcon" + pos}
                    title={item.title}
                    description={item.description}
                    imgUrl={item.imgUrl}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="row_am review_list_section">
        <div className="container">
          <div
            className="section_title"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <h2>
              <span>Stand-out features</span> & the wins they deliver
            </h2>
            {/* <p>
              Lorem Ipsum is simply dummy text of the printing and typese tting
              indus orem Ipsum has beenthe standard dummy.
            </p> */}
          </div>

          <div className="row d-flex align-items-stretch">
            {DATA.visionSystems.features.map((item, pos) => (
              <BoxTemplate
                key={"visionSystemBoxTemplate" + pos}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="row_am query_section">
        <div
          className="query_inner"
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          <div className="container">
            <span className="banner_shape1">
              <img
                src={`${basePath}/libs/images/banner-shape1.png`}
                alt="shape1"
              />
            </span>
            <span className="banner_shape2">
              <img
                src={`${basePath}/libs/images/banner-shape2.png`}
                alt="shape2"
              />
            </span>
            <span className="banner_shape3">
              <img
                src={`${basePath}/libs/images/banner-shape3.png`}
                alt="shape3"
              />
            </span>

            <div className="section_title">
              <h2>Ready to give your warehouse a smarter set of eyes?</h2>
              <p>
                Book a live vision demo and watch our system detect, track, and
                report on your floor traffic in real time.
                <br /> Prefer to chat first? Call +1-512-555-0199 or click the
                chat bubble anytime
              </p>
            </div>
            <a href="#" className="btn white_btn">
              CONTACT US NOW
            </a>
          </div>
        </div>
      </section>

      <CommonFaq
        faqList={visionSystems.faqs}
        id="_3dCatalogFaqs"
        caption={visionSystems.caption}
      />
    </>
  );
}
