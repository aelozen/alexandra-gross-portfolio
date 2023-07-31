    document.addEventListener("DOMContentLoaded", function() {
        const characterImg = document.querySelector(".character-container img");
        const peekButton = document.querySelector(".peek-button");
        const containerHeight = document.querySelector(".character-container").clientHeight;
        const peekAmount = 35;

        function peekIn() {
            characterImg.style.top = `-${peekAmount}px`;
            peekButton.style.display = 'block'; 
            peekButton.disabled = false; 
        }

        function peekOut() {
            characterImg.style.top = `-${containerHeight}px`;
            peekButton.style.display = 'none'; 
            peekButton.disabled = true; 
        }

        // Peeking animation loop
        function animatePeek() {
            peekIn();
            setTimeout(peekOut, 1000); // Adjust how long waldo peeks
            setTimeout(animatePeek, 4000); // Adjust how often waldo peeks
        }

        animatePeek(); 
    });

    function onButtonClick() {
        window.open("/pages/research/research.html", "_blank");
    }
