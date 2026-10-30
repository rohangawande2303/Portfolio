import React from "react";
import ServicePageLayout from "../../components/ServicePageLayout";

// Import images for projects (Using generic ones for AI as placeholders if specific ones aren't available, or reusing relevant ones)
import socialpulse from "../../public/assets/portfolio/social-pulse-agency.png";
import Ecommerce from "../../public/assets/portfolio/E-commerce.jpg";

const projects = [
    { id: 1, title: "AI Chatbot", subtitle: "Automated Customer Support", url: "ai-chatbot" },
    { id: 2, title: "Voice Agent", subtitle: "AI Voice Assistant", url: "voice-agent" },
    { id: 3, title: "Custom AI Products", subtitle: "Tailored AI Solutions", url: "custom-ai" },
    { id: 4, title: "WhatsApp Chatbot for Business", subtitle: "WhatsApp Business Automation", url: "whatsapp-chatbot" },

];

const sequence = [
    {
        title: "Analysis",
        description: "We start by analyzing your business needs and identifying opportunities where AI can drive efficiency and engagement."
    },
    {
        title: "Model Selection",
        description: "Choosing the right AI models and technologies (LLMs, Voice Agents, etc.) tailored to your specific use case."
    },
    {
        title: "Integration",
        description: "Seamlessly integrating AI solutions into your existing workflows or building new platforms from scratch."
    },
    {
        title: "Deployment & Training",
        description: "Deploying the solution and fine-tuning the models with real-world data to ensure optimal performance."
    }
];

export default function AIProducts({ openContact }) {
    return (
        <ServicePageLayout
            title="AI Products"
            description="Developing intelligent AI solutions that enhance engagement and automate workflows. From custom chatbots and voice agents to smart WhatsApp assistants."
            sequence={sequence}
            projects={projects}
            openContact={openContact}
        />
    );
}
