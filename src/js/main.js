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
const formModal1 = document.querySelector('.form-modal1');
const formModal2 = document.querySelector('.form-modal2');
const formModal3 = document.querySelector('.form-modal3');
const formModal4 = document.querySelector('.form-modal4');
const formBtns = document.querySelector('.servises__tabs-content');
const formBtns1 = document.querySelector('.mobile-slider');
const formWorks = document.querySelector('.form-works');
const formCallBack = document.querySelector('.form-callback');
const formCons = document.querySelector('.form-cons');
const formSpecialist = document.querySelector('.form-specialist');
const select = document.querySelectorAll('.form-works__select');
const selectLabel = document.querySelectorAll('.form-works__select-label');
const selectOptions1 = document.querySelectorAll('.form-works__select-values');
const tabMenu = [...document.querySelectorAll('.servises__type-of-servises')];
const mobileTab = [...document.querySelectorAll('.mobile-slider .swiper-wrapper[data-tab]')];
const callBackButtons = [...document.querySelectorAll('button.button')];
const callBackBut = callBackButtons.filter(el => el.textContent.includes('Заказать звонок'));
const callBackCons = callBackButtons.filter(el => el.textContent.includes('Получить бесплатную консультацию'));
const callBackSpecialist =  callBackButtons.filter(el => el.textContent.includes('Задать вопрос специалисту бесплатно'))
const callSpecialist = callBackButtons.filter(el => el.textContent.includes('Вызвать специалиста-сметчика бесплатно'));
const callbackCost = callBackButtons.filter(el => el.textContent.includes('Рассчитать точную стоимость монтажа'));

callbackCost.forEach(el => el.onclick = e => {
  formModal1.style.display = 'flex';
  formWorks.style.marginLeft = 0;
  setTimeout(() => formModal1.classList.add('show'), 0);
  document.body.style.paddingRight = `${padding}px`;
  document.body.style.overflow = 'hidden';
})

callSpecialist.forEach(el => el.onclick = e => {
  formModal3.style.display = 'flex';
  formSpecialist.style.marginLeft = 0;
  setTimeout(() => formModal3.classList.add('show'), 0);
  document.body.style.paddingRight = `${padding}px`;
  document.body.style.overflow = 'hidden';
})

callBackSpecialist.forEach(el => el.onclick = e => {
  formModal2.style.display = 'flex';
  formCallBack.style.marginLeft = 0;
  setTimeout(() => formModal2.classList.add('show'), 0);
  document.body.style.paddingRight = `${padding}px`;
  document.body.style.overflow = 'hidden';
})

callBackCons[0].addEventListener('click', e => {
  formModal4.style.display = 'flex';
  formCons.style.marginLeft = 0;
  setTimeout(() => formModal4.classList.add('show'), 0);
  document.body.style.paddingRight = `${padding}px`;
  document.body.style.overflow = 'hidden';
})

callBackBut[0].addEventListener('click', e => {
  formModal4.style.display = 'flex';
  formCons.style.marginLeft = 0;
  setTimeout(() => formModal4.classList.add('show'), 0);
  document.body.style.paddingRight = `${padding}px`;
  document.body.style.overflow = 'hidden';
})

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
})

formModal1.addEventListener('click', e => {
  if(e.target === e.currentTarget) {
    formModal1.classList.remove('show');
    document.body.style.paddingRight = '';
    document.body.style.overflow = '';
    formWorks.style.marginLeft = padding + 'px';
    setTimeout(() => formModal1.style.display = '', 400);
  }
})

formModal2.addEventListener('click', e => {
  if(e.target === e.currentTarget) {
    formModal2.classList.remove('show');
    document.body.style.paddingRight = '';
    document.body.style.overflow = '';
    formCallBack.style.marginLeft = padding  + 'px';
    setTimeout(() => formModal2.style.display = '', 400);
  }
})

formModal3.addEventListener('click', e => {
  if(e.target === e.currentTarget) {
    formModal3.classList.remove('show');
    document.body.style.paddingRight = '';
    document.body.style.overflow = '';
    formSpecialist.style.marginLeft = padding  + 'px';
    setTimeout(() => formModal3.style.display = '', 400);
  }
})

formModal4.addEventListener('click', e => {
  if(e.target === e.currentTarget) {
    formModal4.classList.remove('show');
    document.body.style.paddingRight = '';
    document.body.style.overflow = '';
    formCons.style.marginLeft = padding  + 'px';
    setTimeout(() => formModal4.style.display = '', 400);
  }
})


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
