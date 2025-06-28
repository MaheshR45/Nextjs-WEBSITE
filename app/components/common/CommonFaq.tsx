"use client";

export interface FaqSection {
  faqList: any[];
  caption: string;
  id: string;
}

export default function CommonFaq({ faqList = [], caption, id }: FaqSection) {
  return (
    <>
      {/* FAQ-Section start */}
      <section className="row_am faq_section">
        {/* container start */}
        <div className="container">
          <div
            className="section_title"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <h2>
              <span>FAQ</span> - Frequently Asked Questions
            </h2>
            <p>{caption}</p>
          </div>

          <div className="faq_panel">
            <div className="accordion" id={id}>
              {faqList.map((faq, pos) => (
                <div
                  key={`faq${pos}`}
                  className="card"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="card-header" id={`heading${pos}`}>
                    <h2 className="mb-0">
                      <button
                        type="button"
                        className={`btn btn-link toggle-btn ${pos === 0 ? "active" : "collapsed"
                          }`}
                        data-toggle="collapse"
                        data-target={`#collapse${pos}`}
                        aria-expanded={pos === 0 ? "true" : "false"}
                        aria-controls={`collapse${pos}`}
                      >
                        <i className={`icon_faq ${pos === 0 ? "icofont-minus" : "icofont-plus"
                          } `}></i> {faq.question}
                      </button>
                    </h2>
                  </div>
                  <div
                    id={`collapse${pos}`}
                    className={`collapse ${pos === 0 ? "show" : ""}`}
                    aria-labelledby={`heading${pos}`}
                    data-parent={`#${id}`}
                  >
                    <div className="card-body">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* container end */}
      </section>
      {/* FAQ-Section end */}
    </>
  );
}
