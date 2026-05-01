import { Courses } from "@/data/course";
import Image from "next/image";
import Link from "next/link";

/**
 * CourseCard Component
 * A reusable sub-component for rendering individual course cards.
 * Extracted to improve maintainability and readability.
 */
function CourseCard({ course }: { course: typeof Courses[0] }) {
  return (
    <div
      className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-sm rounded-2xl font-[sans-serif] overflow-hidden flex flex-col border border-gray-100 hover:-translate-y-1"
    >
      {/* Course Image Container */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Course Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl text-gray-900 font-bold mb-3 line-clamp-2 min-h-[3.5rem]">
          {course.title}
        </h3>
        
        <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow line-clamp-3">
          {course.description}
        </p>

        {/* Price and Action Footer */}
        <div className="mt-auto flex items-center justify-between gap-4 pt-4 border-t border-gray-50">
          <span className="text-2xl text-[#4D2C5E] font-black">
            {course.price}
          </span>
          
          <Link
            href={`/courses/${course.id}`}
            className="px-6 py-2.5 rounded-full text-white text-sm font-semibold tracking-wide bg-[#FF7426] hover:bg-[#e6631f] transition-colors outline-none inline-flex items-center justify-center active:scale-95"
          >
            Join Course
          </Link>
        </div>
      </div>
    </div>
  );
}

/**
 * Cards Component
 * Renders a grid of course cards using the Courses data.
 * This is the main entry point for the courses section on the home page.
 */
export default function Cards() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {Courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
