/* src/app/login/page.tsx */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { login } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await login({ email, password });
      router.push("/shop");
    } catch (err) {
      setError((err as Error).message ?? "Login failed");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-[129px] pt-[60px] mb-[140px]">
      {/* Left Side: Reusing the same image container */}
      <div className="hidden lg:block w-[805px] h-[781px] bg-[#CBE4E8] relative overflow-hidden rounded-r-[4px]">
        <Image
          src="/images/auth-side.jpg"
          alt="Shopping Illustration"
          fill
          className="object-contain pt-[75px]"
        />
      </div>

      {/* Right Side: Form */}
      <div className="flex flex-col w-full max-w-[371px] px-4 lg:px-0">
        <h1 className="text-[36px] font-medium leading-[48px] tracking-[4%] mb-6">Log in to Exclusive</h1>
        <p className="text-[16px] mb-12">Enter your details below</p>

        <form className="flex flex-col gap-10" onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="border-b border-black/50 pb-2 outline-none focus:border-[#DB4444] transition-colors"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border-b border-black/50 pb-2 outline-none focus:border-[#DB4444] transition-colors"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex items-center justify-between mt-2">
            <button className="bg-[#DB4444] text-white px-12 py-4 rounded-[4px] font-medium hover:bg-[#c23b3b] transition-colors">
              Log In
            </button>
            <Link href="/forgot-password" className="text-[#DB4444] text-[16px] hover:underline">
              Forget Password?
            </Link>
          </div>

          {error && <p className="text-red-600 text-[14px] mt-2">{error}</p>}
        </form>

        <div className="mt-8 text-center text-[16px] opacity-80">
          <span className="opacity-70">New here?</span>{" "}
          <Link
            href="/signup"
            className="font-medium border-b border-black/50 hover:text-[#DB4444] hover:border-[#DB4444]"
          >
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}