
'use client';

import { basePath } from "@/base-config";
import Link from "next/link";
import { stories } from "../data/menus";

export default function Features() {  

  return (
    <>
      <section className="row_am latest_story blog_list_story" id="blog">
        {/* container start */}
        <div className="container">
          <div className="section_title" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500">
            <h2> <span> Solutions </span> </h2>
            <p>Immersive Tech Meets Intelligent Automation — explore how our 3D, AR/VR, AI, and vision-driven solutions transform every step of your digital journey.</p>
          </div>
          
          <div className="row d-flex align-items-stretch">
            {stories.map((story, idx) => (
              <div key={idx + 'story'} className="col-md-4 pb-3 pt-3">
                <div
                  className="story_box h-100"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="story_img">
                    <img src={`${basePath}${story.imgSrc}`} alt={story.title} />
                    <span>{story.timeAgo}</span>
                  </div>
                  <div className="story_text">
                    <h3>{story.title}</h3>
                    <h6 className="story-caption">{story.caption}</h6>
                    <p>{story.description}</p>
                    <Link href={story.link}>READ MORE</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
        {/* container end */}
      </section>
    </>
  );
}
