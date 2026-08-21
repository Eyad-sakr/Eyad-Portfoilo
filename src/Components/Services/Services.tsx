import FadeUp from "../FadeUp";
import { FaArrowRight } from "react-icons/fa";
import { BiStoreAlt } from "react-icons/bi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { MdLocalGroceryStore } from "react-icons/md";

const services = [
  {
    id: 1,
    number: "01",
    Icon:  BiStoreAlt,
    title: "Business Websites",
    description:
      "I craft structured, responsive websites that give businesses a strong digital presence, combining clear content hierarchy, reusable components, and a consistent experience across every screen.",
    tags: [
      "Responsive Development",
      "React & TypeScript",
      "Reusable Components",
    ],
  },
  {
    id: 2,
    number: "02",
     Icon: CgWebsite,
    title: "Landing Pages",
    description:
      "I turn ideas into focused landing pages with strong visual hierarchy, purposeful interactions, and responsive layouts designed to guide visitors naturally toward the next action.",
    tags: [
      "Conversion-Focused UI",
      "Responsive Layouts",
      "Interactive Sections",
    ],
  },
  {
    id: 3,
    number: "03",
     Icon: MdLocalGroceryStore,
    title: "E-commerce Frontends",
    description:
      "I build intuitive storefronts where products are easy to discover, compare, and explore, with thoughtful navigation, filtering, reusable product interfaces, and responsive shopping flows.",
    tags: [
      "Product Experiences",
      "Search & Filtering",
      "Responsive Shopping UI",
    ],
  },
  {
    id: 4,
    number: "04",
     Icon: TbBrandGoogleAnalytics,
    title: "Admin Dashboards",
    description:
      "I develop clear, scalable dashboard interfaces for working with complex data, bringing together analytics, interactive tables, filtering, and structured workflows without overwhelming the user.",
    tags: [
      "Data Visualization",
      "Tables & Filtering",
      "Scalable UI",
    ],
  },
];
function Services() {
  return (
    <section id="Services">
<div className="Services-Heading">
  <FadeUp>
        <h5>// What I Do</h5>
        <h1>Turning Ideas Into <span>Digital Products</span></h1>
        </FadeUp>
</div>
<div className="services-Cards">
    {services.map((service)=>(
    <div className="Service-Card" key={service.id}>
        <div className="Service-Head">
           <span>{<service.Icon/>}</span>
            <span className="Service-Number">{service.number}</span>
        </div>
        <div className="Service-content">
            <div className="Description">
                <h1>{service.title}</h1>
                <p>{service.description}</p>
            </div>
            <div className="Tags">
                {service.tags.map((tag)=>(
                    <span>{tag}</span>
                ))}
            </div>
        </div>
        <div className="Service-end">
            <button><FaArrowRight /></button>
        </div>
    </div>
    ))}
</div>
    </section>
  )
}

export default Services