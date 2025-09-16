// components/services.jsx
import Link from "next/link";

const services = [
  {
    title: "Web design",
    description:
      "Designing and developing responsive, user-friendly websites tailored to your brand.",
    icon: "🌐",
    href: "/web-design",
  },
  {
    title: "Mobile app",
    description:
      "Building sleek, high-performance mobile applications for iOS and Android platforms.",
    icon: "📱",
    href: "/mobile-app",
  },
  {
    title: "Web app",
    description:
      "Creating dynamic, scalable web applications using modern frameworks and best practices.",
    icon: "🎨",
    href: "/web-app",
  },
  {
    title: "Graphics design",
    description:
      "Crafting visually compelling designs, logos, and digital assets for your brand identity.",
    icon: "🖼️",
    href: "/graphics-design",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Section Heading */}
        <h4 className="text-gray-700 dark:text-gray-400">What I offer</h4>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2">
          My Services
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <Link key={index} href={service.href}>
              <div
                className="p-6 lg:p-8 border border-gray-200 dark:border-gray-700 
                rounded-xl shadow-md shadow-blue-200 dark:shadow-blue-900/50 
                hover:shadow-xl hover:bg-gray-50 dark:hover:bg-neutral-900 
                cursor-pointer transition duration-300 group"
              >
                {/* Icon */}
                <div className="text-4xl mb-4">{service.icon}</div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-base md:text-lg text-gray-500 dark:text-gray-300 mt-2 lg:line-clamp-2">
                  {service.description}
                </p>

                {/* Read more */}
                <div className="mt-4 text-blue-600 dark:text-blue-400 flex items-center space-x-1">
                  <span>Read more</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
