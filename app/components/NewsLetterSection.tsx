'use client';

import { usePathname } from "next/navigation";

export default function NewsLetterSection() {
    const pathname = usePathname();
    // Determine if current page is home
    const excludeMenusList = ['/contact', '/industries', '/vision-systems', '/ai-agents'];
    const isContactPage = excludeMenusList.includes(pathname);
    return (
        <>
            {!isContactPage && (
                <>
                    {/* News-Letter-Section-Start */}
                    <section className="newsletter_section">
                        {/* container start */}
                        <div className="container">
                            <div className="newsletter_box">
                                <div className="section_title mb-3" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="100">
                                    {/* h2 */}
                                    <h2>Ready to Build the Next-Gen Experience?</h2>
                                    {/* p */}
                                    <p className="sub-title"><span>Book a Live Demo</span> and see how SmyData turns bold ideas into business results - usually in less than 30 days.</p>
                                    <p>
                                        <em> Prefer to talk first? Call us at +1 214-(884)-5649 or open the chat bubble anytime.</em>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* container end */}
                    </section>
                    {/* News-Letter-Section-end */}
                </>)}
        </>
    )
}