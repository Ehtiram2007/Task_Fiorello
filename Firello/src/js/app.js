var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".mySwipers", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation:{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// const mobilMenu = document.querySelector(".mobil_menu");
// const navMenu = document.querySelector(".ul1");

// mobilMenu.addEventListener("click",() =>{
//   mobilMenu.classList.toggle("active")
//   navMenu.classList.toggle("active")
// })