      //Control
      let asoSlider = {
        images: ['img/slider_1.jpg', 'img/slider_2.jpg', 'img/slider_3.jpg', 'img/slider_4.jpg'],
        speed: 3000,
        autoPlay: 1,
        loop: 1,
        animation: 'fade',
        asoSliderTitle: "Demo Slider",
        dots: 1,
        prevAndNext: 1,
        prev: '<div class="arrow-left"></div>',
        next: '<div class="arrow-right"></div>'
    };

document.addEventListener('DOMContentLoaded', function () {

      // Slider

      //DOM Init
      let sliderMain = document.getElementById('aso-slider'),
          sliderWrap = document.createElement('div');
      sliderWrap.classList.add('wrap');
      asoSlider.images.forEach((img) => {
      let slide = document.createElement('div');
          slide.classList.add('aso-slider-item', asoSlider.animation);
          slide.innerHTML = '<img src="' + img + '" alt="Slider IMG">';
          sliderWrap.append(slide);
      });
      sliderMain.append(sliderWrap);

      if (asoSlider.prevAndNext == 1) {
          let domPrev = document.createElement('div'),
              domNext = document.createElement('div');
          domPrev.classList.add('prev');
          domNext.classList.add('next');
          domPrev.innerHTML = asoSlider.prev;
          domNext.innerHTML = asoSlider.next;
          sliderWrap.append(domPrev);
          sliderWrap.append(domNext);
      }

      if (asoSlider.dots == 1) {
          let sliderDots = document.createElement('div');
          sliderDots.classList.add('aso-slider-dots');
          asoSlider.images.forEach((img) => {
              let innerDot = document.createElement('div');
              innerDot.classList.add('dot');
              sliderDots.append(innerDot);
          });
          sliderMain.append(sliderDots);
      }

      //Func
      let slideIndex = 1,
          slides = document.querySelectorAll('.aso-slider-item'),
          prev = document.querySelector('.prev'),
          next = document.querySelector('.next'),
          dotsWrap = document.querySelector('.aso-slider-dots'),
          dots = document.querySelectorAll('.dot');

      function showSlides(n) {
          if (asoSlider.loop == 1){
            if (n > slides.length) {
                slideIndex = 1;
            } else if (n < 1) {
                slideIndex = slides.length;
            }
          } else {
            if (n == slides.length) {
                next.style.display = 'none';
            } else if (n < slides.length) {
                next.style.display = 'block';
            }
            if (n == 1) {
                prev.style.display = 'none';
            } else if (n > 1) {
                prev.style.display = 'block';
            }
          }


          slides.forEach((item) => item.style.display = 'none');
          dots.forEach((item) => item.classList.remove('dot-active'));

          slides[slideIndex - 1].style.display = 'block';
          dots[slideIndex - 1].classList.add('dot-active');
      }

      function plusSlides(n) {
          showSlides(slideIndex += n);
      }

      function currentSlide(n) {
          showSlides(slideIndex = n);
      }
      if (asoSlider.autoPlay == 1) {
          let move = setInterval( () => {
            if (asoSlider.loop == 1){
              showSlides(slideIndex += 1);
            } else {
                if (slideIndex < slides.length) {
                    showSlides(slideIndex += 1);
                }
            }
          }, asoSlider.speed);
      }

      prev.addEventListener('click', () => {
          plusSlides(-1);
      });

      next.addEventListener('click', () => {
          plusSlides(1);
      });

      dotsWrap.addEventListener('click', (event) => {
          for (let i = 0; i < dots.length + 1; i++) {
              if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                  currentSlide(i);
              }
          }
      });

      showSlides(slideIndex);
  });