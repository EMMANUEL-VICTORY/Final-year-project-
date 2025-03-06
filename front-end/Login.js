document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (!username || !email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulate a loading state
    const loginBtn = document.querySelector('.login-btn');
    loginBtn.textContent = 'Logging in...';
    loginBtn.disabled = true;

    // Simulate a login request (replace with actual API call)
    setTimeout(() => {
        loginBtn.textContent = 'Login';
        loginBtn.disabled = false;

        // Display an error message (for demo purposes)
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Invalid username, email, or password.';
        errorMessage.style.color = 'red';
        errorMessage.style.marginTop = '10px';

        const form = document.querySelector('form');
        if (!document.querySelector('.error-message')) {
            form.appendChild(errorMessage);
        }
    }, 2000);
});