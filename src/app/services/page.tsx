import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Online Classes",
      description: "Access high-quality video lessons and interactive content from anywhere in the world.",
      icon: "💻",
    },
    {
      title: "One-on-One Mentorship",
      description: "Get personalized guidance and feedback from industry professionals to accelerate your learning.",
      icon: "🤝",
    },
    {
      title: "Career Counseling",
      description: "Receive expert advice on job hunting, resume building, and interview preparation.",
      icon: "🚀",
    },
    {
      title: "Corporate Training",
      description: "Customized training programs for teams and organizations to stay ahead in the industry.",
      icon: "🏢",
    },
    {
      title: "Certification Programs",
      description: "Earn industry-recognized certificates upon completion of our comprehensive courses.",
      icon: "📜",
    },
    {
      title: "Community Support",
      description: "Join a vibrant community of learners to share knowledge and collaborate on projects.",
      icon: "👥",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#4D2C5E] py-24 text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">Our Services</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Beyond just courses, we provide a full ecosystem of tools and support to help you succeed.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-10 rounded-3xl bg-[#FDFBEE] border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#050C26] mb-4">{service.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Are Different */}
      <section className="py-24 bg-[#4D2C5E] text-white">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/girl.png"
              alt="Services Illustration"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-8 leading-tight">We Are Committed To Your Success</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#FF7426] flex items-center justify-center shrink-0">✓</div>
                <p className="text-lg text-white/90">Lifetime access to all course materials and updates.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#FF7426] flex items-center justify-center shrink-0">✓</div>
                <p className="text-lg text-white/90">Direct communication with instructors via private forums.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#FF7426] flex items-center justify-center shrink-0">✓</div>
                <p className="text-lg text-white/90">Hands-on projects that build your professional portfolio.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#FF7426] flex items-center justify-center shrink-0">✓</div>
                <p className="text-lg text-white/90">Job placement assistance with our network of hiring partners.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
