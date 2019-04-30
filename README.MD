#Native JavaScript Easy Aso Slider
<p>How TO USE</p>
<p>Add to the page div with slider id: &lt;div id=“aso-slider”&gt;&lt;/div&gt;</p>
<p>Use object ‘asoSlider’ to control. You can change it in slider.js:<br>
  <pre>
&lt;script&gt;<br>
let asoSlider = {<br>
images: [‘img/slider_1.jpg’, ‘img/slider_2.jpg’, ‘img/slider_3.jpg’, ‘img/slider_4.jpg’,], //links to your img<br>
speed: 3000, //Slider speed<br>
autoPlay: 1, //Use autoplay to your slides<br>
loop: 1, //Make a loop slider<br>
animation: ‘fade’, //Animation. Create your own in CSS<br>
asoSliderTitle: “Demo Slider”, //Slider Title<br>
dots: 1, //Use dots navigation<br>
prevAndNext: 1, //Use Prev and Next navigation<br>
prev: ‘&lt;div class=“arrow-left”&gt;&lt;/div&gt;’, //Prev Nav (&lt;i class=“fas fa-arrow-left”&gt;&lt;/i&gt;)<br>
next: ‘&lt;div class=“arrow-right”&gt;&lt;/div&gt;’ //Next Nav (&lt;i class=“fas fa-arrow-right”&gt;&lt;/i&gt;)<br>
};<br>
&lt;/script&gt;</p>
</pre>
<hr>
<p>To config slider on page:<br>
  <pre>
&lt;script&gt;<br>
asoSlider.images = [ &lt;?php<br>
items = [‘img/slider_1.jpg’, ‘img/slider_2.jpg’, ‘img/slider_3.jpg’, ‘img/slider_4.jpg’];<br>
foreach (items as item) {<br>
echo “’”.item.&quot;’,&quot;;<br>
} ?&gt;<br>
]; // add images to the slider from php<br>
&lt;/script&gt;</p>
</pre>
<p>Make your own animation:<br>
Use slider.css to add your own ccs3 animation, like ‘.fade’ on demo, then add animation to control.<br>
You can use animate.css to add effects. (<a href="https://daneden.github.io/animate.css/">https://daneden.github.io/animate.css/</a>)<br>
  <pre>
&lt;script&gt;<br>
asoSlider.animation = ‘fade’; // Or slideup, slideright anything you add to css.<br>
&lt;/script&gt;</p>
</pre>
