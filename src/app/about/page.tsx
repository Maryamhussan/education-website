import Image from "next/image";
import Feature from "../components/feature";

export default function About() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#4D2C5E] py-24 text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">About Us</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Empowering learners worldwide with accessible, high-quality education and career-transforming skills.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#050C26] mb-6">Our Mission</h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-6">
              At Elearn, we believe that education should be accessible to everyone, regardless of their location or background. Our mission is to provide a platform where students can learn from industry experts and gain practical skills that are in high demand in today&apos;s job market.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              We are committed to creating a fun and engaging learning experience that motivates students to reach their full potential. From web development to graphic design, our courses are designed to be comprehensive and easy to follow.
            </p>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/girl.png"
              alt="Our Mission"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats/Features */}
      <section className="py-24 bg-[#FDFBEE]">
        <div className="container-custom text-center mb-16">
          <h2 className="text-4xl font-bold text-[#050C26]">Why Choose Us?</h2>
        </div>
        <Feature />
      </section>

      {/* Our Values */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-[#050C26] mb-2">Global Community</h3>
              <p className="text-gray-500">Connect with students and mentors from all over the world.</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-[#050C26] mb-2">Expert Instructors</h3>
              <p className="text-gray-500">Learn from professionals with years of experience in their fields.</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-[#050C26] mb-2">Accredited Courses</h3>
              <p className="text-gray-500">Earn certificates that are recognized by top employers.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
