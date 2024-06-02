

//Adjust paragraph sizing
function adjustTextSize(x) {
    const heading = $('#record_title');
    const text = $('.copy_right');
    const paragraph = $('.paragraph-text')
    const sub_title = $('.sub_title')
    const container = $('.battle_history_title').parent();
    const headingWidth = heading.css('width');
    text.css('width', headingWidth);
    paragraph.css('width', headingWidth);
    sub_title.css('width',headingWidth);
    // console.log(container);
    container.css('width', headingWidth);
    // console.log('Paragraph size adjusted');


    // Trainer containers
    console.log('Trainer container size adjusted');

    const trainerImage = $('.trainer-pokemon-img');
    const trainerHeight = trainerImage.css('height');
    console.log(trainerHeight);
    const trainerDescription = $('.trainer-description');
    trainerDescription.css('height', trainerHeight);
    console.log('Trainer description size adjusted');
}

  
 
var font = new FontFaceObserver('Comic Neue');
font.load().then(function () {
    console.log('Font is available');
    adjustTextSize(x); // Now call your function
}, function () {
    console.log('Font is not available after waiting');
});




function slideDownContent() {
    $(this).parent().siblings('.battle_region').slideToggle();
    $(this).children().toggleClass('rotate');
}



// Attach listener function on screen resizing

$(window).resize(adjustTextSize);

function adjustImageSprites(x) {
    if (x.matches) { // If media query matches
        $('.trainers_pokemon').each(function() {
            var imageSrc = $(this).attr('src');
            var newSrc = imageSrc.replace('pokemon_images', 'pokemon_sprites');
            $(this).attr('src', newSrc);
        });
        $('.team_6').addClass("hidden")
    }else {
        $('.trainers_pokemon').each(function() {
            var imageSrc = $(this).attr('src');
            if (imageSrc.includes('pokemon_sprites')) {
                var newSrc = imageSrc.replace('pokemon_sprites', 'pokemon_images');
                $(this).attr('src', newSrc);
            }
        });
        $('.team_6').removeClass("hidden")

    }
}


var x = window.matchMedia("(max-width: 600px)")
adjustImageSprites(x);
x.addEventListener("change", function() {
    adjustImageSprites(x);
});


$(document).ready(function(){
    // var containers = $('.battle_history_title').parent().siblings('.battle_region');
    // console.log("hello" + containers);
    $('.battle_history_title').on('click', slideDownContent);


});
