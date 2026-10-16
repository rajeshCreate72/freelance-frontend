"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

const inputClassName =
  "w-full rounded-sm border border-[#d8d1c3] bg-[#f7f4ed] px-4 py-3 text-sm text-[#171512] outline-none transition-colors placeholder:text-[#8b8376] focus:border-[#d38d00] focus:ring-1 focus:ring-[#d38d00]";

export default function LoginPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden">
      <AnimatePresence>
        <motion.section
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 min-h-screen w-full bg-white/90"
          exit={{ opacity: 0, y: -24 }}
          initial={{ opacity: 0, y: 48 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mx-auto w-full max-w-[480px] px-4 pb-10 pt-12 sm:px-6 sm:pt-16">
            <Link
              className="inline-flex text-sm font-bold tracking-[0.08em] text-[#f0a500] transition-colors hover:text-[#ffcc44]"
              href="/"
            >
              FREELANCE<span className="text-[#171512]">/ESCROW</span>
            </Link>

            <div className="mt-10">
              <p className="text-[14px] font-bold uppercase tracking-[0.16em] text-[#8c5f00]">
                Welcome back
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#171512] sm:text-4xl">
                Log in to your account.
              </h1>
            </div>

            <form className="mt-8 space-y-5">
              <div>
                <label
                  className="mb-2 block text-xs font-medium uppercase tracking-[0.1em] text-[#4a4338]"
                  htmlFor="identifier"
                >
                  Username or email address
                </label>
                <input
                  autoComplete="username"
                  className={inputClassName}
                  id="identifier"
                  name="identifier"
                  placeholder="Your username or email"
                  required
                  type="text"
                />
              </div>

              <div>
                <label
                  className="mb-2 block text-xs font-medium uppercase tracking-[0.1em] text-[#4a4338]"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  autoComplete="current-password"
                  className={inputClassName}
                  id="password"
                  name="password"
                  placeholder="Your password"
                  required
                  type="password"
                />
              </div>

              <button
                className="w-full rounded-sm bg-[#f0a500] px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#0a0a0a] transition-all hover:-translate-y-0.5 hover:bg-[#ffcc44] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffcc44]"
                type="submit"
              >
                Log in
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-[#625b50]">
              Need an account?{" "}
              <Link
                className="font-medium text-[#f0a500] transition-colors hover:text-[#ffcc44]"
                href="/register-client"
              >
                Register as a client
              </Link>
            </p>
          </div>
        </motion.section>
      </AnimatePresence>
    </main>
  );
}
