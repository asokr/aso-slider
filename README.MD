Native JavaScript Easy Aso-Slider
  
How TO USE  
  
Add to the page div with slider id: <div id="aso-slider"></div>  
  
Use object 'asoSlider' to control. You can change it in slider.js:  
<pre>
<script> 
      let asoSlider = {
          images: ['img/slider_1.jpg', 'img/slider_2.jpg', 'img/slider_3.jpg', 'img/slider_4.jpg',], //links to your img
          speed: 3000, //Slider speed
          autoPlay: 1, //Use autoplay to your slides
          loop: 1, //Make a loop slider
          animation: 'fade', //Animation. Create your own in CSS
          asoSliderTitle: "Demo Slider", //Slider Title
          dots: 1, //Use dots navigation
          prevAndNext: 1, //Use Prev and Next navigation
          prev: '<div class="arrow-left"></div>', //Prev Nav (<i class="fas fa-arrow-left"></i>) 
          next: '<div class="arrow-right"></div>' //Next Nav (<i class="fas fa-arrow-right"></i>)
      };
</script>  
</pre>
<hr>
To config slider on page:
<pre>
<script>  
   asoSlider.images = ['slide_1.jpg', 'slide_2.jpg']; // add images to the slider
</script>
</pre>
Make your own animation:<br>
Use slider.css to add your own ccs3 animation, like '.fade' on demo, then add animation to control.
You can use animate.css to add effects. (https://daneden.github.io/animate.css/)
<pre>
<script>
   asoSlider.animation = 'fade'; // Or slideUp, slideRight anything you add to css.
</script>
</pre>
