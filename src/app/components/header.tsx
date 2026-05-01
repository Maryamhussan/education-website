"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from 'next/navigation';

/**
 * Navigation links data structure for central management.
 * Adding or removing links here will update both Desktop and Mobile menus.
 */
const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Our Services", href: "/services" },
  { name: "Contact us", href: "/contact" },
];

/**
 * Header Component
 * Handles the main navigation, responsive mobile menu, and global actions like Sign In.
 */
export default function Header() {
  // State to track mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  // Helper to toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Helper for navigation actions
  const handleSignIn = () => router.push('/signin');

  return (
    <header className="sticky top-0 shadow-md py-4 px-4 sm:px-6 bg-[#FDF8EE]/90 backdrop-blur-md font-[sans-serif] min-h-[75px] tracking-wide z-[100]">
      <div className="flex items-center justify-between gap-5 w-full max-w-screen-xl mx-auto">
        
        {/* LOGO SECTION: Navigates to home */}
        <Link href="/" className="shrink-0">
          <Image src="/booklogo.png" alt="Education Logo" width={144} height={40} className="w-36" />
        </Link>

        {/* DESKTOP NAVIGATION: Hidden on small screens, flex on large screens */}
        <nav className="hidden lg:block ml-auto">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-[#4D2C5E] text-[#333] font-semibold text-[15px] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ACTION BUTTONS: Sign In and Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <button
            onClick={handleSignIn}
            className="px-5 py-2 text-[15px] rounded font-semibold text-[#4D2C5E] border border-[#4D2C5E] hover:bg-[#4D2C5E] hover:text-white transition-all duration-300 active:scale-95"
          >
            Sign in
          </button>

          {/* MOBILE BURGER ICON: Only visible on mobile/tablet */}
          <button 
            onClick={toggleMenu} 
            className="lg:hidden text-[#333] p-1 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <svg
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY: Renders as a portal-like overlay when menu is open */}
      <div
        className={`fixed inset-0 z-[1000] lg:hidden transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible bg-white" : "opacity-0 invisible"
        }`}
      >
        {/* DARK BACKDROP: Closes menu on click */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
          onClick={toggleMenu}
        />
        
        {/* SIDE DRAWER: Slides in from left */}
        <div
          className={`absolute top-0 left-0 w-3/4 max-w-[300px] h-full bg-white opacity-100 shadow-2xl transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6 bg-white">
            {/* DRAWER HEADER: Logo and Close Button */}
            <div className="flex items-center justify-between mb-8">
              <Link href="/" onClick={toggleMenu}>
                <Image src="/booklogo.png" alt="Logo" width={144} height={40} className="w-36" />
              </Link>
              <button onClick={toggleMenu} className="text-[#333] p-2 hover:bg-gray-100 rounded-full transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* MOBILE NAVIGATION LINKS */}
            <nav>
              <ul className="space-y-2 ">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={toggleMenu}
                      className="block py-3 px-4 text-[16px] font-semibold text-[#333] hover:text-[#4D2C5E] hover:bg-gray-50 rounded-lg transition-all border-b border-gray-50 last:border-none"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
