
window.lineWidth = 3;
document.addEventListener('DOMContentLoaded', function () {

    const canvas = document.getElementById('bracketLines');
    const context = canvas.getContext('2d');
    const container = document.getElementById('tournamentContainer');
    const rounds = document.querySelectorAll('.round');

    function drawLine(startX, startY, endX, endY) {
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(endX, endY);
        context.stroke();
    }

    function connectTeams() {
        const containerRect = container.getBoundingClientRect();
        canvas.width = containerRect.width;
        canvas.height = containerRect.height;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.strokeStyle = '#000';
        context.lineWidth = window.lineWidth;

        for (let i = 0; i < rounds.length - 1; i++) {
            const currentRound = rounds[i];
            const nextRound = rounds[i + 1];

            const currentMatchups = currentRound.querySelectorAll('.matchup');
            const nextMatchups = nextRound.querySelectorAll('.matchup-winners');

            currentMatchups.forEach((matchup, index) => {
                const teams = matchup.querySelectorAll('.team-winner');
                const winner = nextMatchups[Math.floor(index / 2)];

                teams.forEach(team => {
                    const teamRect = team.getBoundingClientRect();
                    const winnerRect = winner.getBoundingClientRect();

                    const startX = teamRect.right;
                    const startY = (teamRect.top + teamRect.bottom) / 2 - containerRect.top;
                    const endX = winnerRect.left;
                    const endY = (winnerRect.top + winnerRect.bottom) / 2 - containerRect.top;

                    const halfX = (startX + endX) / 2;
                    const halfY = (startY + endY) / 2;

                    // drawLine(startX, startY, endX, endY);
                    drawLine(startX, startY, halfX, startY);
                    drawLine(halfX, startY, halfX, endY);
                    drawLine(halfX, endY, endX, endY);
                });
            });
        }
    }

    window.addEventListener('resize', connectTeams);
    window.addEventListener('scroll', connectTeams);

    // Ensure the content is hidden initially
    document.getElementById('content').classList.add('hidden');

    window.addEventListener('load', function() {
        // Hide the loader
        document.getElementById('loader').style.display = 'none';
        // Show the main content
        document.getElementById('content').classList.remove('hidden');
        adjustTextSize();
        connectTeams();
    });
    // Initial draw
    connectTeams();

    // Get the modal
    var modal = document.getElementById('myModal');
    var modalContent = modal.getElementsByClassName('modal-content')[0];
    var currentScreen = null;

    var close = $('.close');
    var modalButton = $('.modal_button');
    var flexContainer = document.getElementById('master-8-trainers');

    modalButton.click(function() {
        var targetId =  this.getAttribute('data-target');
        currentScreen = document.getElementById(targetId);
        modalContent.appendChild(currentScreen);
        var height = currentScreen.querySelector('.trainer-card-body .trainer-info .trainer-pokemon-img')
        var trainerDescription = currentScreen.querySelector('.trainer-card-body .trainer-info .trainer-description')
        trainerDescription.style.height = height.style.height;

        modal.style.display = "block";
        
    });

    close.click(function() {
        modal.style.display = "none";
        console.log(currentScreen);
        console.log(flexContainer);
        flexContainer.appendChild(currentScreen);
        currentScreen = null;
        adjustCardTextSize();
    });
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            flexContainer.appendChild(currentScreen);
            currentScreen = null;
            adjustCardTextSize();
        }
    };






    // Confetti

    const bottomImage = document.getElementById('celebrationImg');
    
    const observer = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
        // Confetti settings
        if (window.innerWidth < 900) {
            confetti({
                particleCount: 100,
                spread: 100,
                // origin: { y: 0.5 }
                origin: { y: 0.8 }
            });
        } else if (window.innerWidth < 550) {
            confetti({
                particleCount: 100,
                spread: 100,
                origin: { y: 1.1}
            });
        } else {
            confetti({
                particleCount: 100,
                spread: 100,
                origin: { y: 0.5 }
            });
        }
        observer.unobserve(bottomImage); // Stop observing after the first trigger
        }
    }, { threshold: 1.0 });
    
    observer.observe(bottomImage);


});

function adjustBracket(bracketAdjustments) {
    if (bracketAdjustments.matches) {
        $('.team-size').addClass('hidden');
        $('.ace_only').removeClass('hidden');
        $('.trainer_only').addClass('hidden');
        $('.trainer_and_ace').removeClass('hidden');
        window.lineWidth = 2;

    } else {
        $('.team-size').removeClass('hidden');
        $('.ace_only').addClass('hidden');
        $('.trainer_only').removeClass('hidden');
        $('.trainer_and_ace').addClass('hidden');
        window.lineWidth = 3;
    }
}

var bracketAdjustments = window.matchMedia("(max-width: 900px)")
adjustBracket(bracketAdjustments);

$(window).on('resize', function() {
    adjustBracket(bracketAdjustments);
});


// adjustThisCardTextSize(){

// }


function adjustCardTextSize(){
    const trainerImage = $('.trainer-pokemon-img');
    const trainerHeight = trainerImage.css('height');
    const trainerDescription = $('.trainer-description');
    trainerDescription.css('height', trainerHeight);
}


function adjustTextSize(x) {
    const heading = $('#master-title');
    const text = $('.copy_right');
    const paragraph = $('.smaller_font')
    const flexContainer = $('.flex-centered');
    const sub_title = $('.master_subtitle')
    const grid = $('.master_class_system_grid');
    const headingWidth = heading.css('width');
    const image = $('.master_image');
    const modal = $('.modal-content');
    flexContainer.css('width', headingWidth);
    text.css('width', headingWidth);
    paragraph.css('width', headingWidth);
    sub_title.css('width',headingWidth);
    grid.css('width', headingWidth);
    image.css('width', headingWidth);
    modal.css('width', headingWidth);



    adjustCardTextSize();


}


 
var font = new FontFaceObserver('Bangers');
font.load().then(function () {
    console.log('Font is available');
    adjustTextSize(x); // Now call your function
}, function () {
    console.log('Font is not available after waiting');
});

$(window).resize(adjustTextSize);