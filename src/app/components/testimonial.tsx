import { Testimonials } from "@/data/testimonial";

export default function Testimonial() {
    return (
      <>
        {" "}
        <div className="flex flex-wrap justify-center gap-6">
          {Testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white sm:p-8 p-2 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-[416px] max-w-xl rounded-lg font-[sans-serif] overflow-hidden  mt-[500px]"
            >
              <div className="flex items-center">
                <p className="text-sm text-gray-600 text-right">
                  {testimonial.description}
                </p>
                <img
                  src="https://readymadeui.com/team-1.webp"
                  className="w-24 h-24 ml-6 rounded-full"
                />
              </div>
              <h3 className="text-gray-800 text-lg font-semibold mt-4">
                {testimonial.title}
              </h3>
            </div>
          ))}
        </div>
      </>
    );
}