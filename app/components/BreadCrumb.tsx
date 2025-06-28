import { basePath } from "@/base-config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export interface BreadCrumbProps {
    link: string;
    menu: string;
    caption?: string;
    bgImageName?: string;
}

export default function BreadCrumbSection({ link, menu, caption, bgImageName }: BreadCrumbProps) {
    const bgUrl = `${basePath}/libs/images/${bgImageName}`;

    const pathname = usePathname();
    const isContact = pathname.includes('/contact');
    const [isShow, setIsshow] = useState(true);

    useEffect(() => {
        if (isContact) {
            setIsshow(false);
        } else {
            setIsshow(true);
        }
    }, [isContact]);

    return (
        <>
            {
                isShow ?
                    (<section
                        className="d-flex align-items-center page-hero inner-page-hero"
                        id="page-hero"
                    >
                        <div
                            id="pageBannerImg"
                            className="overlay-photo-image-bg parallax"
                            data-bg-img={`url(${bgUrl}`}
                            data-bg-opacity="1"
                            style={
                                {
                                    backgroundImage: `url(${bgUrl})`,
                                    opacity: 1
                                }
                            }></div>
                        <div
                            className="overlay-color"
                            data-bg-opacity=".35"
                            style={{ opacity: '0.35' }}
                        ></div>
                        <div className="banner-caption d-none d-sm-block">
                            <h4 id="pageTitleWeb">{menu}</h4>
                            <p
                                className="wow fadeInUp"
                                data-wow-delay=".2s"
                                style={{
                                    visibility: 'visible',
                                    animationDelay: '0.2s',
                                    animationName: 'fadeInUp'
                                }}
                                id="pageCaptionWeb"
                            >
                                {caption}
                            </p>
                            <div className="mb-2 tryNowBtn" style={{ display: 'inline-block' }}>
                                <a href={link} className="btn puprple_btn aos-init aos-animate"  data-aos-duration="1500">Book an XR Demo</a>
                            </div>
                        </div>

                        <div className="floating-btn moving_animation">
                            <i className="icofont-bubble-down plus-icon"></i>
                        </div>
                    </section>
                    ) :

                    (
                        <div className="bred_crumb">
                            <div className="container">
                                <span className="banner_shape1"> <img src={`${basePath}/libs/images/banner-shape1.png`} alt="image" /> </span>
                                <span className="banner_shape2"> <img src={`${basePath}/libs/images/banner-shape2.png`} alt="image" /> </span>
                                <span className="banner_shape3"> <img src={`${basePath}/libs/images/banner-shape3.png`} alt="image" /> </span>

                                <div className="banner_text">
                                    <h1>{menu}</h1>
                                    <p>{caption}</p>
                                    <ul>
                                        <li>
                                            <Link href='/'>Home</Link>
                                        </li>
                                        <li><span>»</span></li>
                                        <li><Link href={link}>{menu}</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

        </>
    );
}