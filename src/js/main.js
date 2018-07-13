// tabs
const tabs = [...document.querySelectorAll('.tab_btn')];
const contentTabs = [...document.querySelectorAll('.servises__type-of-servises')];

const activeTab = num => {
  [tabs, contentTabs].forEach(arr => arr.forEach((el, i) => {
    el.classList.remove('active'),
    el.classList.contains('tab_btn') && (i + 1) == el.getAttribute('data-tab') && el.classList.remove('active' + (i + 1))
  }));
  [tabs[num], contentTabs[num]].forEach((el, i) => {
    el.classList.add('active'),
    el.classList.contains('tab_btn') && 1 == el.getAttribute('data-tab') && el.classList.add('active1'),
    el.classList.contains('tab_btn') && 2 == el.getAttribute('data-tab') && el.classList.add('active2'),
    el.classList.contains('tab_btn') && 3 == el.getAttribute('data-tab') && el.classList.add('active3'),
    el.classList.contains('tab_btn') && 4 == el.getAttribute('data-tab') && el.classList.add('active4')
  });
}
activeTab(0);

tabs.forEach(tab => tab.onclick = activeTab.bind('', tabs.indexOf(tab)))

// slider-images

const sliderImages = document.querySelectorAll('.sliderContent__small-img');
const firstSliderImg = document.querySelectorAll('.sliderContent')[0].querySelectorAll('.sliderContent__small-img');
const secondSliderImg = document.querySelectorAll('.sliderContent')[1].querySelectorAll('.sliderContent__small-img');
const sliderMainImage1 = document.querySelectorAll('.sliderContent__big-img');
const slides = [...document.querySelectorAll('.sliderContent')];


slides.forEach((el, index) => el.onclick = e => {
  sliderMainImage1.forEach((el, i) => {
    if(e.target.classList.contains('sliderContent__small-img') && index === i) {
      sliderMainImage1[i].setAttribute("src", e.target.getAttribute('src'));
    }
    (e.target.getAttribute('src') === sliderMainImage1[i].getAttribute('src')) && e.target.classList.add('active');
  })
})

setInterval(() => firstSliderImg.forEach((el, i) => (el.getAttribute('src') !== sliderMainImage1[0].getAttribute('src')) && el.classList.remove('active')), 200)
setInterval(() => secondSliderImg.forEach((el, i) => (el.getAttribute('src') !== sliderMainImage1[1].getAttribute('src')) && el.classList.remove('active')), 200)

//certificates popap

const certificates = document.querySelectorAll('.certificate-block__elem');
const modalCert = document.querySelector('.modal-cert');
const modalImg = document.querySelector('.modal-img');
const padding = window.innerWidth - document.body.offsetWidth;

certificates.forEach(el => el.onclick = e => {
  modalCert.style.display = 'flex';
  modalImg.style.marginLeft = 0;
  modalImg.setAttribute('src', e.target.getAttribute('src'))
  setTimeout(() => modalCert.classList.add('show'), 0);
  document.body.style.paddingRight = `${padding}px`;
  document.body.style.overflow = 'hidden';
})
modalCert.addEventListener('click', e => {
  if(e.target === e.currentTarget) {
    modalCert.classList.remove('show');
    document.body.style.paddingRight = '';
    document.body.style.overflow = '';
    if(document.body.offsetWidth > 768) modalImg.style.marginLeft = padding + 'px';
    setTimeout(() => modalCert.style.display = '', 400);
  }
});

//forms
const formModal = document.querySelector('.form-modal');
const formBtns = document.querySelector('.servises__tabs-content');
const formBtns1 = document.querySelector('.mobile-slider');
const formWorks = document.querySelector('.form-works');
const tabMenu = [...document.querySelectorAll('.servises__type-of-servises')];
const mobileTab = [...document.querySelectorAll('.mobile-slider .swiper-wrapper[data-tab]')];

formBtns.addEventListener('click', e => {
  if(e.target.classList.contains('servise__link')) {
    formModal.style.display = 'flex';
    formWorks.style.marginLeft = 0;
    const activeTabMenu = tabMenu.filter(el => el.classList.contains('active'));
    formWorks.typeofwork.selectedIndex = (activeTabMenu[0].getAttribute('data-tab') - 1);
    setTimeout(() => formModal.classList.add('show'), 0);
    document.body.style.paddingRight = `${padding}px`;
    document.body.style.overflow = 'hidden';
  }
})
formBtns1.addEventListener('click', e => {
  if(e.target.classList.contains('servise__link')) {
    formModal.style.display = 'flex';
    formWorks.style.marginLeft = 0;
    console.log(mobileTab);
    const mobileActiveTab = mobileTab.filter(el => el.parentElement.parentElement.classList.contains('swiper-slide-active'))
    formWorks.typeofwork.selectedIndex = (mobileActiveTab[0].getAttribute('data-tab') - 1);
    setTimeout(() => formModal.classList.add('show'), 0);
    document.body.style.paddingRight = `${padding}px`;
    document.body.style.overflow = 'hidden';
  }
})

formModal.addEventListener('click', e => {
  if(e.target === e.currentTarget) {
    formModal.classList.remove('show');
    document.body.style.paddingRight = '';
    document.body.style.overflow = '';
    if(document.body.offsetWidth > 768) formWorks.style.marginLeft = padding + 'px';
    setTimeout(() => formModal.style.display = '', 400);
  }
})




//slider

const swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});
