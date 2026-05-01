"use client";

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function SignInPage() {
  const router = useRouter();

  const handleLogin = () => {
    console.log("Login button clicked");
    // In a real app, this would handle authentication and then redirect
    router.push('/'); // Redirect to home for now
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-[#FDFBEE]">
      <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
        <h1 className="text-4xl font-bold text-[#050C26] text-center mb-8">Welcome Back!</h1>
        <p className="text-lg text-gray-500 text-center mb-10">Sign in to your account to continue.</p>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <div>
            <label className="block text-sm font-bold text-[#050C26] mb-2">Email Address</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-5 py-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#FF7426] transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#050C26] mb-2">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-5 py-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#FF7426] transition-all"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-gray-500">
              <input type="checkbox" className="h-4 w-4 text-[#FF7426] focus:ring-[#FF7426] border-gray-300 rounded"/>
              Remember Me
            </label>
            <Link href="/forgot-password" className="text-[#FF7426] hover:underline font-semibold">
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-[#FF7426] text-white font-bold rounded-xl hover:bg-[#e6631f] transition-all shadow-lg active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-500 mt-8">
          Don't have an account?
          <Link href="/signup" className="text-[#FF7426] hover:underline font-semibold ml-2">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}
