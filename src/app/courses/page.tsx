"use client";

import { useState } from "react";
import Card from "../components/cards";
import Searchbar from "../components/searchbar";
import Link from "next/link"; // Import Link component

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("Newest");

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
    console.log("Category changed to:", event.target.value);
    // Add logic here to filter courses based on selectedCategory
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
    console.log("Sort by changed to:", event.target.value);
    // Add logic here to sort courses based on sortBy value
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#4D2C5E] py-24 text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">Explore Our Courses</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Choose from a wide range of courses designed to help you master new skills and advance your career.
          </p>
          <div className="flex justify-center">
            <Searchbar />
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-24">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <h2 className="text-3xl font-bold text-[#050C26]">Available Courses</h2>
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#FF7426]"
              >
                <option>All Categories</option>
                <option>Web Development</option>
                <option>Graphic Design</option>
                <option>Data Science</option>
              </select>
              <select
                value={sortBy}
                onChange={handleSortChange}
                className="px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#FF7426]"
              >
                <option>Sort by: Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
          <Card />
        </div>
      </section>

      {/* FAQ or Help Section */}
      <section className="py-24 bg-[#FDFBEE]">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-[#050C26] mb-6">Need Help Choosing?</h2>
          <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto">
            Not sure which course is right for you? Our career advisors are here to help you make the best choice for your future.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#FF7426] text-white font-bold rounded-full hover:bg-[#e6631f] transition-colors shadow-lg inline-block"
          >
            Contact an Advisor
          </Link>

        </div>
      </section>
    </main>
  );
}
