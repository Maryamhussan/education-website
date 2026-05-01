import Image from "next/image";
import Link from "next/link";

interface CourseDetailProps {
  params: {
    courseId: string;
  };
}

export default async function CourseDetailPage({ params }: CourseDetailProps) {
  const { courseId } = params;

  // In a real application, you would fetch course data based on courseId
  // For now, we'll use dummy data or a placeholder
  const course = {
    id: courseId,
    title: `Course Title for ${courseId}`,
    description: `Detailed description for course ${courseId}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    image: "/courses-placeholder.jpg", // Placeholder image
    price: "$99.99 USD",
    instructor: "Dr. Jane Doe",
    duration: "10 Weeks",
    level: "Beginner",
  };

  return (
    <main className="bg-white py-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-2">
            <h1 className="text-5xl font-black text-[#050C26] mb-6">
              {course.title}
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              {course.description}
            </p>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl text-[#4D2C5E] font-black">{course.price}</span>
            </div>

            <div className="bg-[#FDFBEE] p-8 rounded-3xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-[#050C26] mb-6">Course Details</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4D2C5E] flex items-center justify-center text-white text-xl shadow-sm">
                    👨‍🏫
                  </div>
                  <div>
                    <h4 className="font-bold text-[#050C26]">Instructor</h4>
                    <p className="text-gray-500">{course.instructor}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4D2C5E] flex items-center justify-center text-white text-xl shadow-sm">
                    ⏱️
                  </div>
                  <div>
                    <h4 className="font-bold text-[#050C26]">Duration</h4>
                    <p className="text-gray-500">{course.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4D2C5E] flex items-center justify-center text-white text-xl shadow-sm">
                    ⭐
                  </div>
                  <div>
                    <h4 className="font-bold text-[#050C26]">Level</h4>
                    <p className="text-gray-500">{course.level}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Link
                href="/checkout" // Placeholder for checkout/enrollment page
                className="px-10 py-5 bg-[#FF7426] text-white font-bold text-lg rounded-full hover:bg-[#e6631f] transition-all shadow-lg inline-flex items-center justify-center"
              >
                Enroll Now
              </Link>
            </div>
          </div>
          <div className="lg:col-span-1 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
