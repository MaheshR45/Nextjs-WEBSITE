'use client';

import { basePath } from '@/base-config';

export default function OSAHome() {
  return (
    <>
    <section
      className=" image-wrapper bg-image bg-overlay bg-overlay-400 bg-content text-white"
      style={{ backgroundImage: `url(${basePath}/libs/images/photos/bg4.jpg)` }}
    >
      <div className="container pt-18 pb-16" style={{ zIndex: 5, position: 'relative' }}>
        <div className="row gx-0 gy-12 align-items-center">
          <div
            className="col-md-10 offset-md-1 offset-lg-0 col-lg-6 content text-center text-lg-start"
            data-cues="slideInDown"
            data-group="page-title"
            data-delay="600"
          >
            <h1 className="display-2 mb-5 text-white">
              Crafting project specific solutions with expertise.
            </h1>
            <p className="lead fs-lg lh-sm mb-7 pe-xl-10">
              We’re a creative company that focuses on establishing long-term relationships with customers.
            </p>
            <div
              className="d-flex justify-content-center justify-content-lg-start"
              data-cues="slideInDown"
              data-group="page-title-buttons"
              data-delay="900"
            >
              <span>
                <a href="#" className="btn btn-lg btn-white rounded-pill me-2">
                  Explore Now
                </a>
              </span>
              <span>
                <a href="#" className="btn btn-lg btn-outline-white rounded-pill">
                  Contact Us
                </a>
              </span>
            </div>
          </div>

          <div className="col-lg-5 offset-lg-1">
            <div
              className="swiper-container dots-over shadow-lg"
              data-margin="5"
              data-nav="true"
              data-dots="true"
            >
              <div className="swiper">
                <div className="swiper-wrapper">
                  {/* <div className="swiper-slide">
                    <img
                      src={`${basePath}/libs/images/osa/bg1.jpeg`}
                      srcSet={`${basePath}/libs/images/osa/bg1.jpeg 2x`}
                      className="rounded"
                      alt=""
                    />
                  </div> */}
                  <div className="swiper-slide">
                    {/* <a
                      href={`${basePath}/libs/media/movie.mp4`}
                      className="btn btn-circle btn-white btn-play ripple mx-auto mb-5 position-absolute"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 3,
                      }}
                      data-glightbox
                      data-gallery="hero"
                    >
                      <i className="icn-caret-right"></i>
                    </a> */}
                    <img
                      src={`${basePath}/libs/images/osa/logo.jpeg`}
                      className="rounded"
                      alt=""
                    />
                  </div>
                  {/* <div className="swiper-slide">
                    <img
                      src={`${basePath}/libs/images/osa/bg3.jpeg`}
                      srcSet={`${basePath}/libs/images/osa/bg3.jpeg 2x`}
                      className="rounded"
                      alt=""
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="wrapper bg-dark">
      <div
        className="swiper-container swiper-thumbs-container swiper-fullscreen nav-dark"
        data-margin="0"
        data-autoplay="true"
        data-autoplaytime="7000"
        data-nav="true"
        data-dots="false"
        data-items="1"
        data-thumbs="true"
      >
        <div className="swiper">
          <div className="swiper-wrapper">
            {['bg1', 'bg2', 'bg3'].map((img, idx) => (
              <div
                key={idx}
                className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
                style={{
                  backgroundImage: `url(${basePath}/libs/images/osa/${img}.jpeg)`,
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="swiper swiper-thumbs d-none">
          <div className="swiper-wrapper">
            {['bg1', 'bg2', 'bg3'].map((img, idx) => (
              <div className="swiper-slide" key={idx}>
                <img
                  src={`${basePath}/libs/images/osa/${img}.jpeg`}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

        <div className="swiper-static d-none">
          <div className="container h-100 d-flex align-items-center justify-content-center">
            <div className="row">
              <div className="col-lg-8 mx-auto mt-n10 text-left">
                <h1 className="fs-19 text-uppercase ls-xl text-white mb-3 animate__animated animate__zoomIn animate__delay-1s">
                  I'm Julia Sandbox
                </h1>
                <h2 className="display-1 fs-60 text-white mb-0 animate__animated animate__zoomIn animate__delay-2s">
                  couples & wedding photographer
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
    
  );
}
