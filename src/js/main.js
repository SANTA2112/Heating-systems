// tabs

const qa = sel => [...document.querySelectorAll(sel)];

qa('.tab_btn').forEach((tab, i) => tab.onclick = () => {
  const dis = arr => arr.forEach(i => i.classList.remove('active'));
  const add = el => el.classList.add('active')
  dis(qa('.tab_btn')); dis(qa('.servises__type-of-servises')); add(tab); add(qa('.servises__type-of-servises')[i])
})


// slider-images

const sliderImages = document.querySelectorAll('.sliderContent__small-img');
const sliderContent = document.querySelectorAll('.sliderContent');

sliderContent.forEach(el => el.onmouseover = even => {
  const sliderMainImage = el.querySelector('.sliderContent__big-img');
  sliderImages.forEach(img => img.onclick = (e, b, c =sliderImages, d='src') => {
    for(b of c) b.classList[b===img?'add':'remove']('active');
    sliderMainImage.setAttribute(d, img.getAttribute(d));
  })
})




//certificates popap

const modalCert = document.querySelector('.modal.modal-cert');
const modalImg = document.querySelector('.modal.modal-cert .modal-img');
const padding = window.innerWidth - document.body.offsetWidth;
const closeMod = modals => {
  modals.forEach(modal => modal.onclick = e => {
    if(e.target === e.currentTarget) {
      modal.classList.remove('show');
      setTimeout(() => modal.style.display = '', 400);
      setTimeout(() => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = 0;
      }, 300)
    }
  })
}

qa('.certificate-block__elem').forEach(el => el.onclick = e => {
  modalCert.style.display = 'flex';
  modalImg.setAttribute('src', e.target.getAttribute('data-src'))
  setTimeout(() => modalCert.classList.add('show'), 0);
  if(document.body.offsetWidth > 768) document.body.style.paddingRight = `${padding}px`;
  document.body.style.overflow = 'hidden';
})
closeMod(qa('.modal'))

const modalWork = document.querySelector('.modal.modal-works');
const modalCallback = document.querySelector('.modal.modal-callback');
const modalSpecialist= document.querySelector('.modal.modal-specialist');
const modalCons = document.querySelector('.modal.modal-cons');
const ButtonsWork = qa('button').filter(el => el.classList.contains('works-cost'));
const ButtonsCallback = qa('button').filter(el => el.classList.contains('question'));
const ButtonsSpecialist= qa('button').filter(el => el.classList.contains('call-spec'));
const ButtonsCons  = qa('button').filter(el => el.classList.contains('cons'));

const showForm = (form, buttons) => {
  buttons.forEach(btn => btn.onclick = e => {
    form.style.display = 'flex';
    setTimeout(() => form.classList.add('show'), 0);
    if(document.body.offsetWidth > 768) document.body.style.paddingRight = `${padding}px`;
    document.body.style.overflow = 'hidden';
  })
}
showForm(modalWork, ButtonsWork)
showForm(modalCallback, ButtonsCallback)
showForm(modalSpecialist, ButtonsSpecialist)
showForm(modalCons, ButtonsCons)
//forms
/*
const formModal1 = document.querySelector('.modal .form-works');
const formBtns = document.querySelector('.servises__tabs-content');
const formBtns1 = document.querySelector('.mobile-slider');
const formWorks = document.querySelector('.modal .form-works');
const formCallBack = document.querySelector('.form-callback');
const formCons = document.querySelector('.form-cons');
const formSpecialist = document.querySelector('.form-specialist');
const select = document.querySelectorAll('.form-works__select');
const selectLabel = document.querySelectorAll('.form-works__select-label');
const selectOptions1 = document.querySelectorAll('.form-works__select-values');
const tabMenu = [...document.querySelectorAll('.servises__type-of-servises')];
const mobileTab = [...document.querySelectorAll('.mobile-slider .swiper-wrapper[data-tab]')];

select[0].addEventListener('click', e => {
  select[0].classList.toggle('active');
});
select[1].addEventListener('click', e => {
  select[1].classList.toggle('active');
});

selectOptions1[0].addEventListener('click', e => {
  if (e.target === e.currentTarget) return null;
  const input = e.target.closest('.form-works__select').querySelector('input');
  selectLabel[0].textContent = e.target.textContent;
  input.value = e.target.textContent;
  select[0].dispatchEvent(new CustomEvent('change', {detail: { value: e.target.textContent }}))
})
selectOptions1[1].addEventListener('click', e => {
  if (e.target === e.currentTarget) return null;
  const input = e.target.closest('.form-works__select').querySelector('input');
  selectLabel[1].textContent = e.target.textContent;
  input.value = e.target.textContent;
  select[1].dispatchEvent(new CustomEvent('change', {detail: { value: e.target.textContent }}))
})

select[0].addEventListener('blur', () => select[0].classList.remove('active'))
select[1].addEventListener('blur', () => select[1].classList.remove('active'))


formBtns.addEventListener('click', e => {
  if(e.target.classList.contains('servise__link')) {
    formModal1.style.display = 'flex';
    formWorks.style.marginLeft = 0;
    const activeTabMenu = tabMenu.filter(el => el.classList.contains('active'));
    if(activeTabMenu[0].getAttribute('data-tab') == 1) {
      selectLabel[1].textContent = 'Монтаж';
      selectLabel[1].nextElementSibling.value ='Монтаж';
    }
    if(activeTabMenu[0].getAttribute('data-tab') == 2) {
      selectLabel[1].textContent = 'Замена';
      selectLabel[1].nextElementSibling.value ='Замена';
    }
    if(activeTabMenu[0].getAttribute('data-tab') == 3) {
      selectLabel[1].textContent = 'Ремонт'
      selectLabel[1].nextElementSibling.value ='Ремонт';
    }
    if(activeTabMenu[0].getAttribute('data-tab') == 4) {
      selectLabel[1].textContent = 'Обслуживание'
      selectLabel[1].nextElementSibling.value ='Обслуживание';
    }
    setTimeout(() => formModal1.classList.add('show'), 0);
    document.body.style.paddingRight = `${padding}px`;
    document.body.style.overflow = 'hidden';
  }
})
formBtns1.addEventListener('click', e => {
  if(e.target.classList.contains('servise__link')) {
    formModal1.style.display = 'flex';
    formWorks.style.marginLeft = 0;
    const mobileActiveTab = mobileTab.filter(el => el.parentElement.parentElement.classList.contains('swiper-slide-active'))
    if(mobileActiveTab[0].getAttribute('data-tab') == 1) {
      selectLabel[1].textContent = 'Монтаж'
      selectLabel[1].nextElementSibling.value ='Монтаж';
    }
    if(mobileActiveTab[0].getAttribute('data-tab') == 2) {
      selectLabel[1].textContent = 'Замена'
      selectLabel[1].nextElementSibling.value ='Замена';
    }
    if(mobileActiveTab[0].getAttribute('data-tab') == 3) {
      selectLabel[1].textContent = 'Ремонт'
      selectLabel[1].nextElementSibling.value ='Ремонт';
    }
    if(mobileActiveTab[0].getAttribute('data-tab') == 4) {
      selectLabel[1].textContent = 'Обслуживание'
      selectLabel[1].nextElementSibling.value ='Обслуживание';
    }
    setTimeout(() => formModal1.classList.add('show'), 0);
    document.body.style.paddingRight = `${padding}px`;
    document.body.style.overflow = 'hidden';
  }
})*/



//slider

const swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});

[...document.querySelectorAll('form')].forEach(form => form.onsubmit = e => {
  e.preventDefault();
  const body = new FormData(form);
  fetch('/mail.php', { body: body, method: 'POST' })
    .then(_ => {
      console.log('done');
      window.location.href = '/thanks.html'
    })
});

const allImages = [...document.querySelectorAll('img')].forEach(img => {
  img.setAttribute('src', img.dataset.src)
})
