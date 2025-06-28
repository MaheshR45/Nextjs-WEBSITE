"use client";

import { basePath } from "@/base-config";
import BreadCrumbSection from "../components/BreadCrumb";
import CommonFaq from "../components/common/CommonFaq";
import { _AugmentRealityFaqData } from "../data/faq-data";
import { DATA } from "../data/data";
import BoxTemplate from "../components/common/BoxTemplate";

export default function AugmentReality() {
  return (
    <>
      {/* BredCrumb-Section */}
      <BreadCrumbSection link="/augment-reality" menu="Augment Reality" caption="Power Your Products with Ultra Realistic 3D & Augmented Reality." bgImageName="AR_BC.jpg" />

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
                    <span>Drop every product into customers’ spaces with instant </span> AR—sparking confident buys before checkout.
                  </h2>
                </div>
                <p data-aos="fade-up" data-aos-duration="1500">
                  SmyData’s AR suite fuses real-time 3D product views, size-perfect virtual try-ons, touchscreen in-store kiosks, and scroll-stopping AR ad experiences into one cloud platform.
                </p>
                <p data-aos="fade-up" data-aos-duration="1500">
                  Whether a customer is browsing on mobile, walking your aisles, or thumbing through social media, they can place, rotate, and explore your products at true scale in seconds—no apps, no downloads, just instant confidence that turns curiosity into confirmed orders.
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
                <span>Why forward-thinking brands invest in</span> AR!
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
                    <h3>Convert on the spot</h3>
                    <p>
                      Seeing a shoe on their own foot or a sofa in their living room erases doubt and lifts add-to-cart rates by up to 35 %.
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
                    <h3>Shrink costly returns</h3>
                    <p>
                      True-size visualisation means fewer “It didn’t fit” parcels boomeranging back to your warehouse.
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
                    <h3>Extend shelf space without walls</h3>
                    <p>
                      In-store kiosks showcase every colourway and accessory—even stock you don’t physically carry.
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
                    <h3>Own the social scroll </h3>
                    <p>
                      Interactive AR ads stop thumbs cold, doubling click-through and driving high-intent shoppers straight to PDPs.
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
            {DATA.augmentReality.map((item, pos) => (
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

      <CommonFaq faqList={_AugmentRealityFaqData.faqs} id='_3dCatalogFaqs' caption={_AugmentRealityFaqData.caption} />

    </>
  );
}
