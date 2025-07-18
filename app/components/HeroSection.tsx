'use client';

import { basePath } from "@/base-config";

export default function HeroSection() {
    return (
        <>
            <div className="page-frame bg-pale-primary">
                <div className="content-wrapper">
                    <section className="video-wrapper bg-overlay bg-overlay-gradient px-0 mt-0 min-vh-100">
                        <video
                            poster={`${basePath}/libs/images/photos/movie2.jpg`}
                            src={`${basePath}/libs/media/movie2.mp4`}
                            autoPlay
                            loop
                            playsInline
                            muted
                            className="w-100 h-100 object-cover"
                        ></video>

                        <div className="video-content">
                            <div className="container text-center">
                                <div className="row">
                                    <div className="col-lg-8 col-xl-6 text-center text-white mx-auto">
                                        <h1 className="display-1 fs-54 text-white mb-5">
                                            <span className="rotator-zoom">
                                                Rapid Solutions, Innovative Thinking, Top-Notch Support
                                            </span>
                                        </h1>
                                        <p className="lead fs-24 mb-0 mx-xxl-8">
                                            We are a digital agency specializing in web design, mobile development and SEO optimization.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="wrapper bg-light">
                        <div className="container py-14 py-md-16">
                            <div className="row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center mb-10 mb-md-12">
                                <div className="col-lg-6">
                                    <div className="row gx-md-5 gy-5">
                                        <div className="col-md-6">
                                            <figure className="rounded">
                                                <img
                                                    src={`${basePath}/libs/images/photos/g12.jpg`}
                                                    srcSet={`${basePath}/libs/images/photos/g12@2x.jpg 2x`}
                                                    alt=""
                                                />
                                            </figure>
                                        </div>
                                        <div className="col-md-6 align-self-end">
                                            <figure className="rounded">
                                                <img
                                                    src={`${basePath}/libs/images/photos/g13.jpg`}
                                                    srcSet={`${basePath}/libs/images/photos/g13@2x.jpg 2x`}
                                                    alt=""
                                                />
                                            </figure>
                                        </div>
                                        <div className="col-12">
                                            <figure className="rounded mx-md-5">
                                                <img
                                                    src={`${basePath}/libs/images/photos/g11.jpg`}
                                                    srcSet={`${basePath}/libs/images/photos/g11@2x.jpg 2x`}
                                                    alt=""
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <h2 className="fs-16 text-uppercase text-primary mb-3">Who Are We?</h2>
                                    <h3 className="display-3 mb-5">Company that believes in the power of creative strategy.</h3>
                                    <p className="mb-6">
                                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio,
                                        dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl
                                        consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                        Aenean lacinia bibendum nulla sed.
                                    </p>
                                    <div className="row align-items-center counter-wrapper gy-6">
                                        <div className="col-md-6">
                                            <h3 className="counter counter-lg mb-1">99.7%</h3>
                                            <h5 className="mb-0">Customer Satisfaction</h5>
                                        </div>
                                        <div className="col-md-6">
                                            <h3 className="counter counter-lg mb-1">12x</h3>
                                            <h5 className="mb-0">Revenue Growth</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row gx-lg-8 gx-xl-12 gy-6 mb-7 mb-md-9">
                                <div className="col-lg-4">
                                    <div className="d-flex flex-row">
                                        <div>
                                            <div className="icon btn btn-block pe-none btn-soft-primary me-4 w-10 h-10">
                                                <span className="number fs-18">1</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3>Our Vision</h3>
                                            <p className="mb-2">
                                                Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget. Fusce dapibus
                                                tellus.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="d-flex flex-row">
                                        <div>
                                            <div className="icon btn btn-block pe-none btn-soft-primary me-4 w-10 h-10">
                                                <span className="number fs-18">2</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3>Our Mission</h3>
                                            <p className="mb-2">
                                                Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet. Sed posuere consectetur.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="d-flex flex-row">
                                        <div>
                                            <div className="icon btn btn-block pe-none btn-soft-primary me-4 w-10 h-10">
                                                <span className="number fs-18">3</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3>Our Values</h3>
                                            <p className="mb-2">
                                                Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna
                                                scelerisque.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <a href="#" className="btn btn-primary">
                                    More Details
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="wrapper bg-light">
                        <div className="container py-15 py-md-17">
                            <div className="row text-center mb-10">
                                <div className="col-md-10 col-lg-9 col-xxl-8 mx-auto">
                                    <h2 className="fs-16 text-uppercase text-muted mb-3">What We Do?</h2>
                                    <h3 className="display-3 px-xl-10 mb-0">The service we offer is specifically designed to meet your needs.</h3>
                                </div>
                            </div>
                            <div className="row gx-lg-0 gy-10 mb-15 mb-md-17 align-items-center">
                                <div className="col-lg-6">
                                    <figure className="rounded mb-0"><img className="img-fluid" src={`${basePath}/libs/images/illustrations/ui4.png`} srcSet={`${basePath}/libs/images/illustrations/ui4@2x.png 2x`} alt="" /></figure>
                                </div>
                                <div className="col-lg-5 ms-auto">
                                    <h3 className="fs-28 mb-3">Web Design</h3>
                                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna risus varius.</p>
                                    <ul className="icon-list bullet-bg bullet-soft-primary">
                                        <li><span><i className="uil uil-check"></i></span><span>Aenean quam ornare curabitur blandit.</span></li>
                                        <li><span><i className="uil uil-check"></i></span><span>Nullam quis risus eget urna mollis ornare leo.</span></li>
                                        <li><span><i className="uil uil-check"></i></span><span>Etiam porta euismod mollis natoque ornare.</span></li>
                                    </ul>
                                    <a href="#" className="btn btn-soft-primary rounded-pill mt-2 mb-0">More Details</a>
                                </div>
                            </div>
                            <div className="row gx-lg-0 gy-10 mb-15 mb-md-17 align-items-center">
                                <div className="col-lg-6 order-lg-2 ms-auto">
                                    <figure className="rounded mb-0"><img className="img-fluid" src={`${basePath}/libs/images/illustrations/ui1.png`} srcSet={`${basePath}/libs/images/illustrations/ui1@2x.png 2x`} alt="" /></figure>
                                </div>
                                <div className="col-lg-5">
                                    <h3 className="fs-28 mb-3">Mobile Development</h3>
                                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna risus varius.</p>
                                    <ul className="icon-list bullet-bg bullet-soft-primary">
                                        <li><span><i className="uil uil-check"></i></span><span>Aenean quam ornare curabitur blandit.</span></li>
                                        <li><span><i className="uil uil-check"></i></span><span>Nullam quis risus eget urna mollis ornare leo.</span></li>
                                        <li><span><i className="uil uil-check"></i></span><span>Etiam porta euismod mollis natoque ornare.</span></li>
                                    </ul>
                                    <a href="#" className="btn btn-soft-primary rounded-pill mt-2 mb-0">More Details</a>
                                </div>
                            </div>
                            <div className="row gx-lg-0 gy-10 align-items-center">
                                <div className="col-lg-6">
                                    <figure className="rounded mb-0"><img className="img-fluid" src={`${basePath}/libs/images/illustrations/ui5.png`} srcSet={`${basePath}/libs/images/illustrations/ui5@2x.png 2x`} alt="" /></figure>
                                </div>
                                <div className="col-lg-5 ms-auto">
                                    <h3 className="fs-28 mb-3">SEO Optimization</h3>
                                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna risus varius.</p>
                                    <ul className="icon-list bullet-bg bullet-soft-primary">
                                        <li><span><i className="uil uil-check"></i></span><span>Aenean quam ornare curabitur blandit.</span></li>
                                        <li><span><i className="uil uil-check"></i></span><span>Nullam quis risus eget urna mollis ornare leo.</span></li>
                                        <li><span><i className="uil uil-check"></i></span><span>Etiam porta euismod mollis natoque ornare.</span></li>
                                    </ul>
                                    <a href="#" className="btn btn-soft-primary rounded-pill mt-2 mb-0">More Details</a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="wrapper bg-light">
                        <div className="container py-14 py-md-16">
                            <h2 className="display-4 mb-3 text-center">FAQ</h2>
                            <p className="lead text-center mb-10 px-md-16 px-lg-0">
                                If you don't see an answer to your question, you can send us an email from our contact form.
                            </p>
                            <div className="row">
                                <div className="col-lg-12 mb-0">
                                    <div id="accordion-1" className="accordion-wrapper">
                                        {[
                                            {
                                                id: 1,
                                                question: "Can I cancel my subscription?",
                                            },
                                            {
                                                id: 2,
                                                question: "Which payment methods do you accept?",
                                            },
                                            {
                                                id: 3,
                                                question: "How can I manage my Account?",
                                            },
                                            {
                                                id: 4,
                                                question: "Is my credit card information secure?",
                                            },
                                        ].map((item) => (
                                            <div className="card accordion-item" key={item.id}>
                                                <div className="card-header" id={`accordion-heading-1-${item.id}`}>
                                                    <button
                                                        className="collapsed"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#accordion-collapse-1-${item.id}`}
                                                        aria-expanded="false"
                                                        aria-controls={`accordion-collapse-1-${item.id}`}
                                                    >
                                                        {item.question}
                                                    </button>
                                                </div>
                                                <div
                                                    id={`accordion-collapse-1-${item.id}`}
                                                    className="collapse"
                                                    aria-labelledby={`accordion-heading-1-${item.id}`}
                                                    data-bs-parent="#accordion-1"
                                                >
                                                    <div className="card-body">
                                                        <p>
                                                            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
                                                            justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus
                                                            magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis
                                                            parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac
                                                            facilisis.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
