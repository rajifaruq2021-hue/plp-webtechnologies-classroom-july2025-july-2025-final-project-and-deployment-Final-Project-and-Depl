// This script will only run on the contact page, but we add a check to be safe.
const form = document.getElementById('contact-form');

// This 'if' statement prevents errors on pages that don't have the form.
if (form) {
    form.addEventListener('submit', function(event) {
        // Stop the form from submitting the traditional way
        event.preventDefault();

        // Get the form elements
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
            messageError.textContent = 'Message must be at least 10 characters.';
            isValid = false;
        } else {
            messageError.textContent = '';
        }

        // If all fields are valid, show success message
        if (isValid) {
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        }
    });
}
