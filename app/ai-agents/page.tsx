"use client";

import { basePath } from "@/base-config";
import BreadCrumbSection from "../components/BreadCrumb";
import CommonFaq from "../components/common/CommonFaq";
import { aiAgents } from "../data/faq-data";
import BoxTemplate from "../components/common/BoxTemplate";
import { DATA } from "../data/data";
import BoxTemplateWithIcon from "../components/common/BoxTemplateWithIcon";

export default function AiAgents() {
  return (
    <>
      {/* BredCrumb-Section */}
      <BreadCrumbSection
        link="/ai-agents"
        menu="AI Agents"
        caption={
          "AI Agents - Let software talk, think, and act—so humans can create"
        }
        bgImageName="AiAgent_BC.jpg"
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
                    Put intelligence on every touchpoint, <span>24 × 7 </span>
                  </h2>
                </div>
                <p data-aos="fade-up" data-aos-duration="1500">
                  SmyData's AI Agent stack blends natural-language
                  conversational bots, hands-free automation agents, real-time
                  recommendation engines, and a multi-agent framework that
                  scales from a lone chatbot to a swarm of task-specific
                  workers. Whether it's a WhatsApp bot solving customer issues
                  in seconds or a background agent reconciling invoices at 3
                  a.m., each digital teammate learns from every interaction and
                  plugs straight into your existing apps—no rip-and-replace
                  required.
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
                Why forward-thinking teams deploy <span>AI Agents</span>
              </h2>
              {/* <p>
                Lorem Ipsum is simply dummy text of the printing and typese
                tting indus orem Ipsum has beenthe standard dummy.
              </p> */}
            </div>
            <div className="row">
              {DATA.aiAgents.keyPoints.map((item, pos) => (
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
            {DATA.aiAgents.features.map((item, pos) => (
              <BoxTemplate
                key={"aiAgentsBoxTemplate" + pos}
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
              <h2>Ready to hire your first digital teammate?</h2>
              <p>
                Book a live AI Agent demo and watch a WhatsApp bot solve a real
                customer scenario in under five minutes—free.
                <br /> Prefer to chat first? Call +1 214-(884)-5649 or click the
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
        faqList={aiAgents.faqs}
        id="_3dCatalogFaqs"
        caption={aiAgents.caption}
      />
    </>
  );
}
