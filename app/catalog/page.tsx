"use client";

import { basePath } from "@/base-config";
import BreadCrumbSection from "../components/BreadCrumb";
import CommonFaq from "../components/common/CommonFaq";
import { _3dCatalogFaqData } from "../data/faq-data";
import { DATA } from "../data/data";
import BoxTemplate from "../components/common/BoxTemplate";

export default function Catalog() {

  return (
    <>
      {/* BredCrumb-Section */}
      <BreadCrumbSection link="/catalog" menu="3D Cataloging" caption="Turn every SKU into an interactive story." bgImageName="3DCatalog_BC.jpg" />

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
                    <span>Show. Spin. Scale. Sell — in Real-</span> Time 3D.
                  </h2>
                </div>
                <p data-aos="fade-up" data-aos-duration="1500">
                  SmyData’s 3D Cataloging pipeline converts flat images, CAD drawings or scans into lightweight, photoreal models that shoppers can spin, zoom and drop into their own space.
                </p>
                <p data-aos="fade-up" data-aos-duration="1500">
                  3D models are <strong>true-scale, ultra-realistic</strong> from your photos or CAD files and squeezes them into light-weight files. The same model works on product pages, AR buttons, VR showrooms, social ads, and any downstream app that needs a perfect digital twin. One asset, endless channels, zero-pixel compromises.
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
                <span>Why modern brands need</span> 3D Cataloging!
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
                    <h3>Boost conversion</h3>
                    <p>
                      Interactive 3D views raise shopper confidence and can lift
                      add-to-cart rates by up to 40 %.
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
                    <h3>Cut returns</h3>
                    <p>
                      True-to-scale, multi-angle models reduce sizing surprises
                      and shrink costly reverse-logistics.
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
                    <h3>Omnichannel ready</h3>
                    <p>
                      One asset powers e-commerce, WebAR try-on, VR showrooms
                      and in-store kiosks—no rework required.
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
                    <h3>Future-proof content</h3>
                    <p>
                      3D files slot straight into metaverse venues,
                      configurators and AI styling tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="row_am review_list_section">
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
        <div className="container">
          <div className="row d-flex align-items-stretch">
            {DATA.catalog.features.map((item, pos) => (
              <BoxTemplate
                key={"catalogBoxTemplate" + pos}
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
      </section>

      <CommonFaq faqList={_3dCatalogFaqData.faqs} id='_3dCatalogFaqs' caption={_3dCatalogFaqData.caption} />

    </>
  );
}
