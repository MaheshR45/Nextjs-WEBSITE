export interface Menu {
  menu: string;
  link: string;
  isActive?: boolean;
}
export interface Menus {
  menu: string;
  link: string;
  isActive?: boolean;
  isBtn?: boolean;
  hasSubmenus?: boolean;
  submenus: Menu[];
}

// 3d model url
// export const _3dModelUrl = "https://trynbuy-vto.s3.amazonaws.com/3dView/index.html";
// export const _3dModelUrl = "https://trynbuy-vto.s3.amazonaws.com/eyewear/index.html";
export const _3dModelUrl = "https://trynbuy-vto.s3.amazonaws.com/jewelry/index.html?DRL_05";

// server setup
// const filePath =".html";
// export const mainRoute = `/index${filePath}`;

// local setup
const filePath ="";
export const mainRoute = `/`;

export const menusList: Menus[] = [
  {
    menu: "Home",
    link: `${mainRoute}`,
    isActive: true,
    hasSubmenus: false,
    submenus: [],
  },
  {
    menu: "Solutions",
    hasSubmenus: true,
    link: "#",
    submenus: [
      {
        menu: "3D Catalog",
        link: `/catalog${filePath}`,
      },
      {
        menu: "Augmented Reality",
        link: `/augmented-reality${filePath}`,
      },
      {
        menu: "Virtual Reality",
        link: `/virtual-reality${filePath}`,
      },
      {
        menu: "Metaverse",
        link: `/metaverse${filePath}`,
      },
      {
        menu: "Vision Systems",
        link: `/vision-systems${filePath}`,
      },
      {
        menu: "AI Agents",
        link: `/ai-agents${filePath}`,
      },
    ],
  },
  {
    menu: "Industries",
    link: `/industries${filePath}`,
    submenus: [],
  },
  {
    menu: "Contact Us",
    link: `/contact${filePath}`,
    submenus: [],
  },
  {
    menu: "GET STARTED",
    link: `/contact${filePath}`,
    isBtn: true,
    submenus: [],
  },
];

interface Story {
  imgSrc: string;
  timeAgo: string;
  title: string;
  caption: string;
  description: string;
  link: string;
}

export const stories: Story[] = [
  {
    imgSrc: "/libs/images/section_3Dcatalog.jpeg",
    timeAgo: "",
    title: "3D Catalogs",
    caption: "Pixels to Profits",
    description:
      "Fast 3D scanning, auto-retopology, and CDN delivery turn flat photos into interactive assets that cut return rates and double time-on-page.",
    link: `/catalog${filePath}`,
  },
  {
    imgSrc: "/libs/images/section_AR.jpeg",
    timeAgo: "",
    title: "Augmented Reality (AR)",
    caption: "Try Before You Buy - Anywhere",
    description:
      "WebAR and in-store kiosks let buyers place furniture, wearables, or machinery at true scale, boosting confidence and average order value.",
    link: `/augmented-reality${filePath}`,
  },
  {
    imgSrc: "/libs/images/section_VR.jpeg",
    timeAgo: "45 min ago",
    title: "Virtual Reality (VR)",
    caption: "Immersion That Pays Off",
    description:
      "VR training and product demos slash onboarding time, reduce physical prototyping costs, and wow stakeholders in one headset-ready package.",
    link: `/virtual-reality${filePath}`,
  },
  {
    imgSrc: "/libs/images/section_METAVERSE.jpeg",
    timeAgo: "",
    title: "Metaverse Spaces",
    caption: "Your Brand's Next Address",
    description:
      "Branded virtual campuses, showrooms, and fan hubs create always-on venues for events, support, and community commerce.",
    link: `/metaverse${filePath}`,
  },
  {
    imgSrc: "/libs/images/section_VS.jpeg",
    timeAgo: "",
    title: "Vision Systems",
    caption: "Eyes on Quality 24/7",
    description:
      "Edge-AI cameras flag defects, verify assembly, and stream analytics straight to your Yes - no specialist required.",
    link: `/vision-systems${filePath}`,
  },
  {
    imgSrc: "/libs/images/section_AIAgent.jpeg",
    timeAgo: "",
    title: "AI Agents",
    caption: "Digital Coworkers, Real Results",
    description:
      "Conversational bots and workflow agents answer questions, route tickets, and trigger tasks, freeing humans for high-value work.",
    link: `/ai-agents${filePath}`,
  },
];

export interface IndustryFeature {
  title: string;
  description: string;
  link: string;
}

export const industries: IndustryFeature[] = [
  {
    title: "E-Commerce & Retail",
    description:
      "• 3D: Product Visualization, Virtual Try-On, Customization Tools\n• AR/VR: Augmented Reality Shopping Experiences, Virtual Showrooms, VR Product Demos\n• AI Agents: Customer Support Chatbots, Personalized Recommendations, Order Management Automation",
    link: "/blog-single",
  },
  {
    title: "Manufacturing & Industrial",
    description:
      "• 3D: Digital Prototyping, 3D Printing Models, Virtual Assembly Lines\n• AR/VR: VR Training Simulations, Augmented Reality Maintenance Guides, Remote Equipment Monitoring\n• AI Agents: Production Monitoring, Quality Control AI, Predictive Maintenance Alerts",
    link: "/blog-single",
  },
  {
    title: "Automotive & Aerospace",
    description:
      "• 3D: Vehicle Configurators, Interior Design Visualization, Custom Parts Modelling\n• AR/VR: VR Test Drives, AR Navigation Systems, Virtual Showrooms\n• AI Agents: Virtual Sales Assistants, AI-Powered Customer Service, Autonomous Driving Systems",
    link: "/blog-single",
  },
  {
    title: "Healthcare & Med-Tech",
    description:
      "• 3D: Surgical Planning Models, Patient-Specific 3D Printing, Anatomical Education Tools\n• AR/VR: VR Therapy Sessions, Augmented Reality Medical Imaging, Virtual Reality Training Simulations\n• AI Agents: Medical Diagnosis AI, Patient Care Chatbots, Healthcare Workflow Automation",
    link: "/blog-single",
  },
  {
    title: "Education & Training",
    description:
      "• 3D: Virtual Laboratories, 3D Model Libraries, Educational Game Design\n• AR/VR: AR Textbooks, Virtual Field Trips, VR Language Learning\n• AI Agents: AI Tutors, Personalized Learning Paths, Virtual Classroom Assistants",
    link: "/blog-single",
  },
  {
    title: "Real Estate & Architecture",
    description:
      "• 3D: Virtual Property Tours, Architectural Visualization, Interior Design Planning\n• AR/VR: AR Property Staging, VR Property Showcases, Virtual Open Houses\n• AI Agents: Real Estate Chatbots, Property Price Prediction AI, CRM Automation",
    link: "/blog-single",
  },
];
