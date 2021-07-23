const item = document.querySelector('#table__item').content;
const tableBody = document.querySelector('.table__body');
const loadBtn = document.querySelector('.table__load-btn');
const btn = document.querySelectorAll('.table__btn');

let fullList = [];
let hiddenList = [];
let sortList = [];

btn[0].addEventListener('click', () => {
  if (btn[0].classList.contains('table__btn--up')) {
    btn[0].classList.add('table__btn--down');
    btn[0].classList.remove('table__btn--up');

    sortList.sort((a, b) => {
      return a.squares - b.squares;
    });

  } else if (!btn[0].classList.contains('table__btn--up')) {
    btn[0].classList.add('table__btn--up');
    btn[0].classList.remove('table__btn--down');

    sortList.sort((a, b) => {
      return b.squares - a.squares;
    });
  }

  btn[1].classList.remove('table__btn--up');
  btn[1].classList.remove('table__btn--down');
  btn[2].classList.remove('table__btn--up');
  btn[2].classList.remove('table__btn--down');

  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }

  add(sortList);
});

btn[1].addEventListener('click', () => {
  if (btn[1].classList.contains('table__btn--up')) {
    btn[1].classList.remove('table__btn--up');
    btn[1].classList.add('table__btn--down');

    sortList.sort((a, b) => {
      return a.floor - b.floor;
    });

  } else if (!btn[1].classList.contains('table__btn--up')) {
    btn[1].classList.add('table__btn--up');
    btn[1].classList.remove('table__btn--down');

    sortList.sort((a, b) => {
      return b.floor - a.floor;
    });
  }

  btn[0].classList.remove('table__btn--up');
  btn[0].classList.remove('table__btn--down');
  btn[2].classList.remove('table__btn--up');
  btn[2].classList.remove('table__btn--down');

  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }

  add(sortList);
});

btn[2].addEventListener('click', () => {
  if (btn[2].classList.contains('table__btn--up')) {
    btn[2].classList.remove('table__btn--up');
    btn[2].classList.add('table__btn--down');

    sortList.sort((a, b) => {
      return a.price - b.price;
    });

  } else if (!btn[2].classList.contains('table__btn--up')) {
    btn[2].classList.add('table__btn--up');
    btn[2].classList.remove('table__btn--down');

    sortList.sort((a, b) => {
      return b.price - a.price;
    });
  }

  btn[0].classList.remove('table__btn--up');
  btn[0].classList.remove('table__btn--down');
  btn[1].classList.remove('table__btn--up');
  btn[1].classList.remove('table__btn--down');

  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }

  add(sortList);
});

const loadData = (lists) => {
  fullList.push(...lists);
  hiddenList.push(...fullList.splice(5, fullList.length));
  sortList = sortList.concat(fullList);
  add(fullList);
};

const add = (lists) => {
  const fragmentComments = document.createDocumentFragment();

  lists.forEach((list) => {
    const copyComment = item.cloneNode(true);

    copyComment.querySelector('.table__flat').innerHTML = list.flat;
    copyComment.querySelector('.table__squares').innerHTML = list.squares;
    copyComment.querySelector('.table__floor').innerHTML = list.floor + ' из ' + list.floors;
    copyComment.querySelector('.table__price').innerHTML = list.price;

    fragmentComments.appendChild(copyComment);

  });

  tableBody.appendChild(fragmentComments);
  return fragmentComments;
};

const loadComment = () => {
  let splice = hiddenList.splice(0, 5);
  sortList = sortList.concat(splice);
  tableBody.appendChild(add(splice));
  if (hiddenList[0] === undefined) {
    loadBtn.classList.add('table__load-btn--disabled');
  }
};

loadBtn.addEventListener('click', () => {
  loadComment();
});

window.loadData = loadData;
export {loadData};
