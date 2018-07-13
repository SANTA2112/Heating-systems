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


var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});
