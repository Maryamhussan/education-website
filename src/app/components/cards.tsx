import { Courses } from "@/data/course";

export default function Card() {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {Courses.map((course) => (
        <div
          key={course.id} // Added a unique key to avoid React warnings
          className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full py-6 max-w-sm rounded-lg font-[sans-serif] overflow-hidden   mt-[290px]"
        >
          <div className="flex items-center gap-2 px-6">
            <h3 className="text-xl text-gray-800 font-bold flex-1">
              {course.title}
            </h3>
          </div>

          <div className="min-h-[300px]">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-[300px] my-6"
            />
          </div>

          <div className="px-6">
            <p className="text-sm text-gray-600 leading-relaxed">
              {course.description}
            </p>

            <div className="mt-8 flex items-center flex-wrap gap-4">
              <h3 className="text-xl text-gray-800 font-bold flex-1">
                {course.price}
              </h3>
              <button
                type="button"
                className="px-5 py-2.5 rounded-lg text-white text-sm tracking-wider bg-[#FF7426] hover:bg-blue-700 outline-none"
              >
                Join Course
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
