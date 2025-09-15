// --- Interactive Feature: Animate Elements on Scroll ---
document.addEventListener('DOMContentLoaded', () => {
    // This is a modern way to check if an element is visible on the screen.
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is on the screen (is intersecting)
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger the CSS animation
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Find all elements we want to animate and tell the observer to watch them.
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));
});


// --- Form Validation (for Contact Page) ---
const form = document.getElementById('contact-form');

if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const messageError = document.getElementById('message-error');

        let isValid = true;

        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
            emailError.textContent = 'Please enter a valid email.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        if (messageInput.value.trim().length < 10) {
            messageError.textContent = 'Message must be at least 10 characters long.';
            isValid = false;
        } else {
            messageError.textContent = '';
        }

        if (isValid) {
            alert('Thank you for your message, ' + nameInput.value.trim() + '! I will be in touch soon.');
            form.reset();
            nameError.textContent = '';
            emailError.textContent = '';
            messageError.textContent = '';
        }
    });
}
