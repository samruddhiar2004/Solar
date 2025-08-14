document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Menu Toggle ---
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // --- Hero Slider Initialization (Swiper.js) ---
    const heroSlider = new Swiper('.hero-slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect: 'fade', // Use 'slide' or 'fade' or other effects
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 5000, // Time in ms before next slide
            disableOnInteraction: false,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    // --- On-Scroll Animation Logic (Intersection Observer) ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Optional: stop observing once visible
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    animatedElements.forEach(element => {
        observer.observe(element);
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