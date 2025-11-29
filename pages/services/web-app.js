import React from "react";
import ServicePageLayout from "../../components/ServicePageLayout";

import Ecommerce from "../../public/assets/portfolio/E-commerce.jpg";
import foodapp from "../../public/assets/portfolio/food-ordering-app.png";
import Disney from "../../public/assets/portfolio/Disney-clone.jpg.png";

const projects = [
    { id: 1, title: "E-commerce App", subtitle: "Online Furniture Store", imageSrc: Ecommerce, url: "e-commerce-app" },
    { id: 2, title: "Food Ordering App", subtitle: "Food Delivery Platform", imageSrc: foodapp, url: "food-ordering-app" },
    { id: 3, title: "Disney Clone", subtitle: "Streaming Platform Clone", imageSrc: Disney, url: "disney-app" },
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
