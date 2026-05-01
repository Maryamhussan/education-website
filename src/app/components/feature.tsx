import Image from "next/image";

/**
 * Feature Data
 * Centralizing the feature items for better maintainability.
 */
const FEATURES = [
  {
    icon: "/icon1.png",
    title: "Learn The Latest Skills",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old."
  },
  {
    icon: "/icon2.png",
    title: "Get Ready For A Career",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old."
  },
  {
    icon: "/icon3.png",
    title: "Earn A Certificate",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old."
  }
];

/**
 * FeatureItem Component
 * Reusable sub-component for rendering individual feature blocks.
 */
function FeatureItem({ icon, title, description }: { icon: string, title: string, description: string }) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:scale-105 transition-all duration-300 group">
      {/* Icon Container */}
      <div className="w-20 h-20 bg-white p-4 rounded-2xl shrink-0 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
        <Image src={icon} alt={title} width={48} height={48} className="object-contain" />
      </div>
      
      {/* Text Content */}
      <div className="text-center sm:text-left">
        <h3 className="text-white text-xl font-bold mb-2">
          {title}
        </h3>
        <p className="text-white/80 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

/**
 * Feature Component
 * Displays a highlight section with key benefits/features of the platform.
 */
export default function Feature() {
  return (
    <section className="max-w-6xl mx-auto font-[sans-serif] bg-[#4D2C5E] rounded-[30px] p-8 md:p-12 shadow-xl">
      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-12">
        {FEATURES.map((feature, index) => (
          <FeatureItem 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}
