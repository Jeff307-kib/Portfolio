window.addEventListener('scroll', () => {
    const nextSection = document.querySelector(".next-section");

    // Detect if scroll is greater than a very small threshold, e.g., 10px
    if (window.scrollY > 10) {
        gsap.to(".section", {
            opacity: 1,
            y: 0, // Move the next section into view
            duration: 0.6,
            ease: "power2.out"
        });
    }
});
  
function animateText(selector, delay = 100) {
    const element = document.querySelector(selector);
    const text = element.textContent;
    const characters = text.split(""); // Split the text into individual characters
    
    element.textContent = ""; // Clear the content
    
    let charIndex = 0;
    
    function typeCharacter() {
      if (charIndex < characters.length) {
        element.textContent += characters[charIndex]; // Add one character at a time
        charIndex++;
        setTimeout(typeCharacter, delay); // Type the next character after a delay
      }
    }
    
    typeCharacter(); // Start the typing animation
  }
  
  // Trigger the animation for h1 and p
  document.addEventListener("DOMContentLoaded", () => {
    animateText(".intro h1", 100);  // Type h1 content with a faster delay
    animateText(".intro p", 50);   // Type p content with a slower delay
});

document.addEventListener('DOMContentLoaded', function() {
    new fullpage('#container', {
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: true,
        anchors: ['intro','About', 'Skills', 'Projects','Contact'],
        scrollOverflow: true,
        recordHistory: false
    });
});




  
  