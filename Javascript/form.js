document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Get the form inputs
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Simple validation checks
    if (username === '') {
        alert('Please enter your username.');
        return;
    }
    if (password === '') {
        alert('Please enter your password.');
        return;
    }
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Form submission logic (e.g., send data to server or proceed with login)
    alert('Form submitted successfully!');
    // Uncomment the line below to actually submit the form
    // this.submit();
});