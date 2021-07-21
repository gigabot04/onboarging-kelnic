import noUiSlider from '../../vendor/nouislider';
const initRangeSlider = () => {
  const slider = document.querySelector('#form-slider1');

  noUiSlider.create(slider, {
    start: [5500000, 18900000],
    connect: true,
    step: 1,
    range: {
      'min': 0,
      'max': 36000000,
    },
  });
  const slider2 = document.querySelector('#form-slider2');

  noUiSlider.create(slider2, {
    start: [33, 123],
    connect: true,
    step: 1,
    range: {
      'min': 0,
      'max': 250,
    },
  });
};

window.initRangeSlider = initRangeSlider;
export {initRangeSlider};
