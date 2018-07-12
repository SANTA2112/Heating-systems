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
const sliderMainImage = document.querySelector('.sliderContent__big-img');

sliderImages.forEach(el => el.onclick = e => {
  e.target.classList.add('active');
  sliderMainImage.setAttribute("src", e.target.getAttribute('src'))
});

sliderImages.forEach(el => el.onblur = e =>  e.target.classList.remove('active'));

var swiper = new Swiper('.swiper-container', {});
