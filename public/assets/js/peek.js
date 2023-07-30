document.addEventListener("DOMContentLoaded", function() {
    const characterImg = document.querySelector(".character-container img");
    const containerHeight = document.querySelector(".character-container").clientHeight;
    const peekAmount = 40; // Adjust this value to control the amount of peeking

    function peekIn() {
        characterImg.style.top = `-${peekAmount}px`;
    }

    function peekOut() {
        characterImg.style.top = `${-containerHeight}px`;
    }

    // Peeking animation loop
    function animatePeek() {
        peekIn();
        setTimeout(peekOut, 1000); // Adjust the time for how long the character stays peeking
        setTimeout(animatePeek, 5000); // Adjust the time for how often the character peeks
    }

    animatePeek(); // Start the animation
});