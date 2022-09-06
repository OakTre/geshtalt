// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';
import siteSlider from './modules/siteSlider';
import maps from './modules/map';
import blocksReveal from './modules/fadeInBlocks';
import introAnimation from './modules/introAnimation';
import hidePreloader from './modules/hidePreloader';
import indexAboutAnimation from './modules/indexAboutAnimation';
import parralaxEffect from './modules/parralaxEffect';
import menu from './modules/menu';
import validation from './modules/validation';
import phoneMask from './modules/inputmask';

window.addEventListener("load", () => {
  hidePreloader();

  introAnimation();
});

documenReady(() => {
  window.___YOUR_PROJECT___API = { };

  lazyIMages();
  initModal();
  siteSlider();
  maps();
  blocksReveal();
  indexAboutAnimation();
  parralaxEffect();
  menu();
  validation();
  phoneMask();
});
