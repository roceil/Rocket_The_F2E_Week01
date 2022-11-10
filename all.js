gsap.registerPlugin(ScrollTrigger, TextPlugin);

console.log(gsap);

gsap.to(".loop", {
  xPercent: "-50",
  ease: "none",
  duration: 10,
  repeat: -1,
});
