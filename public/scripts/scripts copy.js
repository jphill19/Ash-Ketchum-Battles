import { check } from "express-validator";

window.pokeballOpen = false;
window.aiResponseDisplayed = false;
window.searchInProgress = false;


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

        $('#menu').removeClass('dropdown');
        $('#drop-button').removeClass('dropbtn');
        $('#menuholder').removeClass('dropdown-content');
        // $('#nav-title h1').text("A s h's B a t t l e s")

        
    


    }
  }
  
//Adjust paragraph sizing
function adjustParagraphSize(x) {
    const heading = $('#pokemon_lookup');
    const paragraph = $('.ai-answer');
    const headingWidth = heading.css('width');
    paragraph.css('width', headingWidth);
    console.log('Paragraph size adjusted');

}
  
// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 600px)")

// Call listener function at run time
adjustToSmallerScreen(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
adjustToSmallerScreen(x);
});

// Attach listener function on screen resizing

$(window).resize(adjustParagraphSize);


function toggleSlidePokeball() {
    return new Promise((resolve, reject) => {
        // Elements that will have the transition
        const $elements = $(".slide-down");

        // Ensure there is at least one element to animate
        if ($elements.length === 0) {
            reject("No elements to animate");
            return;
        }

        // Toggle the class that initiates the slide down animation
        $elements.toggleClass("open");

        // Handle the transition end event
        // We listen to the transitionend event on all elements and resolve when the first one completes
        $elements.one('transitionend', function() {
            resolve();
        });

        // Safety to ensure the promise resolves even if no transitionend event is triggered
        setTimeout(() => {
            resolve(); // Resolve anyway after a delay slightly longer than the transition should take
        }, 1000); // Assuming the transition duration is less than 1000 ms
    });
}







function typeNewText(newText, elementId, intervalSpeed = 10) {
    return new Promise((resolve, reject) => {
        const text = document.getElementById(elementId);
        if (!text) {
            reject(new Error("Element not found"));
            return;
        }

        // Start by fading out the current text
        text.style.opacity = '0';
  
        // Wait for the fade-out to complete
        setTimeout(() => {
            text.textContent = ''; // Clear the text after it's invisible
            text.style.opacity = '1'; // Make element fully visible for new text

            let index = 0;
            const interval = setInterval(() => {
                if (index < newText.length) {
                    text.textContent += newText[index++];
                } else {
                    clearInterval(interval); // Stop typing once complete
                    resolve(); // Resolve the promise when typing is finished
                }
            }, intervalSpeed); // Speed of typing each character
        }, 500); // Delay should match the CSS opacity transition time
    });
}

  function typeNewParagraph(newText, elementId, intervalSpeed = 10) {
    const text = document.getElementById(elementId);
  
    // Start by fading out the current text

  
    // Wait for the fade-out to complete
    setTimeout(() => {
  
      let index = 0;
      const interval = setInterval(() => {
        if (index < newText.length) {
          text.textContent += newText[index++];
        } else {
          clearInterval(interval); // Stop typing once complete
        }
      }, intervalSpeed); // Speed of typing each character
    }, 500); // Delay should match the CSS opacity transition time
  }  

function animateImageIn() {
    return new Promise((resolve, reject) => {
        console.log("Text typing animation completed.");
        $('#image-container-div').slideDown("slow", function() {
            console.log('Slide down complete.');
            resolve();  // Resolve the promise when the slide down animation completes
        });
    });
}

function animateImageOut() {
    return new Promise((resolve, reject) => {
        console.log("Text typing animation completed.");
        $('#image-container-div').slideUp("slow", function() {
            console.log('Slide down complete.');
            resolve();  // Resolve the promise when the slide down animation completes
        });
    });
}



function animateImageInUnown() {
    return new Promise((resolve, reject) => {
        console.log("Text typing animation completed.");
        $('#unown-image').slideDown("slow", function() {
            setTimeout(() => {
                console.log('Slide down complete.');
                resolve();  // Resolve the promise when the slide down animation completes
            }, 1000);
        });
    });
}

function animateImageOutUnown() {
    return new Promise((resolve, reject) => {
        console.log("Text typing animation completed.");
        $('#unown-image').slideUp("slow", function() {
            console.log('Slide down complete.');
            resolve();  // Resolve the promise when the slide down animation completes
        });
    });
}



function prePresentation(newHeading) {
    // Start by typing new text, which returns a promise
    return typeNewText(newHeading, 'pokemon_lookup', 7)
        .then(() => {
            console.log("Text typing animation completed.");
            return animateImageIn(); // Ensure animateImageIn returns a promise
        })
        .then(() => {
            console.log("Image animation completed.");
            return toggleSlidePokeball(); // Ensure toggleSlidePokeball returns a promise
        })
        .then(() => {
            console.log("Pre-presentation complete.");
            // Resolve the promise implicitly when all animations are complete
        })
        .catch(error => {
            console.error("An error occurred during the pre-presentation:", error);
            throw error; // Rethrow or handle error if you need specific error recovery
        });
}

// Function to perform a fadeIn animation
function presentation(paragraphText) {
    return new Promise((resolve, reject) => {
        $('#pokemon-search-image').slideDown(function() {
            setTimeout(() => {
                adjustParagraphSize();
                typeNewParagraph(paragraphText, 'pokemon-ai-answer');
                resolve();
            }, 1000);
        });
    });
}



function hideParagraph() {
    return new Promise((resolve, reject) => {
        $('#pokemon-ai-answer').fadeOut("slow", function() {
            resolve();
        });
    });
}

function toggleSearchContainerHide() {
    $('#search').slideToggle("fast");
    $('#search_button').slideToggle("fast");
    // $('#loader').slideToggle("fast");
}
function toggleSearchContainerShow() {
    // $('#loader').slideToggle("fast");
    $('#pokemon_search_form').trigger("reset");
    $('#search').slideToggle("fast");
    $('#search_button').slideToggle("fast");
    $('#suggestions').removeClass('hidden');
}

// function toggleSearchBar() {
//     $('#search').fadeToggle("slow");
// }

function loadSearchData(data) {
    return new Promise((resolve, reject) => {
        if (data.isPokemon === true) {
            const pokemonName = data.pokemonName.charAt(0).toUpperCase() + data.pokemonName.slice(1);
            const newHeading = `Has Ash battled against ${pokemonName}?`;

            // Update the DOM for image and AI result sections
            document.querySelector('#pokemon_image_result').innerHTML = `
                <div id="image-container-div" class="image-container hidden">
                    <img src="${data.pokemonImage}" id="pokemon-search-image" class="pokemon-image pokeball-border hidden" alt="${pokemonName}">
                </div>
            `;
            document.querySelector('#pokemon_ai_result').innerHTML = `
                <p id="pokemon-ai-answer" class="ai-answer"></p>
            `;

            // Chain the prePresentation and presentation functions
            prePresentation(newHeading)
                .then(() => presentation(data.chatResponse))
                .then(() => {
                    console.log('Fade in complete.');
                    // Additional actions after both animations
                    return changePokeballOpacity();
                })
                .then(() => {
                    window.pokeballOpen = true;
                    window.aiResponseDisplayed = true;
                    window.searchInProgress = false;
                    toggleSearchContainerShow();
                    resolve(); // Resolve the main promise after all actions are complete
                })
                .catch(error => {
                    console.error('An error occurred:', error);
                    reject(error); // Reject the main promise if an error occurs
                });

        } else {
            const newHeading = `Could not find that Pokémon, please try again`;

            // Update the DOM for image result
            document.querySelector('#pokemon_image_result').innerHTML = `
                <div>
                    <img src="/images/unown-question.png" id="unown-image" class="unown pokeball-border hidden" alt="${data.pokemonName}">
                </div>
            `;

            // Ensure typeNewText is also promise-based
            typeNewText(newHeading, 'pokemon_lookup')
                .then(() => {
                    console.log('Text typing animation completed');
                    return toggleSlidePokeball(); // Ensure toggleSlidePokeball returns a promise
                })
                .then(() => {
                    console.log('Slide down complete');
                    return animateImageInUnown(); // Ensure animateImageInUnown returns a promise
                })
                .then(() => {
                    console.log('Unown image animation complete');
                    return changePokeballOpacity();
                })
                .then(() => {
                    window.pokeballOpen = true;
                    window.searchInProgress = false;
                    toggleSearchContainerShow();
                    resolve(); // Resolve the main promise after updating the text
                })
                .catch(error => {
                    console.error('Error during typeNewText:', error);
                    reject(error); // Reject the main promise if an error occurs
                });
        }
    });
}


function playCaptureAnimation(data) {
    console.log('Playing capture animation');
    let animationsCompleted = 0;
    const animatedElements = document.querySelectorAll('.pokeball:not(.hidden)');
    animatedElements.forEach(pokeball => {
        pokeball.classList.add('catch_animation');
        pokeball.addEventListener('animationend', () => {
            animationsCompleted ++;
            pokeball.classList.remove('catch_animation');
            if (animationsCompleted === animatedElements.length) {
                console.log('capture animation is complete');
                // Start the next animation or perform other actions
                // toggleSlidePokeball().then(() => {
                loadSearchData(data)
                .then(() => {
                    console.log('All animations are complete');
                })
                .catch(error => {
                    console.error('Error:', error);
                });

            }
        });
    });
}

// function changePokeballOpacity(){
//     $('.pokeball').toggleClass('transperant');
// }

function changePokeballOpacity() {
    return new Promise((resolve, reject) => {
        const $pokeball = $('.pokeball');
        $pokeball.toggleClass('transperant'); // Trigger the opacity change

        // Resolve the promise once the transition ends
        setTimeout(() => {
            resolve(); // Resolve when the transition has finished
        }, 1125);

        // Optional: Reject or resolve the promise if the transition doesn't fire
        // (e.g., no CSS transition defined)
        setTimeout(() => {
            reject("Transition failed to fire within expected time.");
        }, 2000); // Adjust time based on your expected transition duration
    });
}

function managePokeball() {
    return new Promise((resolve, reject) => {
        if (window.pokeballOpen) {
            if (window.aiResponseDisplayed) {
                hideParagraph()
                    .then(() => {
                        console.log('Paragraph hidden');
                        return changePokeballOpacity();
                    })
                    .then(() => {
                        console.log('Pokeball hidden');
                        return animateImageOut();  
                    })
                    .then(() => {
                        console.log('Image hidden');
                        return toggleSlidePokeball();
                    })
                    .then(() => {
                        console.log('Pokeball closed');
                        window.pokeballOpen = false;
                        window.aiResponseDisplayed = false;
                        resolve();
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        reject(error);
                    });
            } else {
                changePokeballOpacity()
                    .then(() => {
                        console.log('Pokeball hidden');
                        return animateImageOutUnown();
                    })
                    .then(() => {
                        console.log('Image hidden');
                        return toggleSlidePokeball();
                    })
                    .then(() => {
                        console.log('Pokeball closed');
                        window.pokeballOpen = false;
                        resolve();
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        reject(error);
                    });
            }
        } else {
            resolve();
        }
    });
}



function formSubmission(event) {
    managePokeball().then(() => {
        console.log('Pokeball management successful');
            // Serialize form data
    const formData = new FormData(this);
    console.log('Form data:', formData);

    // Start the animation
    var pokemonName = formData.get('pokemon');
    pokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
    searchData = `Searching if Ash has battled against ${pokemonName}...`;
    typeNewText(searchData, 'pokemon_lookup')
        .then(() => {
            console.log("Text typing animation completed.");
            // Perform any additional actions after the typing has completed.
        })
        .catch(error => {
            console.error("Failed to type text:", error);
        });
    const animatedElements = document.querySelectorAll('.pokeball:not(.hidden)');
    animatedElements.forEach(el => el.classList.add('shake_animation'));

    let animationsCompleted = 0;
    let dataFetched = false;
    let responseData = null;

    // Function to check if both conditions are met
    function checkAndProcessData(responseData) {

        if (animationsCompleted === animatedElements.length && dataFetched && responseData !== null) {
            animatedElements.forEach(el => el.classList.remove('shake_animation')); // Stop animations
            // Both animations are done and data is fetched
            console.log('Both animations are done and data is fetched');
            playCaptureAnimation(responseData);
 
        } else if (animationsCompleted === animatedElements.length && dataFetched === false && responseData === null) {
            console.log("Data not ready yet")
            animationsCompleted = 0;
            animatedElements.forEach(el => el.classList.remove('shake_animation'));
            animatedElements.forEach(el => el.classList.add('shake_animation'));

     }
    }

    // Add animationend listeners
    animatedElements.forEach(el => {
        el.addEventListener('animationend', () => {
            animationsCompleted++;
            checkAndProcessData(responseData); // Check if ready to process data
        });
    });

    // Fetch data

    fetch('/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData).toString(),
    })
    .then(response => response.json())
    .then(data => {
        dataFetched = true;
        responseData = data;
        checkAndProcessData(); // Check if ready to process data
    })
    .catch(error => {
        console.error('Error:', error);
        dataFetched = true; // Mark as fetched to handle error scenario
        checkAndProcessData(); // Attempt to process if animations are done
    });
    }).catch(error => {
        console.error('Pokeball management failed:', error);
    });

}    
// Form submission event listener
// ---------------------------------------------------------------------------------------------------------
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission from reloading the page
    if (window.searchInProgress === false) {
        window.searchInProgress = true;
        document.getElementById('suggestions').innerHTML = '';
        document.getElementById('suggestions').classList.add('hidden');
        toggleSearchContainerHide();
        formSubmission.call(this);
    }
    else {
        console.log('Search in progress');

    }
    // check if pokeball is open
    
});

// Check to see if an element went off screen
// ---------------------------------------------------------------------------------------------------------
function checkIfOffScreen(elementId) {
    console.log("Checking if off screen");
    const element = document.querySelector(className);
    const rect = element.getBoundingClientRect();

    const isOffScreen = (rect.top > window.innerHeight) || (rect.bottom < 0);
    console.log("Is off screen:", isOffScreen)
    // return isOffScreen;
}


// ---------------------------------------------------------------------------------------------------------
// 
// Document ready function
// ---------------------------------------------------------------------------------------------------------
$(document).ready(function(){
    // prompt("Hello! I am an alert box!!")
    // Add class to internal links on hover
    adjustParagraphSize();
    $(".internal-link").on("mouseover", function(){
        $(this).addClass('hover');
    });
    $('.internal-link').on("mouseout", function(){
        $(this).removeClass('hover');
    });

    // $("#search_button").on("mouseover", function(){
    //     $(this).addClass('search_hover');
    // });
    // $('#search_button').on("mouseout", function(){
    //     $(this).removeClass('search_hover');
    // });
    $("#search_button").hover(
        function() {
            $(this).addClass('search_hover');
        },
        function() {
            $(this).removeClass('search_hover');
        }

    );
    
    


    // suggestion inputs
    document.getElementById('search').addEventListener('input', function() {
        var input = this.value;
        if (input.length < 2) { // Typically wait for a couple of letters before suggesting
            document.getElementById('suggestions').innerHTML = '';
            return;
        }
        console.log(encodeURIComponent(input));
        fetch('/suggest?q=' + encodeURIComponent(input))
        .then(response => response.json())
        .then(suggestions => {
            console.log(suggestions);
            var suggestionsHTML = '';
            suggestions.forEach(function(suggestion) {
                suggestionsHTML += `<div class="suggestion-item">${suggestion}</div>`;
            });
            document.getElementById('suggestions').innerHTML = suggestionsHTML;
            console.log('Suggestions displayed')
            checkIfOffScreen('suggestions');

            
        });
    });

    document.getElementById('search').addEventListener('focus', function() {
        document.getElementById('suggestions').classList.remove('hidden');
        console.log('Suggestions displayed');
    });
    document.getElementById('search').addEventListener('blur', function() {
        setTimeout(() => {
            document.getElementById('suggestions').classList.add('hidden');
        }, 300);
    });

    
    // Add event listeners to click suggestions
    document.getElementById('suggestions').addEventListener('click', function(e) {
        if (e.target.classList.contains('suggestion-item')) {
            document.getElementById('search').value = e.target.textContent;
            document.getElementById('suggestions').innerHTML = '';

        }
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