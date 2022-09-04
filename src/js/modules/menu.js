import { disableScroll, enableScroll } from "../helpers/disableScroll";

export default () => {
  const menu = document.querySelector(".menu");
  const closeMenu = document.querySelector(".menu__close");
  const openMenu = document.querySelector(".header__burger-btn");

  openMenu.addEventListener("click", () => {
    menu.classList.add("is-open");
    disableScroll();
  });

  closeMenu.addEventListener("click", () => {
    menu.classList.remove("is-open");
    enableScroll();
  });
};
