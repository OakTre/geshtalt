import gsap from "gsap";
import SplitText from '../../assets/js/gsap-bonus/SplitText';
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default () => {
  const aboutheading = document.querySelector('.about__heading');
  const aboutContent = document.querySelector('.about__content');

  if (!aboutheading) return;

  const splitedText = new SplitText(aboutheading, {
    type: 'lines',
    linesClass: "line-1"
  });

  const splitedText2 = new SplitText(aboutheading, {
    type: 'lines',
    linesClass: "line-2"
  });

  gsap.set(splitedText.lines, { yPercent: 140 });
  gsap.set(splitedText2.lines, { overflow: "hidden" });
  gsap.set(aboutContent, { opacity: 0 });

  gsap.to(splitedText.lines, {
    yPercent: 0, duration: 0.4, ease: "Power.out", stagger: 0.1,
    scrollTrigger: {
      trigger: aboutheading,
      start: "top 80%"
    }
  })

  gsap.to(aboutContent, {
    opacity: 1, duration: 0.4, ease: "Power.out",
    scrollTrigger: {
      trigger: aboutContent,
      start: "top 80%"
    }
  });
};
