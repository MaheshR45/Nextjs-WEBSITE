'use client';

import { industries } from "../data/menus";

export default function IndustrySnapshots() {

    return (
        <section className="row_am review_list_section" id="industries">
            <div className="container">
                <div className="section_title" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500">
                    <h2><span>Industry</span> Snapshots</h2>
                    <p>Revolutionizing Industries: Embracing 3D, AR/VR to Redefine Experiences and Propel Innovation Forward.</p>
                </div>

                <div className="row d-flex align-items-stretch">
                    {industries.map((industry, idx) => (
                        <div key={idx} className="col-lg-4 col-md-6 pb-3 pt-3">
                            <div className="review_box h-100">
                                <h3><span><i className="icofont-star"></i></span> {industry.title}</h3>
                                {industry.description.split('\n').map((line, index) => {
                                     const formattedLine = line.replace(/(3D:|AR\/VR:|AI Agents:)/g, '<span style="font-weight: 500;">$1</span>');
                                    return (
                                        <p key={index} dangerouslySetInnerHTML={{ __html: line.startsWith('•') ? `<span style='display:block; margin-left:15px;'><i class='icofont-check-circled' style='margin-right:8px;color:blue'></i>${formattedLine.replace('•','').trim()}</span>` : formattedLine }}></p>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
