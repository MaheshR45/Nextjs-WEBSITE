export const _HomeFaqData = {
  caption:
    "",
  faqs : [
  {
    question: "What industries do you serve?",
    answer:
      "SmyData specializes in solutions for E-Commerce, Manufacturing, Automotive, Healthcare, Education, and Real Estate sectors.",
  },
  {
    question: "How quickly can I implement your solutions?",
    answer:
      "Implementation times vary based on the complexity of the project. Typically, we aim for rapid deployment within weeks, ensuring minimal disruption to your operations.",
  },
  {
    question: "Are your solutions customizable to our specific needs?",
    answer:
      "Yes, our solutions are highly customizable. We tailor our technologies to fit your unique business requirements, ensuring maximum efficiency and impact.",
  },
  {
    question: "How secure is my data with SmyData?",
    answer:
      "We prioritize data security. All data is encrypted and handled with strict adherence to industry standards and regulations, ensuring your information remains safe and confidential.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, we offer comprehensive support and maintenance services post-implementation. Our team is dedicated to ensuring your systems run smoothly and effectively over time.",
  },
],
};
export const _3dCatalogFaqData = {
  caption:
    "",
  faqs: [
    {
      question: "How long does it take to create a 3D model of one product?",
      answer:
        "Most consumer-goods SKUs are production-ready in 24–48 hours once we have photos or CAD files.",
    },
    {
      question: "Will 3D models slow down my site?",
      answer:
        "No. Each model is optimized for WebGL and served via our CDN, adding less than 0.5 s to page load on 4G.",
    },
    {
      question: "Can I reuse the same asset for AR try-on or VR showrooms?",
      answer:
        "Absolutely. We export to GLB, USDZ, FBX and OBJ, so the identical file powers WebAR, native apps and VR headsets.",
    },
    {
      question: "Do I need special skills to embed the viewer?",
      answer:
        "Just copy-paste a single script tag. Our configurator generates the snippet—no 3D or coding expertise required.",
    },
    {
      question: "How is pricing structured?",
      answer:
        "We charge per processed SKU with volume discounts, plus an optional low-cost CDN hosting plan. Contact sales for a tailored quote.",
    },
  ],
};

export const visionSystems = {
  caption:
    "",
  faqs: [
    {
      question: "Do we need new cameras?",
      answer:
        "Not usually. Any ONVIF-compliant IP camera at 720p or above will work; higher resolution just raises detection accuracy.",
    },
    {
      question: "How accurate is the system?",
      answer:
        "Up to 98% mean average precision for common warehouse objects, even in low-contrast zones, thanks to continuous on-site model tuning.",
    },
    {
      question: "What’s the latency for alerts?",
      answer:
        "Edge inference keeps detection-to-notification under 200 milliseconds—fast enough to trigger warning lights or stop a conveyor.",
    },
    {
      question: "How does it integrate with our WMS?",
      answer:
        "A REST API and event webhooks deliver JSON payloads for counts, locations, and anomaly scores; most clients map them in a day.",
    },
    {
      question: "Is video data secure?",
      answer:
        "All streams are AES-256 encrypted in transit and at rest, with role-based access and optional on-prem storage for sensitive footage.",
    },
  ],
};

export const aiAgents = {
  caption:
    "",
  faqs: [
    {
      question: "How long does it take to launch a conversational agent?",
      answer:
        "Most brands go live in two weeks: one for intent training, one for channel integration and testing.",
    },
    {
      question: "Can agents work with our existing CRM or ERP?",
      answer:
        "Yes. REST and GraphQL APIs, pre-built connectors, and webhooks let agents read/write to Salesforce, SAP, Zendesk, and more.",
    },
    {
      question: "What languages are supported?",
      answer:
        "Over 120, including right-to-left scripts. The same model can reply in multiple languages within a single conversation.",
    },
    {
      question: "How do you keep recommendations relevant?",
      answer:
        "Continuous online learning updates user vectors after every click, purchase, or chat, ensuring suggestions adapt in real time.",
    },
    {
      question: "Is data secure and compliant?",
      answer:
        "All traffic is TLS-encrypted, PII is tokenized at rest, and we’re SOC 2 Type II and GDPR-ready. On-prem deployment is available for regulated sectors.",
    },
  ],
};

export const _AugmentRealityFaqData = {
  caption:
    "",
  faqs: [
    {
      question: "Do shoppers need a special app?",
      answer:
        "No. Our WebAR viewer runs inside Safari, Chrome, and Firefox; the same assets power native apps if you already have one.",
    },
    {
      question: "What devices are supported?",
      answer:
        "Any recent iOS or Android phone with ARKit/ARCore (roughly 2018 onward) plus desktop browsers that support WebXR.",
    },
    {
      question: "How accurate is the virtual try-on sizing?",
      answer:
        "Face, foot, and body landmarks deliver sub-millimetre accuracy for eyewear and footwear, and size-grid mapping for garments.",
    },
    {
      question: "How quickly can we go live?",
      answer:
        "Copy-paste a five-line script and point to your GLB/USDZ file—most brands launch their first AR SKU in a single sprint.",
    },
    {
      question: "Which metrics can we track?",
      answer:
        "Views, dwell time, rotations, try-ons, add-to-cart, and checkout conversions—all surfaced in a real-time dashboard or via API.",
    },
  ],
};

export const _VirtualRealityFaqData = {
  caption:
    "",
  faqs: [
    {
      question: "What headsets do you support?",
      answer:
        "Meta Quest 2/3/Pro, Pico, Vive, and any WebXR-capable browser—no vendor lock-in.",
    },
    {
      question: "How long does it take to create a training module?",
      answer:
        "A basic five-step procedure can be live in under 3 weeks using existing CAD or 3D scans; complex curricula roll out incrementally sprint-by-sprint.",
    },
    {
      question: "Can we integrate LMS or HR systems?",
      answer:
        "Yes. Completion records, scores, and heatmap data push to SCORM, xAPI, or custom APIs so HR and compliance dashboards stay in sync.",
    },
    {
      question: "What bandwidth is required?",
      answer:
        "Optimised asset streaming keeps a single session under 20 Mbps; offline mode caches content for field sites with limited connectivity.",
    },
    {
      question: "How secure is the environment for sensitive IP?",
      answer:
        "All assets are AES-256 encrypted at rest and in transit, with role-based access controls and optional on-prem deployment for regulated industries.",
    },
  ],
};

export const _MetaverseFaqData = {
  caption:
    "",
  faqs: [
    {
      question: "Do visitors need a VR headset?",
      answer:
        "No. The environment streams in a standard browser; headsets add depth but aren’t mandatory.",
    },
    {
      question: "How long does it take to create a digital twin of a facility?",
      answer:
        "A small retail floor is live in about two weeks; larger factories average four to six, depending on scan data.",
    },
    {
      question: "Can I sell products directly inside the space?",
      answer:
        "Yes. Our commerce API connects to Shopify, Magento, or custom carts so avatars can configure, add to basket, and check out without leaving.",
    },
    {
      question: "How many concurrent users can the platform handle?",
      answer:
        "Our micro-service architecture elastically scales from a private 20-person briefing to 10,000-seat global keynotes.",
    },
    {
      question: "What data do I get back?",
      answer:
        "Session counts, dwell time, hotspot clicks, avatar paths, and conversion events—exportable via REST or pushed to your BI stack.",
    },
  ],
};


