import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";

// Import your consolidated components
import { SignInForm, SignUpForm } from "./AuthForms";
import { MobileToggle, DesktopOverlay } from "./AuthOverlays";

export default function AuthCard() {
  const [isSignUp, setIsSignUp] = useState(false);
  const isSignUpRef = useRef(isSignUp);
  isSignUpRef.current = isSignUp;

  const signInRef = useRef(null);
  const signUpRef = useRef(null);
  
  const overlayContainerRef = useRef(null);
  const overlayRef = useRef(null);
  const overlayLeftRef = useRef(null);
  const overlayRightRef = useRef(null);
  
  const mobileTogglePillRef = useRef(null);
  const mobileSweepRef = useRef(null);

  const tlDesktop = useRef(null);
  const tlMobile = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.matchMedia();

    // DESKTOP ANIMATION
    ctx.add("(min-width: 768px)", () => {
      gsap.set([signInRef.current, signUpRef.current], { clearProps: "all" });

      gsap.set(signInRef.current, { xPercent: 0, opacity: 1, zIndex: 2 });
      gsap.set(signUpRef.current, { xPercent: 0, opacity: 0, zIndex: 1 });
      gsap.set(overlayContainerRef.current, { xPercent: 0 });
      gsap.set(overlayRef.current, { xPercent: 0 });
      gsap.set(overlayLeftRef.current, { xPercent: -20 });
      gsap.set(overlayRightRef.current, { xPercent: 0 });

      const tl = gsap.timeline({ paused: true, defaults: { duration: 0.6, ease: "power2.inOut" } });
      tlDesktop.current = tl;

      tl.to(signInRef.current, { xPercent: 100 }, 0)
        .to(signUpRef.current, { xPercent: 100 }, 0)
        .set(signUpRef.current, { opacity: 1, zIndex: 5 }, 0.3)
        .to(overlayContainerRef.current, { xPercent: -100 }, 0)
        .to(overlayRef.current, { xPercent: 50 }, 0)
        .to(overlayLeftRef.current, { xPercent: 0 }, 0)
        .to(overlayRightRef.current, { xPercent: 20 }, 0);

      if (isSignUpRef.current) tl.progress(1);
    });

    // MOBILE ANIMATION
    ctx.add("(max-width: 767px)", () => {
      gsap.set([signInRef.current, signUpRef.current], { clearProps: "all" });

      gsap.set(signInRef.current, { opacity: 1, x: 0, zIndex: 10 });
      gsap.set(signUpRef.current, { opacity: 0, x: 30, zIndex: 10 });
      
      gsap.set(mobileSweepRef.current, { scaleX: 0, transformOrigin: "left center" });

      const tl = gsap.timeline({ paused: true });
      tlMobile.current = tl;

      tl.to(mobileTogglePillRef.current, { xPercent: 100, duration: 0.7, ease: "power2.inOut" }, 0)
        .to(mobileSweepRef.current, { scaleX: 1, duration: 0.35, ease: "power2.in" }, 0)
        .to(signInRef.current, { x: -30, opacity: 0, duration: 0.35, ease: "power2.in" }, 0)
        .set(mobileSweepRef.current, { transformOrigin: "right center" }, 0.35)
        .to(mobileSweepRef.current, { scaleX: 0, duration: 0.35, ease: "power2.out" }, 0.35)
        .to(signUpRef.current, { x: 0, opacity: 1, duration: 0.35, ease: "power2.out" }, 0.35);

      if (isSignUpRef.current) tl.progress(1);
    });

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (window.matchMedia("(min-width: 768px)").matches && tlDesktop.current) {
      if (isSignUp) tlDesktop.current.play();
      else tlDesktop.current.reverse();
    } else if (window.matchMedia("(max-width: 767px)").matches && tlMobile.current) {
      if (isSignUp) tlMobile.current.play();
      else tlMobile.current.reverse();
    }
  }, [isSignUp]);

  return (
    <div className="relative mx-auto h-[550px] w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-2xl md:h-[480px]">
      
      <MobileToggle 
        isSignUp={isSignUp} 
        setIsSignUp={setIsSignUp} 
        ref={mobileTogglePillRef} 
      />

      {/* MOBILE: The "Curtain" Wipe */}
      <div
        ref={mobileSweepRef}
        className="absolute left-0 top-0 z-[50] h-full w-full bg-[#ff1010] md:hidden"
      />

      <SignInForm ref={signInRef} />
      <SignUpForm ref={signUpRef} />

      <DesktopOverlay 
        setIsSignUp={setIsSignUp}
        containerRef={overlayContainerRef}
        overlayRef={overlayRef}
        overlayLeftRef={overlayLeftRef}
        overlayRightRef={overlayRightRef}
      />
      
    </div>
  );
}