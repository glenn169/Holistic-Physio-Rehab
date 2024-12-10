// Get the menu toggle button and the side menu
const menuToggle = document.querySelector('.menu-toggle');
const sideMenu = document.querySelector('.side-menu');
const closeBtn = document.querySelector('.close-btn');

// Show the side menu when the menu toggle is clicked
menuToggle.addEventListener('click', () => {
    sideMenu.classList.add('active');
});

// Hide the side menu when the close button is clicked
closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('active');
});


// smooth scroll function
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
  
    links.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
  
        const targetID = this.getAttribute('href');
        const targetSection = document.querySelector(targetID);
  
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
});
//scroll to banner
function scrollToBanner() {
    const banner = document.getElementById('banner');
    if (banner) {
      banner.scrollIntoView({ behavior: 'smooth' });
    }
  }
  

// testimonial section


function initParadoxWay() {
  "use strict";
 
  if ($(".testimonials-carousel").length > 0) {
      var j2 = new Swiper(".testimonials-carousel .swiper-container", {
          preloadImages: false,
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          autoplay:false,
          autoplayTimeout:2000,
          grabCursor: true,
          mousewheel: false,
          centeredSlides: true,
          pagination: {
              el: '.tc-pagination',
              clickable: true,
              dynamicBullets: true,
          },
          navigation: {
              nextEl: '.listing-carousel-button-next',
              prevEl: '.listing-carousel-button-prev',
          },
          breakpoints: {
              1024: {
                  slidesPerView: 3,
              },
              
              
          }
      });
  }
  
// bubbles -----------------
  
  
  setInterval(function () {
      var size = randomValue(sArray);
      $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
      $('.individual-bubble').animate({
          'bottom': '100%',
          'opacity': '-=0.7'
      }, 4000, function () {
          $(this).remove()
      });
  }, 350);
  
}

//   Init All ------------------
$(document).ready(function () {
  initParadoxWay();
});
