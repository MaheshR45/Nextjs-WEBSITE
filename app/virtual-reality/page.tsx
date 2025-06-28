"use client";

import { basePath } from "@/base-config";
import BreadCrumbSection from "../components/BreadCrumb";
import CommonFaq from "../components/common/CommonFaq";
import { _VirtualRealityFaqData } from "../data/faq-data";
import { DATA } from "../data/data";
import BoxTemplate from "../components/common/BoxTemplate";

export default function VirtualReality() {
  return (
    <>
      {/* BredCrumb-Section */}
      <BreadCrumbSection link="/virtual-reality" menu="Virtual Reality" caption="Transport customers into immersive VR worlds—turning every visit into an unforgettable, high-engagement adventure." bgImageName="VR_BC.jpg" />

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
                    <span>Immerse customers in captivating VR worlds for unforgettable</span> interactive experiences.
                  </h2>
                </div>
                <p data-aos="fade-up" data-aos-duration="1500">
                  SmyData’s Virtual Reality platform delivers hyper-real simulations for education, healthcare, and automotive training, while doubling as a plug-and-play engine for virtual showrooms and live, multi-user events.
                </p>
                <p data-aos="fade-up" data-aos-duration="1500">
                  Students dissect anatomy in 3D, surgeons rehearse complex procedures, assembly techs practise error-free builds, and customers explore full-scale products from their couch—all on the same cloud-hosted, headset-ready stack that launches in a browser or a Quest in seconds.
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
                <span>Why forward-thinking teams invest in</span> VR!
              </h2>
              {/* <p>
                Lorem Ipsum is simply dummy text of the printing and typese
                tting indus orem Ipsum has beenthe standard dummy.
              </p> */}
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div
                  className="why_box"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="100"
                >
                  <div className="icon">
                    <img
                      src={`${basePath}/libs/images/secure.png`}
                      alt="image"
                    />
                  </div>
                  <div className="text">
                    <h3>Master skills faster</h3>
                    <p>
                      Immersive repetition builds muscle memory, cutting classroom or on-the-line training time by up to 60 %.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div
                  className="why_box"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="200"
                >
                  <div className="icon">
                    <img
                      src={`${basePath}/libs/images/abt_functional.png`}
                      alt="image"
                    />
                  </div>
                  <div className="text">
                    <h3>Reduce costly errors</h3>
                    <p>
                      Safe-to-fail virtual environments let learners make—and learn from—mistakes without damaging equipment or risking lives.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div
                  className="why_box"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="300"
                >
                  <div className="icon">
                    <img
                      src={`${basePath}/libs/images/communication.png`}
                      alt="image"
                    />
                  </div>
                  <div className="text">
                    <h3>Showcase anywhere</h3>
                    <p>
                      Virtual showrooms and product launches reach a global audience with zero shipping, venue, or booth logistics.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div
                  className="why_box"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="400"
                >
                  <div className="icon">
                    <img
                      src={`${basePath}/libs/images/abt_support.png`}
                      alt="image"
                    />
                  </div>
                  <div className="text">
                    <h3>Turn events into data</h3>
                    <p>
                      Every interaction, gaze, and hand-grip is tracked, giving you granular insights impossible to capture in the real world.
                    </p>
                  </div>
                </div>
              </div>
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
            {DATA.virtualReality.map((item, pos) => (
              <BoxTemplate
                key={"aiAgentsBoxTemplate" + pos}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* <section className="row_am query_section">
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
              <h2>Ready to see your products in 3D?</h2>
              <p>
                Book a live demo and watch us transform one of your SKUs—free—in
                under 48 hours. Questions?
                <br /> Call +1-512-555-0199 or pop open the chat bubble anytime.
              </p>
            </div>
            <a href="#" className="btn white_btn">
              CONTACT US NOW
            </a>
          </div>
        </div>
      </section> */}

      <CommonFaq faqList={_VirtualRealityFaqData.faqs} id='_3dCatalogFaqs' caption={_VirtualRealityFaqData.caption} />

    </>
  );
}
