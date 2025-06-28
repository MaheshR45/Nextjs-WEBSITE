'use client';

import { basePath } from "@/base-config";

export default function DemoSectionContact() {
    return (
        <>
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
                            <h2>Ready to see your products in 3D?</h2>
                            <p>
                                Book a live demo and watch us transform one of your SKUs—free—in
                                under 48 hours. Questions?
                                <br /> Call +1-512-555-0199 or pop open the chat bubble anytime.
                            </p>
                        </div>
                        <a href="#" className="btn white_btn">
                            CONTACT US NOW
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}