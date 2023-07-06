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

  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

  var modal = document.getElementById ('myModal');
  var modal2 = document.getElementById ('myModal2');
  var modal3 = document.getElementById ('myModal3');
  var modal4 = document.getElementById ('myModal4');
  var btn = document.getElementById ("myBtn");
  var btn2 = document.getElementById ("myBtn2");
  var btn3 = document.getElementById ("myBtn3");
  var btn4 = document.getElementById ("myBtn4");
  var span = document.getElementsByClassName("close")[0];
  var span2 = document.getElementsByClassName("close2")[0];
  var span3 = document.getElementsByClassName("close3")[0];
  var span4 = document.getElementsByClassName("close4")[0];

  btn.onclick = function() {
    modal.style.display = "block";
  }  
  span.onclick = function() {
    modal.style.display = "none";
  }

  btn2.onclick = function() {
    modal2.style.display = "block";
  }

  span2.onclick = function() {
    modal2.style.display = "none";
  }

  btn3.onclick = function() {
    modal3.style.display = "block";
  }

  span3.onclick = function() {
    modal3.style.display = "none";
  }

  btn4.onclick = function() {
    modal4.style.display = "block";
  }

  span4.onclick = function() {
    modal4.style.display = "none";
  }

 

  window.onclick = function(event) {
    if (Event.target == modal) {
    modal.style.display = "none";
  }}

  window.onclick = function(event) {
    if (Event.target == modal2) {
    modal2.style.display = "none";
  }}

  window.onclick = function(event) {
    if (Event.target == modal3) {
    modal3.style.display = "none";
  }}

  window.onclick = function(event) {
    if (Event.target == modal4) {
    modal4.style.display = "none";
  }

 
  }
  
