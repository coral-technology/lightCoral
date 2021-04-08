var window_width = $(window).width() - $('.pres1').width();

var document_height = $(document).height() - $(window).height();


$(function () {
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        var object_position_right = window_width * (scroll_position / document_height) * 3;
        $('.pres11').css({
            'right': object_position_right,
        });

    });
});



// $('.Show').click(function () {
//     $('#target').show(500);
//     $('.Show').hide(0);
//     $('.Hide').show(0);
//     $('#particles-js').removeClass('active');
//     $('#target').removeClass('active');
//     $('.portal').removeClass('activeUp');
// });
// $('.Hide').click(function () {
//     $('#target').hide(500);
//     $('.Show').show(0);
//     $('.Hide').hide(0);

// });
// $('.toggle').click(function () {
//     // $('#target').toggle('slow');
//     $('#particles-js').addClass('active');
//     $('#target').addClass('active');
//     $('.portal').addClass('activeUp');

// });


var $button = document.querySelector(".toggle");
var $close = document.querySelector(".close");
// on click event
$button.addEventListener('click', function () {
    if ($button.classList.contains("active")) {
        // if has 'selected' class remove class
        $('#particles-js').removeClass('active');
        $('#target').removeClass('active');
        $('.portal').removeClass('activeUp');
        $button.classList.remove("active");
        $close.classList.remove("close");
    } else {
        // otherwise add 'selected' class
        $('#particles-js').addClass('active');
        $('#target').addClass('active');
        $('.portal').addClass('activeUp');
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
        $close.classList.remove("close");
        $button.classList.remove("active");
    } else {
        // otherwise add 'selected' class
        $('#particles-js').addClass('close');
        $('#target').addClass('active');
        $('.portal').addClass('activeUp');
        $close.classList.add("close");
        $button.classList.add("active");
    }
});




/*/////////////////////////////////////////////////////////////////////////
* NOTICE:
* New version available: https://codepen.io/bastian_fiessinger/pen/vYyQNGr
*/////////////////////////////////////////////////////////////////////////


/**
 * ScrollToSmooth
 * vanilla JS smooth scroll to anchor library
 *
 * Author: Bastian Fießinger
 * Git Repository: https://github.com/bfiessinger/scrollToSmooth
 * NPM Package: https://www.npmjs.com/package/scrolltosmooth
 * 
 * Version: 2.2.1
 */

// DEMO
var smoothScroll = new scrollToSmooth('a', {
    easing: 'easeInOutBack',
    duration: 1200,
    durationRelative: true,
    onScrollStart: (data) => { },
    onScrollUpdate: (data) => { },
    onScrollEnd: (data) => { },
});
smoothScroll.init();

// Init Highlight JS
hljs.initHighlightingOnLoad();








var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;

    //  translate = 'translateX(' + x + 'px, ' + y + 'px)';
    translate = 'translateX(' + x + 'px) translateY(' + y + 'px)';
    translate2 = 'translateY(' + x + 20 + 'px) translateX(' + y + 20 + 'px)';
    $('.animate-this').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
    });


    $('.animate-text1').css({
        '-webit-transform': translate2,
        '-moz-transform': translate2,
        'transform': translate2
    });


    window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function (e) {

    var isHovered = $('.animate-this:hover').length > 0;

    //if(!$(e.target).hasClass('animate-this')) {
    if (!isHovered) {
        var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX)),
            lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));

        lFollowX = (30 * lMouseX) / 100;
        lFollowY = (30 * lMouseY) / 100;
    }
});

moveBackground();