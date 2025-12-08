import React from "react";
import ServicePageLayout from "../../components/ServicePageLayout";

import RealEstate from "../../public/assets/portfolio/aarav-realty.png";
import KD from "../../public/assets/portfolio/kd-rmc-llp.png";
import Beqube from "../../public/assets/portfolio/beqube.png";

const projects = [
    { id: 1, title: "Real Estate CRM", subtitle: "Lead Management System", url: "real-estate-crm" }, // No image, will show Coming Soon
    { id: 2, title: "Appointment Booking App", subtitle: "Scheduling Solution", url: "appointment-booking" }, // No image, will show Coming Soon
    // { id: 3, title: "Real Estate App", subtitle: "Property Listing Platform", imageSrc: RealEstate, url: "real-estate" },
    // { id: 4, title: "KD RMC LLP", subtitle: "Industrial Company Website", imageSrc: KD, url: "kd-rmc-llp" },
    // { id: 5, title: "Real Estate Consultancy", subtitle: "Consultancy Business Site", imageSrc: Beqube, url: "beqube" },
];

const sequence = [
    {
        title: "Discovery",
        description: "Understanding your business processes and identifying areas where software can improve efficiency."
    },
    {
        title: "Prototyping",
        description: "Creating interactive prototypes to visualize the software's flow and functionality before coding begins."
    },
    {
        title: "Development",
        description: "Developing robust software solutions with clean code and rigorous testing to ensure reliability."
    },
    {
        title: "Release & Support",
        description: "Deploying the software and providing ongoing maintenance and updates to keep it running smoothly."
    }
];

export default function SoftwareProducts({ openContact }) {
    return (
        <ServicePageLayout
            title="Software Products"
            description="Creating reliable, scalable software for modern businesses. CRM systems, appointment booking tools, and custom mobile apps."
            sequence={sequence}
            projects={projects}
            openContact={openContact}
        />
    );
}
