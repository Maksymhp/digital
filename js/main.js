// $(document).ready(function(){
//     $('.ourteam__info').slick({
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 3
        
//     });
   
//   });

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },

      550: {
        slidesPerView: 2.5,
        spaceBetween: 20
      },
      
      700: {
        slidesPerView: 3,
        spaceBetween: 20
      },

    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
  });

  var swiper = new Swiper(".swiper-feedback", {
    slidesPerView: 2,
    spaceBetween: 100,
    pagination: {
      el: ".swiper-pagination1",
      clickable: true,
    },
  
    
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 1.4,
        spaceBetween: 50
      },

      750: {
        slidesPerView: 2,
        spaceBetween: 100
    }},

   
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
  });