document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".bluebookslide");
    const prevButton = document.querySelector(".bluebookprev");
    const nextButton = document.querySelector(".bluebooknext");
    let currentSlide = 0;

    function showSlide(n) {
        // Hide all slides
        slides.forEach(slide => slide.style.display = "none");
        // Ensure current slide index is within bounds
        currentSlide = (n + slides.length) % slides.length;
        // Show current slide
        slides[currentSlide].style.display = "block";
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Show the first slide initially
    showSlide(currentSlide);

    // Event listeners for next and previous buttons
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);
});