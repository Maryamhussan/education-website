import Image from "next/image";
import Link from "next/link";

/**
 * Interface for Course Detail Page Props.
 * In Next.js 15, 'params' is a Promise.
 */
interface CourseDetailProps {
  params: Promise<{
    courseId: string;
  }>;
}

/**
 * CourseDetailPage Component
 * Renders the detailed view for a specific course.
 * We await 'params' to extract the 'courseId' as per Next.js 15 requirements.
 */
export default async function CourseDetailPage({ params }: CourseDetailProps) {
  // Await params to get courseId (Required in Next.js 15+)
  const { courseId } = await params;

  // Mock course data for demonstration
  // In production, this would be fetched from an API or database
  const course = {
    id: courseId,
    title: `Mastering ${courseId.charAt(0).toUpperCase() + courseId.slice(1)}`,
    description: `Deep dive into ${courseId}. This comprehensive course covers everything from core principles to advanced techniques. Join Dr. Jane Doe and a global community of learners to transform your skills.`,
    image: "/girl.png", // Using an existing image as placeholder
    price: "$99.99 USD",
    instructor: "Dr. Jane Doe",
    duration: "10 Weeks",
    level: "Beginner to Advanced",
  };

  return (
    <main className="bg-white py-24">
      <div className="container-custom">
        {/* Course Header & Layout */}
        <div className="grid lg:grid-cols-3 gap-16 items-center">
          
          {/* Main Info Column */}
          <div className="lg:col-span-2">
            <nav className="mb-8">
               <Link href="/courses" className="text-[#FF7426] font-semibold hover:underline flex items-center gap-2">
                 ← Back to Courses
               </Link>
            </nav>

            <h1 className="text-5xl font-black text-[#050C26] mb-6">
              {course.title}
            </h1>
            
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              {course.description}
            </p>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl text-[#4D2C5E] font-black">{course.price}</span>
            </div>

            {/* Feature Highlights Card */}
            <div className="bg-[#FDFBEE] p-8 rounded-3xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-[#050C26] mb-8">Course Highlights</h2>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {/* Instructor */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#4D2C5E] flex items-center justify-center text-white shadow-md">
                    👨‍🏫
                  </div>
                  <div>
                    <h4 className="font-bold text-[#050C26] text-sm">Instructor</h4>
                    <p className="text-gray-500 text-sm">{course.instructor}</p>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#4D2C5E] flex items-center justify-center text-white shadow-md">
                    ⏱️
                  </div>
                  <div>
                    <h4 className="font-bold text-[#050C26] text-sm">Duration</h4>
                    <p className="text-gray-500 text-sm">{course.duration}</p>
                  </div>
                </div>

                {/* Level */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#4D2C5E] flex items-center justify-center text-white shadow-md">
                    📈
                  </div>
                  <div>
                    <h4 className="font-bold text-[#050C26] text-sm">Level</h4>
                    <p className="text-gray-500 text-sm">{course.level}</p>
                  </div>
                </div>

                {/* Certificate */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#4D2C5E] flex items-center justify-center text-white shadow-md">
                    📜
                  </div>
                  <div>
                    <h4 className="font-bold text-[#050C26] text-sm">Certificate</h4>
                    <p className="text-gray-500 text-sm">Verified Completion</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12">
              <button
                className="px-10 py-5 bg-[#FF7426] text-white font-bold text-lg rounded-full hover:bg-[#e6631f] transition-all shadow-lg active:scale-95 inline-flex items-center justify-center"
              >
                Enroll Now and Start Learning
              </button>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-1">
            <div className="relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
