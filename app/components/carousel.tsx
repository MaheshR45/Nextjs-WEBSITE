"use client";

import { basePath } from "@/base-config";

export default function Carousel() {
  return (
    <>
      <section className="row_am testimonial_section custom-bg" style={{ paddingTop: 0 }}>
        <div className="container">
          <div
            className="testimonial_block"
            data-aos="fade-in"
            data-aos-duration="1500"
          >
            <div
              id="testimonial_slider"
              className="owl-carousel owl-theme"
            >
              <div className="item">
                <div className="testimonial_slide_box">
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
              </div>

              <div className="item">
                <div className="testimonial_slide_box">
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
              </div>

              <div className="item">
                <div className="testimonial_slide_box">
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
              </div>
            </div>

            <div className="avtar_faces">
              <img src={`${basePath}/libs/images/avtar_testimonial.png`} alt="image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
