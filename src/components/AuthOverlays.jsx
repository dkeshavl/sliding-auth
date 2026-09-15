import { forwardRef } from "react";

export const MobileToggle = forwardRef(({ isSignUp, setIsSignUp }, ref) => (
  <div className="absolute left-1/2 top-5 z-[100] flex h-12 w-56 -translate-x-1/2 items-center rounded-full bg-white p-1 shadow-xl md:hidden">
    <div
      ref={ref}
      className="absolute left-1 top-1 h-10 w-[calc(50%-4px)] rounded-full bg-[#ff1010] shadow-md"
    />
    <button
      onClick={() => setIsSignUp(false)}
      className={`relative z-10 w-1/2 text-sm font-bold transition-colors duration-300 ${!isSignUp ? "text-white" : "text-gray-400 hover:text-gray-800"}`}
    >
      Sign In
    </button>
    <button
      onClick={() => setIsSignUp(true)}
      className={`relative z-10 w-1/2 text-sm font-bold transition-colors duration-300 ${isSignUp ? "text-white" : "text-gray-400 hover:text-gray-800"}`}
    >
      Sign Up
    </button>
  </div>
));
MobileToggle.displayName = "MobileToggle";

export const DesktopOverlay = ({ 
  setIsSignUp, 
  containerRef, 
  overlayRef, 
  overlayLeftRef, 
  overlayRightRef 
}) => (
  <div
    ref={containerRef}
    className="absolute left-1/2 top-0 z-[100] hidden h-full w-1/2 overflow-hidden md:block"
  >
    <div ref={overlayRef} className="relative -left-full h-full w-[200%] bg-[#ff1010] text-white">
      
      <div ref={overlayLeftRef} className="absolute left-0 top-0 flex h-full w-1/2 flex-col items-center justify-center gap-4 px-10 text-center">
        <h1 className="text-2xl font-bold">Welcome Back!</h1>
        <p className="text-sm leading-relaxed text-white/90">To keep connected with us please login with your personal info</p>
        <button onClick={() => setIsSignUp(false)} className="mt-2 rounded-full border border-white bg-transparent px-10 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10 active:scale-95">
          Sign In
        </button>
      </div>

      <div ref={overlayRightRef} className="absolute right-0 top-0 flex h-full w-1/2 flex-col items-center justify-center gap-4 px-10 text-center">
        <h1 className="text-2xl font-bold">Hello, Friend!</h1>
        <p className="text-sm leading-relaxed text-white/90">Enter your personal details and start your journey with us</p>
        <button onClick={() => setIsSignUp(true)} className="mt-2 rounded-full border border-white bg-transparent px-10 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10 active:scale-95">
          Sign Up
        </button>
      </div>
      
    </div>
  </div>
);