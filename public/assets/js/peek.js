document.addEventListener("DOMContentLoaded", function() {
    const characterImg = document.querySelector(".character-container img");
    const containerHeight = document.querySelector(".character-container").clientHeight;
    const peekAmount = 40;

    function peekIn() {
        characterImg.style.top = `-${peekAmount}px`;
    }

    function peekOut() {
        characterImg.style.top = `${-containerHeight}px`;
    }

    // Peeking animation loop
    function animatePeek() {
        peekIn();
        setTimeout(peekOut, 1000); // Adjust how long waldo peeks
        setTimeout(animatePeek, 5000); // Adjust how often waldo peeks
    }

    animatePeek();
});