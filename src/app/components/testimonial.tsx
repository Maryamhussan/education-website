import { Testimonials } from "@/data/testimonial";
import Image from "next/image";

export default function Testimonial() {
    return (
      <div className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {Testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 shadow-md rounded-2xl border border-gray-50 flex flex-col hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <p className="text-gray-600 italic leading-relaxed">
                  {testimonial.description}
                </p>
                <div className="relative w-20 h-20 shrink-0">
                  <Image
                    src="https://readymadeui.com/team-1.webp"
                    alt={testimonial.title}
                    fill
                    className="rounded-full object-cover border-4 border-[#FDFBEE]"
                  />
                </div>
              </div>
              <div className="mt-auto">
                <h3 className="text-gray-900 text-lg font-bold">
                  {testimonial.title}
                </h3>
                <div className="flex gap-1 mt-1 text-[#FF7426]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.169L12 18.896l-7.334 3.857 1.4-8.169L.133 9.21l8.2-1.192z"/></svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
