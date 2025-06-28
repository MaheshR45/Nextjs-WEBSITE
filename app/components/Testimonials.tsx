
'use client';
export default function Testimonials() {
  return (
    <>
      <section className="row_am testimonial_section">
        {/* container start */}
        <div className="container">
          <div className="section_title" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500">
            {/* h2 */}
            <h2>What our <span>customer say</span></h2>
            {/* p */}
            <p>Lorem Ipsum is simply dummy text of the printing and typese tting <br /> indus orem Ipsum has beenthe
              standard dummy.</p>
          </div>
          <div className="testimonial_block" data-aos="fade-in" data-aos-duration="1500">
            <div className="owl-carousel owl-theme" id="testimonial_slider">
              {/* user 1 */}
              <div className="item">
                <div className="testimonial_slide_box">
                  <div className="rating">
                    <span><i className="icofont-star"></i></span>
                    <span><i className="icofont-star"></i></span>
                    <span><i className="icofont-star"></i></span>
                    <span><i className="icofont-star"></i></span>
                    <span><i className="icofont-star"></i></span>
                  </div>
                  <p className="review">
                    “ Lorem Ipsum is simply dummy text of the printing and typese tting us orem Ipsum has been lorem
                    beenthe standar dummy. ”
                  </p>
                  <div className="testimonial_img">
                    <img alt="image" src="/libs/images/testimonial_user1.png" />
                  </div>
                  <h3>Shayna John</h3>
                  <span className="designation">Careative inc</span>
                </div>
              </div>
              {/* user 2 */}
              <div className="item">
                <div className="testimonial_slide_box">
                  <div className="rating">
                    <span><i className="icofont-star"></i></span>
                    <span><i className="icofont-star"></i></span>
                    <span><i className="icofont-star"></i></span>
                    <span><i className="icofont-star"></i></span>
                    <span><i className="icofont-star"></i></span>
                  </div>
                  <p className="review">
                    “ Lorem Ipsum is simply dummy text of the printing and typese tting us orem Ipsum has been lorem
                    beenthe standar dummy. ”
                  </p>
                  <div className="testimonial_img">
                    <img alt="image" src="/libs/images/testimonial_user2.png" />
                  </div>
                  <h3>Willium Den</h3>
                  <span className="designation">Careative inc</span>
                </div>
              </div>
              {/* user 3 */}
              <div className="item">
                <div className="testimonial_slide_box">
                  <div className="rating">
                    <span><i className="icofont-star"></i></span>
                    <span><i className="icofont-star"></i></span>
                    <span><i className="icofont-star"></i></span>
                    <span><i className="icofont-star"></i></span>
                    <span><i className="icofont-star"></i></span>
                  </div>
                  <p className="review">
                    “ Lorem Ipsum is simply dummy text of the printing and typese tting us orem Ipsum has been lorem
                    beenthe standar dummy. ”
                  </p>
                  <div className="testimonial_img">
                    <img alt="image" src="/libs/images/testimonial_user3.png" />
                  </div>
                  <h3>Cyrus Stephen</h3>
                  <span className="designation">Careative inc</span>
                </div>
              </div>
            </div>
            {/* total review */}
            <div className="total_review">
              <div className="rating">
                <span><i className="icofont-star"></i></span>
                <span><i className="icofont-star"></i></span>
                <span><i className="icofont-star"></i></span>
                <span><i className="icofont-star"></i></span>
                <span><i className="icofont-star"></i></span>
                <p>5.0 / 5.0</p>
              </div>
              <h3>2578</h3>
              <a href="#">TOTAL USER REVIEWS <i className="icofont-arrow-right"></i></a>
            </div>
            {/* avtar faces */}
            <div className="avtar_faces">
              <img alt="image" src="/libs/images/avtar_testimonial.png" />
            </div>
          </div>
        </div>
        {/* container end */}
      </section>
    </>
  );
}
