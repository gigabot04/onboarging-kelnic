// import {ieFix} from './utils/ie-fix';
// import {polyfillObjectFit} from './utils/polyfill-object-fit';

import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/modals/init-modals';
import {initRangeSlider} from './modules/init-range-slider';
import {initScrollUp} from './modules/init-scroll-top';
import {sendReq} from './modules/init-sendReq';
import {loadData} from './modules/init-add-list';


// //-- этот скрипт загружает модуль для тестирования, его не должно быть в финальном билде и на проде для клиента
// import {testInstruments} from './vendor/testInstruments';
// //--

// ---------------------------------
initRangeSlider();

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // только если ie11
  // ieFix();
  // https://github.com/fregante/object-fit-images
  // polyfillObjectFit();

  iosVhFix();
  initScrollUp();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    sendReq().then((data) => loadData(data)).catch((err) => console.log(err));
    // testInstruments();
  });
});

// ---------------------------------

// используйте .closest(el)

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// привязывайте js не на бэм, а на data-cookie

// выносим все в data-attr - url до пинов карты, настройки автопрокрутки, url к json и т.д.

