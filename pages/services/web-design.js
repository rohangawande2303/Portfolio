import React from "react";
import ServicePageLayout from "../../components/ServicePageLayout";

// Import images for projects
import Disney from "../../public/assets/portfolio/Disney-clone.jpg.png";


const projects = [

    { id: 5, title: "Disney Clone", imageSrc: Disney, url: "disney-app" },
];

const sequence = [
    {
        title: "Concept",
        description: "First, we'll discuss your goals, target audience, and design preferences. Based on that, I'll develop a customized concept for your website."
    },
    {
        title: "Web Design",
        description: "After the concept phase, I'll create a visual design that reflects your brand. You'll receive regular updates to ensure the design meets your expectations."
    },
    {
        title: "Development",
        description: "Once the design is finalized, the actual development begins. This is where your website is created using modern technologies and proven methods. Throughout the process, I will keep you regularly updated and incorporate your feedback."
    },
    {
        title: "Live Broadcast",
        description: "Once you're satisfied, your website will go live. I'm also happy to provide ongoing support after launch to ensure everything runs smoothly or if any changes are needed."
    }
];

export default function WebDesign({ openContact }) {
    return (
        <ServicePageLayout
            title="Design"
            description="Crafting impactful visuals and user-focused designs that bring your brand to life. From intuitive UI/UX to compelling digital creatives, posters, and billboard hoardings."
            sequence={sequence}
            projects={projects}
            openContact={openContact}
        />
    );
}
