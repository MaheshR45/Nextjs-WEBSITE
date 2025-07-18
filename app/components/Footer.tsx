
'use client';

import { basePath } from "@/base-config";

export default function Footer() {
  return (
    <div className="page-frame bg-pale-primary">
      <div className="content-wrapper">
      <footer className="bg-dark text-inverse">
        <div className="container py-13 py-md-15">
          {/* <div className="card image-wrapper bg-full bg-image bg-overlay mt-n50p mx-md-5" data-image-src="./assets/img/photos/bg27.jpg">
          <div className="card-body p-6 p-md-11 d-lg-flex flex-row align-items-lg-center justify-content-md-between text-center text-lg-start">
            <h3 className="display-4 mb-6 mb-lg-0 pe-lg-10 pe-xl-5 pe-xxl-18 text-white">We are trusted by over 5000+ clients. Join them by using our services and grow your business.</h3>
            <a href="#" className="btn btn-lg btn-white rounded mb-0 text-nowrap">Join Us</a>
          </div>
        </div> */}
          <div className="row gy-6 gy-lg-0">
            {/* Column 1 */}
            <div className="col-md-4 col-lg-3">
              <div className="widget">
                <img
                  className="mb-4"
                  src={`${basePath}/libs/images/logo-light.png`}
                  srcSet={`${basePath}/libs/images/logo-light@2x.png 2x`}
                  alt="Smydata Logo"
                />
                <p className="mb-4">
                  © 2025 Smydata. <br className="d-none d-lg-block" />
                  All rights reserved.
                </p>
                <nav className="nav social social-white">
                  <a href="#"><i className="uil uil-twitter"></i></a>
                  <a href="#"><i className="uil uil-facebook-f"></i></a>
                  <a href="#"><i className="uil uil-dribbble"></i></a>
                  <a href="#"><i className="uil uil-instagram"></i></a>
                  <a href="#"><i className="uil uil-youtube"></i></a>
                </nav>
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-md-4 col-lg-3">
              <div className="widget">
                <h4 className="widget-title text-white mb-3">Get in Touch</h4>
                <address className="pe-xl-15 pe-xxl-17">
                  17350 State Hwy 249, Ste 220<br />
                  #10108 Houston, Texas 77064
                </address>
                <a href="mailto:info@smydata.com">info@smydata.com</a><br />
                +1 214-(884)-5649
              </div>
            </div>

            {/* Column 3 */}
            <div className="col-md-4 col-lg-3">
              <div className="widget">
                <h4 className="widget-title text-white mb-3">Learn More</h4>
                <ul className="list-unstyled mb-0">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Our Story</a></li>
                  <li><a href="#">Projects</a></li>
                  <li><a href="#">Terms of Use</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>

            {/* Column 4 */}
            <div className="col-md-12 col-lg-3">
              <div className="widget">
                <h4 className="widget-title text-white mb-3">Our Newsletter</h4>
                <p className="mb-5">
                  Subscribe to our newsletter to get our news & deals delivered to you.
                </p>
                <div className="newsletter-wrapper">
                  <div id="mc_embed_signup2">
                    <form
                      action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a"
                      method="post"
                      id="mc-embedded-subscribe-form2"
                      name="mc-embedded-subscribe-form"
                      className="validate dark-fields"
                      target="_blank"
                      noValidate
                    >
                      <div id="mc_embed_signup_scroll2">
                        <div className="mc-field-group input-group form-floating">
                          <input
                            type="email"
                            name="EMAIL"
                            className="required email form-control"
                            placeholder="Email Address"
                            id="mce-EMAIL2"
                          />
                          <label htmlFor="mce-EMAIL2">Email Address</label>
                          <input
                            type="submit"
                            value="Join"
                            name="subscribe"
                            id="mc-embedded-subscribe2"
                            className="btn btn-primary"
                          />
                        </div>
                        <div id="mce-responses2" className="clear">
                          <div className="response" id="mce-error-response2" style={{ display: 'none' }}></div>
                          <div className="response" id="mce-success-response2" style={{ display: 'none' }}></div>
                        </div>
                        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                          <input type="text" name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc" tabIndex="-1" value="" />
                        </div>
                        <div className="clear"></div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </div>

  );
}
