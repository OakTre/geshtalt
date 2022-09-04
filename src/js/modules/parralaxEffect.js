import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const prlxs = Array.from(document.querySelectorAll(".parallax"));

  prlxs.forEach(prlx => {
    gsap.to(prlx, {
      backgroundPosition: "50% 0%",
      ease: "none",
      scrollTrigger: {
        trigger: prlx,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });
};
