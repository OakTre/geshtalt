import gsap from "gsap";
import SplitText from '../../assets/js/gsap-bonus/SplitText';

gsap.registerPlugin(SplitText);

export default () => {
  const header = document.querySelector(".header");
  const heading = document.querySelector(".intro__heading");
  const headingText = document.querySelector(".intro__heading-text");
  const logo = document.querySelector(".intro__logo");
  const bottomBlockFirst = document.querySelector(".intro__bottom-block:nth-child(1)");
  const introNews = document.querySelector(".intro__news");
  const introSliderNav = document.querySelector(".intro__slider-nav-container");
  const body = document.querySelector("body");
  const timeline = gsap.timeline({
    paused: true,
  });

  if (!heading) return;

  const splitedText = new SplitText(heading, {
    type: 'lines',
    linesClass: "line-1"
  });

  const splitedText2 = new SplitText(heading, {
    type: 'lines',
    linesClass: "line-2"
  });


  gsap.set(splitedText.lines, { yPercent: 140 });
  gsap.set(splitedText2.lines, { overflow: "hidden" });
  gsap.set(headingText, { opacity: 0 });
  gsap.set(logo, { opacity: 0 });
  gsap.set(bottomBlockFirst, {opacity: 0, yPercent: 10});
  gsap.set(introNews, {opacity: 0, yPercent: 10});
  gsap.set(introSliderNav, {opacity: 0})

  timeline
    .to(splitedText.lines, { yPercent: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" })
    .to(headingText, { opacity: 1, duration: 0.6, ease: "power2.out", clearProps: "all" }, "-=0.5")
    .to(logo, { opacity: 1, duration: 0.6, ease: "power2.out", clearProps: "all" }, "-=0.8")
    .to(bottomBlockFirst, { opacity: 1, yPercent: 0, duration: 0.6, ease: "power2.out", clearProps: "all" }, "-=0.2")
    .to(introSliderNav, { opacity: 1, duration: 0.6, ease: "power2.out", clearProps: "all" }, "-=0.1")
    .to(introNews, { opacity: 1, yPercent: 0, duration: 0.6, ease: "power2.out", clearProps: "all" }, "-=0.4")


  setTimeout(() => {
    timeline.play();
  }, 430);
};
