
function adjustToSmallerScreen(x) {
    if (x.matches) { // If media query matches
        $('#drop-button').removeClass('hidden');
        $('#menuholder').removeClass("nav-links-container");
        $('#menuholder a').removeClass("internal-link");

        $('#menu').addClass('dropdown');
        $('#drop-button').addClass('dropbtn');
        $('#menuholder').addClass('dropdown-content');

        // $('#nav-title h1').text("Ash's Battles")
    } else {
        $('#drop-button').addClass('hidden');
        $('#menuholder').addClass("nav-links-container");
        $('#menuholder a').addClass("internal-link");

        // $('#menu').removeClass('dropdown');
        $('#drop-button').removeClass('dropbtn');
        $('#menuholder').removeClass('dropdown-content');
        // $('#nav-title h1').text("A s h's B a t t l e s")

        
    


    }
  }
  

  
// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 600px)")

// Call listener function at run time
adjustToSmallerScreen(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
adjustToSmallerScreen(x);
});











// ---------------------------------------------------------------------------------------------------------
// 
// Document ready function
// ---------------------------------------------------------------------------------------------------------
$(document).ready(function(){
    // prompt("Hello! I am an alert box!!")
    // Add class to internal links on hover

    $(".internal-link").on("mouseover", function(){
        $(this).addClass('hover');
    });
    $('.internal-link').on("mouseout", function(){
        $(this).removeClass('hover');
    });

    
    document.querySelector('#drop-button').addEventListener('click', function() {
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });
    
});