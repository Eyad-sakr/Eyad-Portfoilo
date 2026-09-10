import type { IconType } from "react-icons";
import { BiStoreAlt } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { FiLayout, FiBox, FiSmartphone, FiZap } from "react-icons/fi";
import { MdLocalGroceryStore } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";

export interface ServiceCard {
  number: string;
  Icon: IconType;
  title: string;
  description: string;
}

export interface WhatsIncluded {
  Icon: IconType;
  title: string;
  description: string;
  number: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Service {
  id: number;
  number: string;
  Icon: IconType;
  badge: string[];
  title: string;
  highlight: string;
  description: string;
  tags: string[];
  cards: ServiceCard[];
  process: ProcessStep[];
  whatsIncluded: WhatsIncluded[];
}

// كانت متكررة بنفس القيم بالظبط جوه كل service — دلوقتي constant واحد بيتشارك بينهم
const DEFAULT_INCLUDED: WhatsIncluded[] = [
  {
    Icon: FiSmartphone,
    title: "Responsive Development",
    description:
      "The website adapts smoothly across desktop, tablet and mobile devices while maintaining a consistent experience.",
    number: "01",
  },
  {
    Icon: FiLayout,
    title: "Modern UI",
    description:
      "Clean layouts, clear visual hierarchy and interfaces designed to make the content easy to understand and navigate.",
    number: "02",
  },
  {
    Icon: FiBox,
    title: "Reusable Components",
    description:
      "Structured and reusable frontend components that keep the project clean, scalable and easier to maintain.",
    number: "03",
  },
  {
    Icon: FiZap,
    title: "Performance",
    description:
      "Frontend implementation with attention to performance, usability and smooth interactions.",
    number: "04",
  },
];

export const services: Service[] = [
  {
    id: 1,
    number: "01",
    Icon: BiStoreAlt,
    badge: ["//", "BUSINESS WEBSITES"],
    title: "Business Websites Built to Represent",
    highlight: "Your Brand",
    description:
      "I build modern, responsive websites that give businesses a clear digital presence and provide a smooth experience across every device.",
    tags: ["Responsive Development", "React & TypeScript", "Reusable Components"],
    cards: [
      { number: "01", Icon: FiLayout, title: "Company Websites", description: "Clean, structured sites that introduce a business and its services." },
      { number: "02", Icon: BiStoreAlt, title: "Business Websites", description: "Multi-page sites built around clear content hierarchy and navigation." },
      { number: "03", Icon: CgWebsite, title: "Professional Websites", description: "Polished, credible interfaces for firms, studios and consultancies." },
      { number: "04", Icon: FiBox, title: "Service-based Websites", description: "Pages built to explain offerings and turn visitors into leads." },
      { number: "05", Icon: FiSmartphone, title: "Responsive Web Experiences", description: "Interfaces tuned to feel native on desktop, tablet and mobile." },
      { number: "06", Icon: FiZap, title: "Custom Frontend Interfaces", description: "Bespoke layouts and components built beyond generic templates." },
    ],
    process: [
      { number: "01", title: "Understand", description: "I start by understanding the business, target users and project requirements." },
      { number: "02", title: "Plan", description: "I define the structure, content hierarchy and overall interface direction." },
      { number: "03", title: "Build", description: "I develop the frontend using clean, reusable and maintainable components." },
      { number: "04", title: "Refine", description: "I test the experience across screen sizes and polish the details before delivery." },
    ],
    whatsIncluded: DEFAULT_INCLUDED,
  },

  {
    id: 2,
    number: "02",
    Icon: CgWebsite,
    badge: ["//", "LANDING PAGES"],
    title: "Landing Pages Designed to Convert",
    highlight: "Your Visitors",
    description:
      "I turn ideas into focused landing pages with strong visual hierarchy, purposeful interactions, and responsive layouts designed to guide visitors naturally toward the next action.",
    tags: ["Conversion-Focused UI", "Responsive Layouts", "Interactive Sections"],
    cards: [
      { number: "01", Icon: FiLayout, title: "Product Landing Pages", description: "Single-focus pages built to present one product or service clearly." },
      { number: "02", Icon: FiZap, title: "Campaign Pages", description: "Pages built around a single call-to-action for marketing campaigns." },
      { number: "03", Icon: CgWebsite, title: "Waitlist / Launch Pages", description: "Pre-launch pages built to capture interest and collect signups." },
      { number: "04", Icon: FiBox, title: "Feature Highlight Sections", description: "Sections built to explain product features in a scannable way." },
      { number: "05", Icon: FiSmartphone, title: "Responsive Hero Sections", description: "Hero sections tuned to grab attention on every screen size." },
      { number: "06", Icon: FiLayout, title: "Custom Animated Sections", description: "Scroll and interaction-based sections built for engagement." },
    ],
    process: [
      { number: "01", title: "Understand", description: "I start by understanding the goal of the page and who it's speaking to." },
      { number: "02", title: "Plan", description: "I map out the narrative flow and the single call-to-action it should drive." },
      { number: "03", title: "Build", description: "I develop the sections using clean, reusable and maintainable components." },
      { number: "04", title: "Refine", description: "I test conversion paths across devices and polish the details before delivery." },
    ],
    whatsIncluded: DEFAULT_INCLUDED,
  },

  {
    id: 3,
    number: "03",
    Icon: MdLocalGroceryStore,
    badge: ["//", "E-COMMERCE FRONTENDS"],
    title: "Storefronts Built to Turn Browsers Into",
    highlight: "Buyers",
    description:
      "I build intuitive storefronts where products are easy to discover, compare, and explore, with thoughtful navigation, filtering, reusable product interfaces, and responsive shopping flows.",
    tags: ["Product Experiences", "Search & Filtering", "Responsive Shopping UI"],
    cards: [
      { number: "01", Icon: MdLocalGroceryStore, title: "Product Listing Pages", description: "Grid and list views built for fast product discovery." },
      { number: "02", Icon: FiBox, title: "Product Detail Pages", description: "Pages built to showcase variants, pricing and product info clearly." },
      { number: "03", Icon: FiLayout, title: "Cart & Checkout Flows", description: "Streamlined flows designed to reduce friction at checkout." },
      { number: "04", Icon: FiZap, title: "Search & Filtering", description: "Filtering systems built to help users narrow down products fast." },
      { number: "05", Icon: FiSmartphone, title: "Responsive Shopping UI", description: "Storefronts tuned to feel native across desktop, tablet and mobile." },
      { number: "06", Icon: MdLocalGroceryStore, title: "Custom Storefront Interfaces", description: "Bespoke shopping interfaces built beyond generic templates." },
    ],
    process: [
      { number: "01", title: "Understand", description: "I start by understanding the product catalog and shopping behavior." },
      { number: "02", title: "Plan", description: "I define navigation, filtering logic and the overall shopping flow." },
      { number: "03", title: "Build", description: "I develop the storefront using clean, reusable and maintainable components." },
      { number: "04", title: "Refine", description: "I test the shopping flow across screen sizes and polish before delivery." },
    ],
    whatsIncluded: DEFAULT_INCLUDED,
  },

  {
    id: 4,
    number: "04",
    Icon: TbBrandGoogleAnalytics,
    badge: ["//", "ADMIN DASHBOARDS"],
    title: "Dashboards Built to Make Data",
    highlight: "Actionable",
    description:
      "I develop clear, scalable dashboard interfaces for working with complex data, bringing together analytics, interactive tables, filtering, and structured workflows without overwhelming the user.",
    tags: ["Data Visualization", "Tables & Filtering", "Scalable UI"],
    cards: [
      { number: "01", Icon: TbBrandGoogleAnalytics, title: "Analytics Dashboards", description: "Overview screens built to surface key metrics at a glance." },
      { number: "02", Icon: FiBox, title: "Data Tables", description: "Sortable, filterable tables built for managing large datasets." },
      { number: "03", Icon: FiLayout, title: "Management Panels", description: "Interfaces built for managing customers, orders and products." },
      { number: "04", Icon: FiZap, title: "Charts & Visualization", description: "Charts built to make trends and comparisons easy to read." },
      { number: "05", Icon: FiSmartphone, title: "Responsive Admin UI", description: "Dashboards tuned to stay usable across desktop, tablet and mobile." },
      { number: "06", Icon: TbBrandGoogleAnalytics, title: "Custom Dashboard Interfaces", description: "Bespoke dashboard layouts built beyond generic admin templates." },
    ],
    process: [
      { number: "01", title: "Understand", description: "I start by understanding the data, workflows and who will use the dashboard." },
      { number: "02", title: "Plan", description: "I define the information architecture and key views needed." },
      { number: "03", title: "Build", description: "I develop the dashboard using clean, reusable and maintainable components." },
      { number: "04", title: "Refine", description: "I test usability across screen sizes and polish the details before delivery." },
    ],
    whatsIncluded: DEFAULT_INCLUDED,
  },
];