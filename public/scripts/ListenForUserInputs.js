
export default class ListenForUserInputs {
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
