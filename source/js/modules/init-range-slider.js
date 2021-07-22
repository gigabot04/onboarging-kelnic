import noUiSlider from '../vendor/nouislider';
const initRangeSlider = () => {
  const slider = document.querySelector('#form-slider1');

  noUiSlider.create(slider, {
    start: [0, 36000000],
    connect: true,
    step: 1,
    range: {
      'min': 0,
      'max': 36000000,
    },
  });
  const slider2 = document.querySelector('#form-slider2');

  noUiSlider.create(slider2, {
    start: [0, 250],
    connect: true,
    step: 1,
    range: {
      'min': 0,
      'max': 250,
    },
  });

  const priceNum1 = document.querySelector('#price-flat1');
  const priceNum2 = document.querySelector('#price-flat2');
  const priceNums1 = [priceNum1, priceNum2];

  const squaresNum1 = document.querySelector('#squares-flat1');
  const squaresNum2 = document.querySelector('#squares-flat2');
  const squaresNums1 = [squaresNum1, squaresNum2];

  const resetBtn = document.querySelector('.form button[type="reset"]');
  const inputCheckbox = document.querySelectorAll('.form input[type="checkbox"]');

  priceNum1.addEventListener('change', () => {
    slider.noUiSlider.set([priceNum1.value, priceNum2.value]);
  });
  priceNum2.addEventListener('change', () => {
    slider.noUiSlider.set([priceNum1.value, priceNum2.value]);
  });

  squaresNum1.addEventListener('change', () => {
    slider2.noUiSlider.set([squaresNum1.value, squaresNum2.value]);
  });
  squaresNum2.addEventListener('change', () => {
    slider2.noUiSlider.set([squaresNum1.value, squaresNum2.value]);
  });

  slider.noUiSlider.on('update', (values, handle) => {
    priceNums1[handle].value = Math.round(values[handle]);
  });

  slider2.noUiSlider.on('update', (values, handle) => {
    squaresNums1[handle].value = Math.round(values[handle]);
  });

  resetBtn.addEventListener('click', (evt) => {
    evt.preventDefault();

    slider.noUiSlider.reset();
    slider2.noUiSlider.reset();

    for (let i = 0; i < inputCheckbox.length; i++) {
      let attr = inputCheckbox[i];

      if (attr.checked) {
        attr.removeAttribute('checked');
        attr.checked = '';
      }
    }
  });

};

window.initRangeSlider = initRangeSlider;
export {initRangeSlider};
