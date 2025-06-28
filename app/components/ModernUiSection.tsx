'use client';

import { basePath } from "@/base-config";

export default function ModernUiSection() {
    return (
        <>
            {/* ModernUI-Section-Start */}
            <section className="row_am modern_ui_section">
                {/* container start */}
                <div className="container">
                    {/* row start */}
                    <div className="row">
                        <div className="col-lg-6">
                            {/* UI content */}
                            <div className="ui_text">
                                <div className="section_title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
                                    <h2>Beautiful design with <span>modern UI</span></h2>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the
                                        industrys standard dummy text ever since the when an unknown printer took a galley of type and.
                                    </p>
                                </div>
                                <ul className="design_block">
                                    <li data-aos="fade-up" data-aos-duration="1500">
                                        <h4>Carefully designed</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and type esetting industry lorem Ipsum has.</p>
                                    </li>
                                    <li data-aos="fade-up" data-aos-duration="1500">
                                        <h4>Seamless Sync</h4>
                                        <p>Simply dummy text of the printing and typesetting inustry lorem Ipsum has Lorem dollar summit.</p>
                                    </li>
                                    <li data-aos="fade-up" data-aos-duration="1500">
                                        <h4>Access Drive</h4>
                                        <p>Printing and typesetting industry lorem Ipsum has been the industrys standard dummy text of type
                                            setting.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/* UI Image */}
                            <div className="ui_images" data-aos="fade-in" data-aos-duration="1500">
                                <div className="left_img">
                                    <img className="moving_position_animatin" src={`${basePath}/libs/images/modern01.png`} alt="image" />
                                </div>
                                {/* UI Image */}
                                <div className="right_img">
                                    <img className="moving_position_animatin" src={`${basePath}/libs/images/secure_data.png`} alt="image" />
                                    <img className="moving_position_animatin" src={`${basePath}/libs/images/modern02.png`} alt="image" />
                                    <img className="moving_position_animatin" src={`${basePath}/libs/images/modern03.png`} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* row end */}
                </div>
                {/* container end */}
            </section>
            {/* ModernUI-Section-end */}
        </>
    )
} 