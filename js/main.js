/* =================================
------------------------------------
	Game Warrior Template
	Version: 1.0
 ------------------------------------ 
 ====================================*/


'use strict';
$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");

});
$(document).ready(function () {
    // Smooth scroll function
    function smoothScroll(target) {
        if ($(target).length) {
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 800, 'swing'); // Adjust duration (800ms) and easing ('swing') as needed
        }
    }

    // Handle menu item clicks
    $('.menubar-item').on('click', function (event) {
        let targetElement = $(this).attr('href');

        // Check if the href contains a hash (e.g., index.html#professional-projects)
        if (targetElement.includes("#")) {
            event.preventDefault(); // Prevent default navigation

            // Extract the hash (e.g., #professional-projects)
            let hash = targetElement.split("#")[1];
            let target = "#" + hash;

            // If the target is on the same page, scroll to it
            if (window.location.pathname.endsWith("index.html")) {
                smoothScroll(target);
            } else {
                // If navigating from another page, go to index.html first, then scroll
                window.location.href = "index.html" + target;
                setTimeout(function () {
                    smoothScroll(target);
                }, 100); // Small delay to allow the page to load
            }
        }
    });

    // Smooth scroll when landing on the page with a hash
    if (window.location.hash) {
        setTimeout(function () {
            smoothScroll(window.location.hash);
        }, 200); // Delay ensures the page is fully loaded before scrolling
    }
});
        // If the link
$(document).ready(function () {
    $(".accordion").click(function () {
      $(this).toggleClass("active"); // Toggle active class on the accordion
      $(this).find(".accordion-icon").toggleClass("rotate"); // Rotate the icon
      $(this).next(".accordion-inner").toggleClass("visible"); // Show/hide accordion content
    });
   
    $("#hero-expand-box").click(function () {
        $('.hero-wrapper').css('min-height', '738px');
        $('#hero-expand').css('opacity', '0');
        // Scroll down to .hero-wrapper smoothly
        $('html, body').animate({
            scrollTop: $('.hero-wrapper').offset().top
        }, 800);
    });
    
    
  });

  




