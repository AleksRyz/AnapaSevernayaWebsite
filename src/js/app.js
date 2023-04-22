import * as flsFunctions from "./modules/functions.js";


// Webp
flsFunctions.isWebp();

//Применение класса "ibg" для адаптива картинок. берет путь картинки и назначает его фоном родительского блока
flsFunctions.ibg();

//==================================<меню бургер>=======================================
const menuBody = document.querySelector('.menu__body');  // тело меню
const iconMenu = document.querySelector('.menu-burger'); // кнопка бургера
if (iconMenu) {
	
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}
//==================================</меню бургер>=======================================


//==================================<slider>=======================================


import Swiper from "swiper";
import SwiperCore, { Navigation, Pagination } from 'swiper';

//BildSlider автоматическая вставка слайдера( добавить класс _swiper в слайдер)
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
   for (let index = 0; index < sliders.length; index++) {
      let slider = sliders[index];
      if (!slider.classList.contains('swiper-bild')) {
         let slider_items = slider.children;
         if (slider_items) {
            for (let index = 0; index < slider_items.length; index++) {
               let el = slider_items[index];
               el.classList.add('swiper-slide');
            }
         }
         let slider_content = slider.innerHTML;
         let slider_wrapper = document.createElement('div');
         slider_wrapper.classList.add('swiper-wrapper');
         slider_wrapper.innerHTML = slider_content;
         slider.innerHTML = '';
         slider.appendChild(slider_wrapper);
         slider.classList.add('swiper-bild');

         if (slider.classList.contains('_swiper-scroll')) {
            let sliderScroll = document.createElement('div');
            sliderScroll.classList.add('swiper-scrollbar');
            slider.appendChild(sliderScroll);
         }
      }
   }
}

//запуск Встроенной функции навигации JavaScript Swiper
SwiperCore.use([Navigation, Pagination]); 

// слайдер №1
if(document.querySelector('.slider-main__body')) {
   console.log('1');
   new Swiper('.slider-main__body', {
      observer: true,
      observeParents: true,
      slidesPerView: 1,    // количество  слайдов
      spaceBetween: 32,   //отступ между слайдами
      watchOverflow: true,
      speed: 800,    // скорость
      loop: true,    //  бесконечный слайдер
      loopAdditionalSlides: 5,
      preloadImages: false,
      parallax: true,   // паралакс
      // Dotts
      pagination: {
         el: '.controls-slider-main__dotts',
         clickable: true,
      },
      // Arrows
      navigation: {
         nextEl: '.slider-main .slider-arrow__next',
         prevEl: '.slider-main .slider-arrow__prev',
      },
   });
}
//==================================</slider>=======================================