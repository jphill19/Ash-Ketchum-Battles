var screenSize650 = window.matchMedia("(max-width: 650px)");


class ListenForUserInputs {
    constructor() {
        // Initialize instance properties
        this.check = false; // Flag to control input handling
        this.scrolledIntoView = false; // Flag to track if an item is scrolled into view
        this.index = -1; // Index of the currently selected suggestion
        this.list = document.querySelectorAll('.suggestion-item'); // List of suggestion items
        this.sectionContainerRect = document.querySelector('.section_container').getBoundingClientRect(); // Rectangle of the container

        this.length = this.list.length; // Length of the suggestion list
        // Bind event handler methods to the current instance
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.mouseOverInstead = this.mouseOverInstead.bind(this);
        this.mouseOut = this.mouseOut.bind(this);

        // Add event listeners for keyboard input, mouseover, and mouseout
        document.addEventListener('keydown', this.handleKeyDown);
        document.querySelector('#suggestions').addEventListener('mouseover', this.mouseOverInstead);
        document.querySelector('#suggestions').addEventListener('mouseout', this.mouseOut);
    }

    // Method to handle keydown events
    handleKeyDown(event) {
        if (this.check) {
            if (event.key === "ArrowDown") {
                event.preventDefault();
                if (this.index >= 0) {
                    this.checkIfHighlighted();
                }
                this.index = (this.index + 1) % this.length;
                this.list[this.index].classList.add('highlighted');
                this.scrollIntoViewIfNeeded(this.list[this.index]);
            } else if (event.key === "ArrowUp") {
                event.preventDefault();
                if (this.index >= 0) {
                    this.checkIfHighlighted();
                }
                this.index = (this.index - 1 + this.length) % this.length;
                this.list[this.index].classList.add('highlighted');
                this.scrollIntoViewIfNeeded(this.list[this.index]);
            } else if (event.key === "Enter") {
                if (this.index != -1) {
                    event.preventDefault();
                    document.getElementById('search').value = this.list[this.index].textContent;
                    $('suggestions').slideUp("slow");
                    document.getElementById('suggestions').innerHTML = '';
                    this.reset();
                    this.check = false;
                }
            }
        }
    }

    // Method to handle mouseover events on suggestion items
    mouseOverInstead(item) {
        if (this.scrolledIntoView == false) {
            if (this.index >= 0) {
                this.checkIfHighlighted();
            }
            this.index = parseInt(item.target.id);
            this.list[this.index].classList.add('highlighted');
            this.scrolledIntoView = false;
        }
    }

    // Method to scroll an element into view if it's off screen
    scrollIntoViewIfNeeded(element) {
        const rect = element.getBoundingClientRect();
        if (rect.bottom > this.sectionContainerRect.bottom) {
            this.scrolledIntoView = true;
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    // Method to handle mouseout events on suggestion items
    mouseOut() {
        this.scrolledIntoView = false;
        if (this.index >= 0) {
            this.checkIfHighlighted();
        }
        this.index = -1;
    }

    // Method to remove highlighting from the currently selected suggestion item
    checkIfHighlighted() {
        if (this.list[this.index].classList.contains('highlighted')) {
            this.list[this.index].classList.remove('highlighted');
        }
    }

    // Method to remove event listener for keydown events
    destroy() {
        document.removeEventListener('keydown', this.handleKeyDown);
        this.check = false;
    }

    // Method to add event listener for keydown events
    rediploy() {
        document.addEventListener('keydown', this.handleKeyDown);
        this.check = true;
    }

    // Method to reset the index and scrolledIntoView flag
    reset() {
        if (this.index >= 0) {
            this.checkIfHighlighted();
        }
        this.index = -1;
        this.scrolledIntoView = false;
    }

    // Method to update the list of suggestion items
    update() {
        this.reset();
        this.list = document.querySelectorAll('.suggestion-item');
        this.length = this.list.length;
        this.check = true;
    }
}



window.pokeballOpen = false;
window.aiResponseDisplayed = false;
window.searchInProgress = false;

  
//Adjust paragraph sizing
function adjustParagraphSize(x) {
    const heading = $('#pokemon_lookup');
    const paragraph = $('.ai-answer');
    const headingWidth = heading.css('width');
    paragraph.css('width', headingWidth);
    console.log('Paragraph size adjusted');

}
  




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
        if (screenSize650.matches) {
            // var textContent = $('#'+ elementId);
            // $(textContent).fadeOut("slow");
            // $(textContent).removeClass('hidden');
            // console.log("------------------Screen Size 650------------------");
            // setTimeout(() => {
            //     $(textContent).text(newText);
            //     $(textContent).fadeIn("slow");
            //     resolve();
            // }, 500);
            intervalSpeed = 40;
        } 
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
    if (screenSize650.matches) {
        var textContent = $('#'+ elementId);
        $(textContent).addClass('hidden');
        console.log("------------------Screen Size 650------------------");
        console.log("#"+ elementId);
        $(textContent).text(newText);
        $(textContent).fadeIn("slow");
    } else {
        const text = document.getElementById(elementId);
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
  }

function animateImageIn() {
    return new Promise((resolve, reject) => {
        console.log("Text typing animation completed.");
        const width= $('.pokeball').css('width')
        const height = $('.pokeball').css('height')
        console.log(width + height +"Pokeballs height and width")
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
        const notifierIcon = document.getElementById('ash_battle_notifier_icon')
        if (data.isPokemon === true) {
            const pokemonName = data.pokemonName.charAt(0).toUpperCase() + data.pokemonName.slice(1);
            const newHeading = `Has Ash battled against ${pokemonName}?`;

            // Update the DOM for image and AI result sections
            document.querySelector('#pokemon_image_result').innerHTML = `
                <div id="image-container-div" class="image-container hidden">
                    <img src="${data.pokemonImage}" id="pokemon-search-image" class="pokemon-image pokeball-border .pokemon_saturation hidden" alt="${pokemonName}">
                </div>
            `;
            document.querySelector('#pokemon_ai_result').innerHTML = `
                <p id="pokemon-ai-answer" class="ai-answer"></p>
            `;
            
            if (data.chatResponse.slice(0,3).toLowerCase() === 'yes') {
                notifierIcon.src="/images/check-circle-fill.svg"
            } else { 
                notifierIcon.src="/images/x-circle-fill.svg"
            }

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
            notifierIcon.src="/images/x-circle-fill.svg"
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
        const $notifierIcon = $('#ash_battle_notifier_icon')
        $pokeball.toggleClass('transperant'); // Trigger the opacity change
        $notifierIcon.toggleClass('visible');

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


// ---------------------------------------------------------------------------------------------------------
function checkIfOffScreen(elementId) {
    console.log("Checking if off screen");
    const element = document.getElementById(elementId);
    const rect = element.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);
    console.log(window.innerHeight);
    const isOffScreen = (rect.bottom > window.innerHeight);
    if (isOffScreen) {
        console.log("Off screen");
        // element.scrollIntoView({behavior: "smooth", block: "start"});
    } else {
        console.log("On screen");
    }
    // return isOffScreen;
} 

// Document ready function
// ----------------------------asd-----------------------------------------------------------------------------
$(document).ready(function(){
    // prompt("Hello! I am an alert box!!")
    // Add class to internal links on hover
    adjustParagraphSize();
    var listenForUserInputs = new ListenForUserInputs();


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
            var count = 0
            suggestions.forEach(function(suggestion) {
                suggestionsHTML += `<div id="${count}" class="suggestion-item">${suggestion}</div>`;
                count += 1;
            });
            document.getElementById('suggestions').innerHTML = suggestionsHTML;
            console.log('Suggestions displayed')
            // checkIfOffScreen('suggestions');

            listenForUserInputs.update();
            // document.addEventListener("keydown", function(event) {
            //     console.log(event.key);
            //     if (event.key == "ArrowDown"){
            //         console.log("arrodown is true")
            //         var test = this.querySelectorAll('.suggestion-item')
            //         console.log(test)
            //         test[0].classList.add('hover_suggestion')
            //     }

            // });

        });
    });

    document.getElementById('search').addEventListener('focus', function() {
        document.getElementById('suggestions').classList.remove('hidden');
        console.log('Suggestions displayed');
        listenForUserInputs.rediploy();
    });
    document.getElementById('search').addEventListener('blur', function() {
        setTimeout(() => {
            document.getElementById('suggestions').classList.add('hidden');
        }, 300);
        listenForUserInputs.destroy();
        listenForUserInputs.reset();
    });
    
    // Add event listeners to click suggestions
    document.getElementById('suggestions').addEventListener('click', function(e) {
        if (e.target.classList.contains('suggestion-item')) {
            document.getElementById('search').value = e.target.textContent;
            $('suggestions').slideUp("slow");
            document.getElementById('suggestions').innerHTML = '';
        }
    });

    
});
