const btn = document.querySelector('.upbtn');

const initScrollUp = () => {
  if (window.pageYOffset === 0) {
    btn.classList.add('upbtn--disabled');
  }

  btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20);
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 8);
  });

  window.addEventListener('scroll', () => {
    if (window.pageYOffset !== 0) {
      btn.classList.remove('upbtn--disabled');
    } else {
      btn.classList.add('upbtn--disabled');
    }
  });
};

window.initScrollUp = initScrollUp;
export {initScrollUp};
