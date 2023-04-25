const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemoffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemoffset - animItemPoint) && pageYOffset < (animItemoffset + animItemHeight)) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
}
setTimeout(() => {
  animOnScroll();
}, 300);
const slidesContainer = document.querySelector('.my-projects__container');


const langBtns = document.querySelectorAll('.lang-menu__btn');
const allLang = ['en', 'ru'];
const enBtn = document.querySelector('.enBtn');
const ruBtn = document.querySelector('.ruBtn');

function setLanguageIndicator(lang) {
  if (lang === 'en') {
    enBtn.classList.add('lang-menu__btn_select');
    ruBtn.classList.remove('lang-menu__btn_select');
  } else {
    ruBtn.classList.add('lang-menu__btn_select');
    enBtn.classList.remove('lang-menu__btn_select');
  }
}

langBtns.forEach((item) => {
  item.addEventListener('click', changeUrlLanguage);
});

function changeUrlLanguage(evt) {
  let lang = evt.target.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
};

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substring(1);
  setLanguageIndicator(hash);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#en';
    location.reload();
  }
  for (let key in langArr) {
    let elements = document.querySelectorAll('.lng-' + key);
    elements.forEach(elem => {
      if (elem) {
        elem.innerHTML = langArr[key][hash];
      }
    });
  }
}

changeLanguage();

var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn')
let currentSlide = 1;

var manualNav = function(manual) {
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
  });
});

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    manualNav(i);
    currentSlide = i;
  });
});

