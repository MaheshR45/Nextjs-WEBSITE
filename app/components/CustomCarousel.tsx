'use client';

import { basePath } from "@/base-config";
import _3DModelComponent from "./_3DModelContent";
import { useEffect } from "react";

export default function CustomCarousel() {

    const carouselList = [ 
        {
            active: true,
            imgUrl: `${basePath}/libs/images/bg-img1.jpeg`,
            title: "Turn Every Product Into a <span>3D Story</span>",
            caption: "Launch pixel-perfect 3D models that shoppers can spin, zoom, and drop into their own space—right from your current PIM or e-commerce stack.",
            btn: {
                label: "See 3D in Action",
                link: ""
            }
        },
        {
            active: false,
            imgUrl: `${basePath}/libs/images/bg-img2.jpeg`,
            title: "Step into Tomorrow: <span>Explore Extended Reality Today</span>",
            caption: "Transforming Experiences with 3D, AR, VR, and More—Where Imagination Meets Innovation.",
            btn: {
                label: "Book an XR Demo",
                link: ""
            }
        },
        {
            active: false,
            imgUrl: `${basePath}/libs/images/bg-img3.jpeg`,
            title: "Empower Your Team: <span> Unleash AI Agents </span>",
            caption: "Computer-vision QA and AI agents keep an eye on quality, safety, and customer questions 24X7, so you can focus on the big picture.",
            btn: {
                label: "Meet the AI Workforce",
                link: ""
            }
        },
        {
            active: false,
            imgUrl: `${basePath}/libs/images/bg-img3.jpeg`,
            title: "Experience Real Estate:  <span> Navigate with 3D and AR/VR</span>",
            caption: "Explore Properties Virtually and Visualize Your Dream Home in Augmented and Virtual Reality.",
            btn: {
                label: "Meet the AI Workforce",
                link: ""
            }
        }
    ];

    // Bootstrap Carousel dependency (if needed)
    // useEffect(() => {
    //     if (typeof window !== "undefined" && !!basePath) {
    //         const bootstrapUrl = `${basePath}/libs/js/bootstrap.min.js`;
    //         require(bootstrapUrl);
    //     }
    // }, [basePath]);

    return (
        <section id="hero">
            <div className="hero-container">
                <div
                    id="heroCarousel"
                    className="carousel slide carousel-fade"
                    data-ride="carousel"
                    data-auto="false"
                >
                    <ol className="carousel-indicators" id="hero-carousel-indicators">
                        <li data-target="#heroCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#heroCarousel" data-slide-to="1"></li>
                        <li data-target="#heroCarousel" data-slide-to="2"></li>
                        <li data-target="#heroCarousel" data-slide-to="3"></li>
                    </ol>

                    <div className="carousel-inner" role="listbox">

                        {carouselList.map((carouselItem, idx) => (

                            <div key={`carouselItem-${idx}`} className={`carousel-item${idx === 0 ? " active" : ""}`}>
                                <img key={`carouselItemImg-${idx}`} src={carouselItem.imgUrl} alt="Los Angeles" style={{ width: "100%", height: '100vh' }} />
                                <div key={`carouselItemCaption-${idx}`} className="carousel-caption">
                                    {idx === 0
                                        ?
                                        (<div className="carousel-content-img">
                                            <_3DModelComponent />
                                        </div>) :
                                        (<div className="carousel-content-img"></div>)
                                    }

                                    <h2 dangerouslySetInnerHTML={{ __html: carouselItem.title }} id={idx > 0 ? "pageTitleWeb" : undefined}></h2>
                                    <p>{carouselItem.caption}</p>
                                    <a
                                        href={carouselItem.btn.link || "#"}
                                        className="btn puprple_btn aos-init aos-animate"
                                    >
                                        {carouselItem.btn.label}
                                    </a>
                                </div>
                            </div>

                        ))}

                    </div>

                </div>

                <a
                    className="carousel-control-prev"
                    href="#heroCarousel"
                    role="button"
                    data-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon icofont-rounded-left"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#heroCarousel"
                    role="button"
                    data-slide="next"
                >
                    <span
                        className="carousel-control-next-icon icofont-rounded-right"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </section >
    );
}


//  <div
//         key={`carouselItem-${idx}`}
//         className={`carousel-item ${idx === 0 ? "active" : ""}`}
//         style={{ backgroundImage: `url(${carouselItem.imgUrl})` }}
//     >
//         <div className="carousel-container">
//             {idx === 0
//                 ?
//                 (<div className="carousel-content-img">
//                     <_3DModelComponent />
//                 </div>) :
//                 ""
//             }

//             <div className="carousel-content container">
//                 <h2 data-aos="fade-out" data-aos-duration="1500" dangerouslySetInnerHTML={{ __html: carouselItem.title }}></h2>
//                 <p>{carouselItem.caption}</p>
//                 <a
//                     href={carouselItem.btn.link || "#"}
//                     className="btn puprple_btn aos-init aos-animate"
//                     data-aos="fade-in"
//                     data-aos-duration="1500"
//                 >
//                     {carouselItem.btn.label}
//                 </a>
//             </div>
//         </div>
//     </div>