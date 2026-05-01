"use client";

import { useRouter } from 'next/navigation';
import Link from 'next/link';

/**
 * SignInPage Component
 * Provides a clean and interactive interface for users to log in.
 */
export default function SignInPage() {
  const router = useRouter();

  /**
   * Mock login handler.
   * Redirects to home page upon successful "authentication".
   */
  const handleLogin = () => {
    console.log("Login button clicked");
    // In a real app, this would handle authentication and then redirect
    router.push('/'); // Redirect to home for now
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-[#FDFBEE]">
      <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 max-w-md w-full mx-4">
        {/* WELCOME HEADER */}
        <h1 className="text-4xl font-bold text-[#050C26] text-center mb-4">Welcome Back!</h1>
        <p className="text-lg text-gray-500 text-center mb-10">Sign in to your account to continue.</p>

        {/* LOGIN FORM */}
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          {/* Email Field */}
          <div>
            <label className="block text-sm font-bold text-[#050C26] mb-2">Email Address</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-5 py-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#FF7426] transition-all"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-bold text-[#050C26] mb-2">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-5 py-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#FF7426] transition-all"
              required
            />
          </div>

          {/* Form Options: Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-gray-500 cursor-pointer">
              <input type="checkbox" className="h-4 w-4 text-[#FF7426] focus:ring-[#FF7426] border-gray-300 rounded"/>
              <span className="text-sm">Remember Me</span>
            </label>
            <Link href="/forgot-password" className="text-sm text-[#FF7426] hover:underline font-semibold">
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-[#FF7426] text-white font-bold rounded-xl hover:bg-[#e6631f] transition-all shadow-lg active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>

        {/* SIGN UP REDIRECT */}
        <p className="text-center text-gray-500 mt-8 text-sm">
          Don&apos;t have an account?
          <Link href="/signup" className="text-[#FF7426] hover:underline font-semibold ml-2">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}
