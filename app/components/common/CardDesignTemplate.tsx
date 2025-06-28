"use client";

import { basePath } from "@/base-config";

export interface CardDesignTemplate {
  title: string;
  description: string;
  link: string;
  keyPoints: string[];
  isImageRight?: boolean;
}

export default function CardDesignTemplate({
  title,
  description,
  link,
  keyPoints,
  isImageRight = false, // default: image left, content right
}: CardDesignTemplate) {
  return (
    <>
      <div className="row pt-4 pb-4">
        <div
          className={`col-lg-6 ${isImageRight ? "order-lg-2" : "order-lg-1"}`}
        >
          {/* about images  */}
          <div
            className="about_img aos-init aos-animate"
            data-aos="fade-in"
            data-aos-duration="1500"
          >
            <div className="frame_img">
              <img
                className="moving_position_animatin"
                src={`${basePath}/libs/images/about-frame.png`}
                alt="image"
              />
            </div>
            <div className="screen_img">
              <img
                className="moving_animation"
                src={`${basePath}/libs/images/about-screen.png`}
                alt="image"
              />
            </div>
          </div>
        </div>
        <div
          className={`col-lg-6 ${isImageRight ? "order-lg-1" : "order-lg-2"}`}
        >
          <div className="about_text">
            <div
              className="section_title aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="100"
            >
              {/* Some awesome words <span>about app.</span> */}
              <h2>{title}</h2>
              <p> {description} </p>

              <ul className="list">
                {keyPoints.map((keyPoint, pos) => (
                  <li
                    key={"keyPoint" + pos}
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    className="aos-init aos-animate"
                  >
                    <i className="icofont-verification-check"></i> {keyPoint}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={link}
              className="btn puprple_btn aos-init aos-animate"
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
