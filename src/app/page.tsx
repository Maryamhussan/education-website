import Image from "next/image";
import Searchbar from "./components/searchbar";
import Feature from "./components/feature";
import Card from "./components/cards";
import Testimonial from "./components/testimonial";
import Team from "./components/team";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-[#FDFBEE] min-h-[80vh] flex items-center pt-20 pb-32">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-black text-[#050C26] leading-tight">
              The <span className="text-[#FF7426]">Smart</span>
              <br /> Choice For <span className="text-[#FF7426]">Future</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-lg">
              Elearn is a global training provider based across the UK that
              specialises in accredited and bespoke training courses. We crush
              the barriers to education.
            </p>
            <Searchbar />
          </div>
          <div className="relative hidden lg:block">
            <Image
              src="/OBJECTS.png"
              alt="Education Illustration"
              width={600}
              height={500}
              className="w-full h-auto drop-shadow-2xl"
              priority
            />
          </div>
        </div>
        {/* Decorative background image if needed */}
        <div className="absolute top-0 left-0 w-full h-full opacity-50 -z-0">
          <Image src="/homebg.png" alt="background" fill className="object-cover" />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative -mt-20 z-20 px-4">
        <Feature />
      </section>

      {/* Tracks Section */}
      <section className="py-24 bg-white">
        <div className="container-custom text-center mb-16">
          <div className="inline-block relative">
             <Image src="/lightbulb.png" alt="light" width={40} height={40} className="absolute -left-12 -top-4 opacity-50" />
             <h2 className="text-4xl md:text-5xl font-bold text-[#050C26]">Our Tracks</h2>
             <Image src="/arrow.png" alt="arrow" width={40} height={40} className="absolute -right-12 top-4 opacity-50 rotate-12" />
          </div>
          <p className="mt-4 text-gray-400 text-lg">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
        <div className="container-custom">
          <Card />
        </div>
      </section>

      {/* Premium Learning Experience */}
      <section className="py-24 bg-[#FDFBEE] relative overflow-hidden">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <Image src="/page2bg.png" alt="bg" width={500} height={500} className="absolute -top-10 -left-10 opacity-30" />
            <div className="relative z-10">
               <Image src="/girl.png" alt="Learning Girl" width={500} height={600} className="rounded-3xl shadow-2xl" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-[#050C26] leading-tight">
              Premium <span className="text-[#FF7426]">Learning</span> Experience
            </h2>
            
            <div className="mt-12 space-y-10">
              <div className="flex gap-6">
                <div className="w-16 h-16 shrink-0 bg-[#4D2C5E] rounded-2xl flex items-center justify-center shadow-lg">
                  <Image src="/hrt.png" alt="Accessible" width={32} height={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#050C26]">Easily Accessible</h3>
                  <p className="mt-2 text-gray-500 text-lg">
                    Learning Will feel Very Comfortable With Courslab.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 shrink-0 bg-[#4D2C5E] rounded-2xl flex items-center justify-center shadow-lg">
                  <Image src="/jigsaw.png" alt="Fun" width={32} height={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#050C26]">Fun Learning Experience</h3>
                  <p className="mt-2 text-gray-500 text-lg">
                    Learning Will feel Very Comfortable With Courslab.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white relative">
        <Image src="/pinkbrush.png" alt="decoration" width={100} height={100} className="absolute left-0 top-20 opacity-40" />
        <Image src="/pinkbrush2.png" alt="decoration" width={100} height={100} className="absolute right-0 bottom-20 opacity-40" />
        
        <div className="container-custom text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#050C26]">What Students Say?</h2>
          <p className="mt-4 text-gray-400 text-lg">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
        <div className="container-custom relative z-10">
          <Testimonial />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#050C26]">Our Mentors</h2>
          <p className="mt-4 text-gray-400 text-lg">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
        <div className="container-custom">
          <Team />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="bg-[#4D2C5E] rounded-[40px] p-8 md:p-16 relative overflow-hidden flex flex-col items-center text-center shadow-2xl">
            <Image src="/last.png" alt="decoration" width={200} height={200} className="absolute left-0 bottom-0 opacity-20 pointer-events-none" />
            
            <h2 className="text-4xl md:text-5xl font-bold text-white relative z-10">Subscribe to Our Newsletter</h2>
            <p className="mt-6 text-white/80 text-lg max-w-xl relative z-10">
              Stay updated with the latest courses, news, and exclusive offers from our platform.
            </p>
            
            <div className="mt-10 w-full flex justify-center relative z-10">
              <Searchbar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
