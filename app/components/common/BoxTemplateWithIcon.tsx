'use client';

import { basePath } from "@/base-config";

export interface BoxTemaplte {
    title: string;
    description: string;
    link?: string;
    imgUrl?: string;
}

export default function BoxTemplateWithIcon({ title, imgUrl, description }: BoxTemaplte) {
    return (
        <>
            <div
                className="why_box"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="100"
            >
                <div className="icon">
                    <img
                        src={`${basePath}/libs/images/${imgUrl}`}
                        alt="image"
                    />
                </div>
                <div className="text">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}