import { forwardRef } from "react";

// Local helper component (no need to export)
const SocialIcon = ({ label }) => (
  <a
    href="#"
    onClick={(e) => e.preventDefault()}
    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-sm font-semibold text-gray-500 transition-colors hover:bg-gray-50"
  >
    {label}
  </a>
);

export const SignInForm = forwardRef((props, ref) => (
  <div
    ref={ref}
    className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-3 bg-white px-6 pt-16 text-center md:z-[2] md:w-1/2 md:px-10 md:pt-0"
  >
    <h1 className="text-2xl font-bold text-gray-800">Sign in</h1>
    <div className="flex gap-3">
      <SocialIcon label="f" />
      <SocialIcon label="G" />
      <SocialIcon label="in" />
    </div>
    <span className="text-xs text-gray-400">or use your account</span>
    <input
      type="email"
      placeholder="Email"
      className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 text-sm outline-none focus:border-gray-400"
    />
    <input
      type="password"
      placeholder="Password"
      className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 text-sm outline-none focus:border-gray-400"
    />
    <a href="#" onClick={(e) => e.preventDefault()} className="text-xs text-gray-400 hover:text-gray-600">
      Forgot your password?
    </a>
    <button className="mt-2 rounded-full bg-[#ff1010] px-10 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-transform active:scale-95">
      Sign In
    </button>
  </div>
));
SignInForm.displayName = "SignInForm";

export const SignUpForm = forwardRef((props, ref) => (
  <div
    ref={ref}
    className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-3 bg-white px-6 pt-16 text-center opacity-0 md:z-[1] md:w-1/2 md:px-10 md:pt-0"
  >
    <h1 className="text-2xl font-bold text-gray-800">Create Account</h1>
    <div className="flex gap-3">
      <SocialIcon label="f" />
      <SocialIcon label="G" />
      <SocialIcon label="in" />
    </div>
    <span className="text-xs text-gray-400">or use your email for registration</span>
    <input
      type="text"
      placeholder="Name"
      className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 text-sm outline-none focus:border-gray-400"
    />
    <input
      type="email"
      placeholder="Email"
      className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 text-sm outline-none focus:border-gray-400"
    />
    <input
      type="password"
      placeholder="Password"
      className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 text-sm outline-none focus:border-gray-400"
    />
    <button className="mt-2 rounded-full bg-[#ff1010] px-10 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-transform active:scale-95">
      Sign Up
    </button>
  </div>
));
SignUpForm.displayName = "SignUpForm";