
'use client';
export default function Screenshots() {
  return (
    <>
      <section className="row_am interface_section">
        {/* container start */}
        <div className="container-fluid">
          <div className="section_title" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500">
            {/* h2 */}
            <h2>Beautifull <span>interface</span></h2>
            {/* p */}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typese tting <br /> indus orem Ipsum has beenthe standard dummy.
            </p>
          </div>
          {/* screen slider start */}
          <div className="screen_slider">
            <div className="owl-carousel owl-theme" id="screen_slider">
              <div className="item">
                <div className="screen_frame_img">
                  <img alt="image" src="/libs/images/screen-1.png" />
                </div>
              </div>
              <div className="item">
                <div className="screen_frame_img">
                  <img alt="image" src="/libs/images/screen-2.png" />
                </div>
              </div>
              <div className="item">
                <div className="screen_frame_img">
                  <img alt="image" src="/libs/images/screen-3.png" />
                </div>
              </div>
              <div className="item">
                <div className="screen_frame_img">
                  <img alt="image" src="/libs/images/screen-4.png" />
                </div>
              </div>
              <div className="item">
                <div className="screen_frame_img">
                  <img alt="image" src="/libs/images/screen-5.png" />
                </div>
              </div>
              <div className="item">
                <div className="screen_frame_img">
                  <img alt="image" src="/libs/images/screen-3.png" />
                </div>
              </div>
            </div>
          </div>
          {/* screen slider end */}
        </div>
        {/* container end */}
      </section>
    </>
  );
}
