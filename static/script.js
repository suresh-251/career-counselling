// Shared JavaScript for all pages

// Chatbot functionality
document.addEventListener('DOMContentLoaded', () => {
    const chatBotButton = document.querySelector('.chat-bot');
    
    if (chatBotButton) {
        chatBotButton.addEventListener('click', () => {
            alert('Chat Bot is under development! Stay tuned.');
        });
    }
});

// Form validation
function validateForm(event) {
    event.preventDefault(); // Prevent form submission for demo purposes

    const form = event.target;
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            alert(`Please fill out the ${input.name || 'required'} field.`);
            isValid = false;
        }
    });

    if (isValid) {
        alert('Form submitted successfully!');
    }
}

document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', validateForm);
});
