document.addEventListener('DOMContentLoaded', () => {

    // --- DYNAMIC TYPING EFFECT FOR HOMEPAGE ---
    const typingElement = document.getElementById('typing-effect');
    if (typingElement) {
        const textToType = "Raji Faruq Ishola";
        let index = 0;
        function type() {
            if (index < textToType.length) {
                typingElement.textContent += textToType.charAt(index);
                index++;
                setTimeout(type, 150); // Speed of typing in milliseconds
            }
        }
        type();
    }


    // --- ROBUST ANIMATE ON SCROLL ---
    // This is a more modern way to handle scroll animations.
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once it's visible so it doesn't re-animate
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the element is visible
    });

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));


    // --- FORM VALIDATION FOR CONTACT PAGE ---
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

            // Name validation
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Name is required.';
                isValid = false;
            } else {
                nameError.textContent = '';
            }

            // Email validation
            if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
                emailError.textContent = 'Please enter a valid email.';
                isValid = false;
            } else {
                emailError.textContent = '';
            }

            // Message validation
            if (messageInput.value.trim().length < 10) {
                messageError.textContent = 'Message must be at least 10 characters long.';
                isValid = false;
            } else {
                messageError.textContent = '';
            }

            if (isValid) {
                alert('Thank you, ' + nameInput.value.trim() + '! Your message has been sent.');
                form.reset();
                nameError.textContent = '';
                emailError.textContent = '';
                messageError.textContent = '';
            }
        });
    }
});
