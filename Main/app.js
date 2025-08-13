document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Menu Toggle ---
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    

    // --- Contact Form Validation ---
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        // Prevent the form from submitting by default
        event.preventDefault();

        // Get values from the form fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Simple validation check
        if (name === '' || email === '' || message === '') {
            alert('Please fill out all required fields.');
            return; // Stop the function if validation fails
        }

        // If validation passes, show a success message
        // In a real application, you would send this data to a server.
        alert(`Thank you, ${name}! Your request has been sent successfully.`);
        
        // Optionally, reset the form after successful submission
        contactForm.reset();
    });


});


// Background images array
const heroSection = document.getElementById("hero");
const heroImages = [
    "./photos/img1.jpg",
    "./photos/img2.jpg",
    "./photos/img3.jpg"
];

let currentHeroIndex = 0;

function changeHeroBackground() {
    heroSection.style.backgroundImage = 
        `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('${heroImages[currentHeroIndex]}')`;
    currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
}

// Start rotation
changeHeroBackground(); // First image on load
setInterval(changeHeroBackground, 4000); // Change every 4 sec

