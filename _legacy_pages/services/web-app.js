import React from "react";
import ServicePageLayout from "../../components/ServicePageLayout";

import Ecommerce from "../../public/assets/portfolio/E-commerce.jpg";
import foodapp from "../../public/assets/portfolio/food-ordering-app.png";
import socialpulse from "../../public/assets/portfolio/social-pulse-agency.png";
import rutu from "../../public/assets/portfolio/rutu-group.png";
import realestate2 from "../../public/assets/portfolio/trade-centre.png";
import Beqube from "../../public/assets/portfolio/beqube.png";
import KD from "../../public/assets/portfolio/kd-rmc-llp.png";
import Aarav from "../../public/assets/portfolio/aarav-realty.png";

const projects = [
    { id: 1, title: "Digital Marketing App", imageSrc: socialpulse, url: "social-pulse-agency" },
    { id: 2, title: "Food Ordering App", subtitle: "Food Delivery Platform", imageSrc: foodapp, url: "food-ordering-app" },
    { id: 3, title: "E-commerce App", subtitle: "Online Furniture Store", imageSrc: Ecommerce, url: "e-commerce-app" },
    { id: 4, title: "Rutu Group Website", imageSrc: rutu, url: "rutu-group" },
    { id: 5, title: "Real Estate Landing Page", imageSrc: realestate2, url: "trade-centre" },
    { id: 6, title: "Real Estate Consultancy", imageSrc: Beqube, url: "beqube" },
    { id: 7, title: "KD RMC LLP", subtitle: "Industrial Company Website", imageSrc: KD, url: "kd-rmc-llp" },
    { id: 8, title: "Aarav Realty", subtitle: "Real Estate Website", imageSrc: Aarav, url: "aarav-realty" },
];

const sequence = [
    {
        title: "Requirements",
        description: "We define the scope, features, and technical requirements of your web application to ensure a solid foundation."
    },
    {
        title: "Architecture",
        description: "Designing a scalable and secure architecture that can handle growth and performance demands."
    },
    {
        title: "Development",
        description: "Building the application using modern frameworks like Next.js and React, focusing on performance and user experience."
    },
    {
        title: "Launch & Scale",
        description: "Launching your web app and monitoring its performance, ready to scale as your user base grows."
    }
];

export default function WebApps({ openContact }) {
    return (
        <ServicePageLayout
            title="Web Apps"
            description="Building high-quality web applications that perform seamlessly across all devices. E-commerce stores, landing pages, and multi-page websites."
            sequence={sequence}
            projects={projects}
            openContact={openContact}
        />
    );
}
