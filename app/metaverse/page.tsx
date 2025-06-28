"use client";

import { basePath } from "@/base-config";
import BreadCrumbSection from "../components/BreadCrumb";
import CommonFaq from "../components/common/CommonFaq";
import { _MetaverseFaqData } from "../data/faq-data";
import { DATA } from "../data/data";
import BoxTemplate from "../components/common/BoxTemplate";

export default function Metaverse() {
  return (
    <>
      {/* BredCrumb-Section */}
      <BreadCrumbSection link="/metaverse" menu="Metaverse" caption="Give your audience a front-row seat - anywhere, any time." bgImageName="Metaverse_BC.jpg" />

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
                    <span>Give your audience a front-row seat </span> —anywhere, any time.
                  </h2>
                </div>
                <p data-aos="fade-up" data-aos-duration="1500">
                  SmyData’s Metaverse engine lets you spin up persistent digital twins of factories, campuses, and flagship stores, complete with centimeter-accurate spatial mapping, fully customizable avatars, and engagement tools that keep visitors exploring long after the first log-in.
                </p>
                <p data-aos="fade-up" data-aos-duration="1500">
                  Whether you’re hosting a product launch, training a global workforce, or guiding buyers through a virtual showroom, every interaction is tracked, measurable, and instantly updatable—no headsets required.
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
                <span>Why brands are staking territory in the</span> Metaverse!
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
                    <h3>24 × 7 presence</h3>
                    <p>
                      A virtual campus or showroom stays open around the clock, greeting customers and employees in every time zone.
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
                    <h3>Shorter sales cycles</h3>
                    <p>
                      Life-size digital twins let prospects inspect machinery or real estate before a single site visit, speeding decisions.
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
                    <h3>Stronger community</h3>
                    <p>
                      Avatars, chat, and gamified quests turn one-off visitors into repeat participants who share, post, and bring friends.
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
                    <h3>Actionable insights</h3>
                    <p>
                      Heat-maps and path tracking reveal what spaces captivate, what stalls, and where to fine-tune the journey.
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
            {DATA.metaverse.map((item, pos) => (
              <BoxTemplate
                key={"aiAgentsBoxTemplate" + pos}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <CommonFaq faqList={_MetaverseFaqData.faqs} id='_3dCatalogFaqs' caption={_MetaverseFaqData.caption} />

    </>
  );
}
