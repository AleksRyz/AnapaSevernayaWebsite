import * as flsFunctions from "./modules/functions.js";


// Webp
flsFunctions.isWebp();

//Применение класса "ibg" для адаптива картинок. берет путь картинки и назначает его фоном родительского блока
flsFunctions.ibg();

//==================================<меню бургер>=======================================
const menuBody = document.querySelector('.menu__list');  // тело меню
const iconMenu = document.querySelector('.menu-burger'); // кнопка бургера
if (iconMenu) {
	
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}
//==================================</меню бургер>=======================================


//===== select image ====================================================

const itemSlide = document.querySelectorAll('.item-img__slide');
itemSlide.forEach((n) => n.addEventListener("click", selectSlide));

function selectSlide(e) {

   const targetElement = e.target; //получаем элемент, который вызывает событие

   if (!targetElement.closest('item-img__slide.active')) {
      closeActive();
   }

   targetElement.classList.toggle("active");
   
   let slide = targetElement.getAttribute("src");
   console.log(slide);
   document.querySelector('.main-image').src = slide;

   
   function closeActive() {
      const classActive = document.querySelector('.item-img__slide.active');
      if (classActive) {
         classActive.classList.toggle("active");
      }
   }
}
//===== select image end====================================================





//==================================<slider>=======================================


import Swiper from "swiper";
import SwiperCore, { Navigation, Pagination } from 'swiper';

//запуск Встроенной функции навигации JavaScript Swiper
SwiperCore.use([Navigation, Pagination]); 

// слайдер №1
if(document.querySelector('.mySwiper')) {
   new Swiper('.mySwiper', {
      observer: true,
      observeParents: true,
      slidesPerView: 3,    // количество  слайдов
      spaceBetween: 32,   //отступ между слайдами
      watchOverflow: true,
      speed: 800,    // скорость
      loop: true,    //  бесконечный слайдер
      loopAdditionalSlides: 5,
      preloadImages: false,
      parallax: true,   // паралакс
      // Dotts
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
      // Arrows
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
   });
}
//==================================</slider>=======================================