
'use client';

import { basePath } from "@/base-config";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="top_footer" id="contact">
          {/* animation line */}
          <div className="anim_line dark_bg">
            <span><img alt="anim_line" src={`${basePath}/libs/images/anim_line.png`} /></span>
            <span><img alt="anim_line" src={`${basePath}/libs/images/anim_line.png`} /></span>
            <span><img alt="anim_line" src={`${basePath}/libs/images/anim_line.png`} /></span>
            <span><img alt="anim_line" src={`${basePath}/libs/images/anim_line.png`} /></span>
            <span><img alt="anim_line" src={`${basePath}/libs/images/anim_line.png`} /></span>
            <span><img alt="anim_line" src={`${basePath}/libs/images/anim_line.png`} /></span>
            <span><img alt="anim_line" src={`${basePath}/libs/images/anim_line.png`} /></span>
            <span><img alt="anim_line" src={`${basePath}/libs/images/anim_line.png`} /></span>
            <span><img alt="anim_line" src={`${basePath}/libs/images/anim_line.png`} /></span>
          </div>
          {/* container start */}
          <div className="container">
            {/* row start */}
            <div className="row">
              {/* footer link 1 */}
              <div className="col-lg-4 col-md-6 col-12">
                <div className="abt_side">
                  <div className="logo">
                    <img src={`${basePath}/libs/images/SmydataLogo.png`} alt="image" />
                  </div>
                  <ul>
                    <li><a href="#">17350 State Hwy 249, Ste 220
                      <br />#10108 Houston, Texas 77064</a></li>
                    <li><a href="#">info@smydata.com</a></li>
                    <li><a href="#">+1 214-(884)-5649</a></li>
                  </ul>
                  <ul className="social_media">
                    <li><a href="https://www.facebook.com/smydata.s.79/"><i className="icofont-facebook"></i></a></li>
                    {/* <li><a href="#"><i className="icofont-twitter"></i></a></li> */}
                    <li><a href="https://www.linkedin.com/company/smydata/?viewAsMember=true"><i className="icofont-instagram"></i></a></li>
                    {/* <li><a href="#"><i className="icofont-pinterest"></i></a></li> */}
                  </ul>
                </div>
              </div>
              {/* footer link 2 */}
              <div className="col-lg-3 col-md-6 col-12">
                <div className="links">
                  <h3>Useful Links</h3>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Solutions</a></li>
                    <li><a href="#">Industries</a></li>
                    <li><a href="#">Contact us</a></li>
                  </ul>
                </div>
              </div>
              {/* footer link 3 */}
              <div className="col-lg-3 col-md-6 col-12">
                <div className="links">
                  <h3>Help &amp; Suport</h3>
                  <ul>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">How it works</a></li>
                    <li><a href="#">Terms &amp; conditions</a></li>
                    <li><a href="#">Privacy policy</a></li>
                  </ul>
                </div>
              </div>
              {/* footer link 4 */}
              <div className="col-lg-2 col-md-6 col-12">
                <div className="try_out">
                  {/* <h3>Let's Try Out</h3> */}
                  {/* <ul className="app_btn">
                    <li>
                      <a href="#">
                        <img alt="image" src={`${basePath}/libs/images/appstore_blue.png`} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img alt="image" src={`${basePath}/libs/images/googleplay_blue.png`} />
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
            {/* row end */}
          </div>
          {/* container end */}
        </div>
        {/* last footer */}
        <div className="bottom_footer">
          {/* container start */}
          <div className="container">
            {/* row start */}
            <div className="row">
              <div className="col-md-6">
                <p>© Copyrights 2025. All rights reserved.</p>
              </div>
              <div className="col-md-6">
                <p className="developer_text">Design &amp; developed by <a href="https://smydata.in" target="blank">Smydata</a></p>
              </div>
            </div>
            {/* row end */}
          </div>
          {/* container end */}
        </div>
        {/* go top button */}
        <div className="go_top">
          <span>
            <img alt="image" src={`${basePath}/libs/images/go_top.png`} /></span>
        </div>
      </footer>
    </>
  );
}
