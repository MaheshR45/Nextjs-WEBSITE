"use client";

import { basePath } from "@/base-config";

export interface SliderItem {
  title: string;
  titleHighlight?: string;
  caption: string;
  heading: string;
  buttonLabel: string;
  _3dModelUrl: string;
}

export default function HeroSection() {
  const sliderItems: SliderItem[] = [
    {
      title: "",
      titleHighlight: "",
      caption: '',
      heading: "",
      buttonLabel: "",
      _3dModelUrl: ""
    }
  ]
  return (
    <>
      <section className="banner_section">
        {/* container start */}
        <div className="container">
          {/* vertical animation line */}
          <div className="anim_line">
            <span>
              <img alt="anim_line" src={`${basePath}/libs/images/anim_line.png`} />
            </span>
            <span>
              <img alt="anim_line" src={`${basePath}/libs/images/anim_line.png`} />
            </span>
            <span>
              <img alt="anim_line" src={`${basePath}/libs/images/anim_line.png`} />
            </span>
            <span>
              <img alt="anim_line" src={`${basePath}/libs/images/anim_line.png`} />
            </span>
            <span>
              <img alt="anim_line" src={`${basePath}/libs/images/anim_line.png`} />
            </span>
            <span>
              <img alt="anim_line" src={`${basePath}/libs/images/anim_line.png`} />
            </span>
            <span>
              <img alt="anim_line" src={`${basePath}/libs/images/anim_line.png`} />
            </span>
            <span>
              <img alt="anim_line" src={`${basePath}/libs/images/anim_line.png`} />
            </span>
            <span>
              <img alt="anim_line" src={`${basePath}/libs/images/anim_line.png`} />
            </span>
          </div>
          {/* row start */}
          <div className="row">
            <div
              className="col-lg-6 col-md-12"
            >
              <div className="owl-carousel owl-theme" id="text_slider">
                <div className="item">
                  <h2 data-aos="fade-out" data-aos-duration="1500">Turn Every Product Into a <span>3D Story</span></h2>
                  <p>
                    Launch pixel-perfect 3D models that shoppers can spin, zoom,
                    and drop into their own space—right from your current PIM or
                    e-commerce stack.
                  </p>
                  <a
                    href="#"
                    className="btn puprple_btn aos-init aos-animate"
                    data-aos="fade-in"
                    data-aos-duration="1500"
                  >
                    See 3D in Action
                  </a>
                </div>
                <div className="item">
                  <h2 data-aos="fade-out" data-aos-duration="1500">Step into Tomorrow: <span>Explore Extended Reality Today</span></h2>
                  <p>
                    Transforming Experiences with 3D, AR, VR, and More—Where Imagination Meets Innovation.
                  </p>
                  <a
                    href="#"
                    className="btn puprple_btn aos-init aos-animate"
                    data-aos="fade-in"
                    data-aos-duration="1500"
                  >
                    Book an XR Demo
                  </a>
                </div>
                <div className="item">
                  <h2 data-aos="fade-out" data-aos-duration="1500">Empower Your Team: <span> Unleash AI Agents </span></h2>
                  <p>Computer-vision QA and AI agents keep an eye on quality, safety, and customer questions 24X7, so you can focus on the big picture.</p>
                  <a
                    href="#"
                    className="btn puprple_btn aos-init aos-animate"
                    data-aos="fade-in"
                    data-aos-duration="1500"
                  >
                    Meet the AI Workforce
                  </a>
                </div>
                 <div className="item">
                  <h2 data-aos="fade-out" data-aos-duration="1500">Experience Real Estate:  <span> Navigate with 3D and AR/VR </span></h2>
                  <p>Explore Properties Virtually and Visualize Your Dream Home in Augmented and Virtual Reality.</p>
                  <a
                    href="#"
                    className="btn puprple_btn aos-init aos-animate"
                    data-aos="fade-in"
                    data-aos-duration="1500"
                  >
                    Meet the AI Workforce
                  </a>
                </div>
              </div>
            </div>
            {/* banner slides start */}
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              <div className="banner_slider">
                {/* <div className="left_icon">
                  <img alt="image" src={`${basePath}/libs/images/message_icon.png`} />
                </div>
                <div className="right_icon">
                  <img alt="image" src={`${basePath}/libs/images/shield_icon.png`} />
                </div> */}

                <div className="item iframe-model-container">
                  <div id="iframeLoading">
                    <i className="fa fa-spinner fa-spin"></i>
                  </div>
                  <div className="iframe-model">
                    <iframe
                      id="modelIframe"
                      src="https://trynbuy-vto.s3.amazonaws.com/3dView/index.html"
                      allowFullScreen
                      loading="lazy"
                      allow="encrypted-media"
                      style={{
                        border: '0px solid white',
                        background: 'transparent',
                        outline: 'none',
                      }}
                      frameBorder="0"
                      scrolling="no"
                    />
                  </div>
                </div>

                {/* <div className="owl-carousel owl-theme" id="frmae_slider">
                  <div className="item iframe-model-container">
                    <div id="iframeLoading">
                      <i className="fa fa-spinner fa-spin"></i>
                    </div>
                    <div className="slider_img iframe-model">
                      <iframe
                        id="modelIframe"
                        src="https://trynbuy-vto.s3.amazonaws.com/3dView/index.html"
                        allowFullScreen
                        loading="lazy"
                        allow="encrypted-media"
                        style={{
                          border: '0px solid white',
                          background: 'transparent',
                          outline: 'none',
                        }}
                        frameBorder="0"
                        scrolling="no"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="slider_img">
                      <img alt="image" src={`${basePath}/libs/images/screen.png`} />
                    </div>
                  </div>
                  <div className="item">
                    <div className="slider_img">
                      <img alt="image" src={`${basePath}/libs/images/screen.png`} />
                    </div>
                  </div>
                </div> */}

                {/* <div className="slider_frame">
                  <img alt="image" src={`${basePath}/libs/images/mobile_frame_svg.svg`} />
                </div> */}
              </div>
            </div>
            {/* banner slides end */}
          </div>
          {/* row end */}
        </div>
        {/* container end */}
      </section>
      
    </>
  );
}
