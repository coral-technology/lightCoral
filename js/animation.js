



var $button = document.querySelector(".toggle");
var $close = document.querySelector(".close");
// on click event
$button.addEventListener('click', function () {
    if ($button.classList.contains("active")) {
        // if has 'selected' class remove class
        $('#particles-js').removeClass('active');
        $('#target').removeClass('active');
        $('.portal').removeClass('activeUp');
        $('.container').removeClass('active');
        $button.classList.remove("active");
        $close.classList.remove("close");
    } else {
        // otherwise add 'selected' class
        $('#particles-js').addClass('active');
        $('#target').addClass('active');
        $('.portal').addClass('activeUp');
        $('.container').addClass('active');
        $button.classList.add("active");
        $close.classList.add("close");
    }
});

$close.addEventListener('click', function () {
    if ($close.classList.contains("close")) {
        // if has 'selected' class remove class
        $('#particles-js').removeClass('active');
        $('#target').removeClass('active');
        $('.portal').removeClass('activeUp');
        $('.container').removeClass('active');
        $close.classList.remove("close");
        $button.classList.remove("active");
    } else {
        // otherwise add 'selected' class
        $('#particles-js').addClass('close');
        $('#target').addClass('active');
        $('.portal').addClass('activeUp');
        $('.container').addClass('active');
        $close.classList.add("close");
        $button.classList.add("active");
    }
});







function animateFrom(elem, direction) {
    direction = direction | 1;
    
    var x = 0,
        y = direction * 100;
    if(elem.classList.contains("gs_reveal_fromLeft")) {
      x = -100;
      y = 0;
    } else if(elem.classList.contains("gs_reveal_fromRight")) {
      x = 100;
      y = 0;
    }
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      duration: 1.25, 
      x: 0,
      y: 0, 
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
  }
  
  function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view
      
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });
  });
  