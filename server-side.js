// Server-side script (example using Node.js with Express)
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Mocked user data (replace with your actual user data retrieval logic)
const userData = {
    email: 'user@example.com',
    password: 'Password123',
};

// Dictionary to track unsuccessful login attempts
const loginAttempts = {};

app.post('/your-server-auth-endpoint', (req, res) => {
    const { email, password } = req.body;

    // Check if the email is in our database
    if (email in userData) {
        // Check if the password matches the stored password
        if (password === userData[email]) {
            // Successful login, reset the login attempts
            delete loginAttempts[email];
            res.status(200).json({ success: true, message: 'Authentication successful' });
        } else {
            handleFailedLogin(email, res);
        }
    } else {
        handleFailedLogin(email, res);
    }
});

function handleFailedLogin(email, res) {
    // Increase the login attempt count for the user
    loginAttempts[email] = (loginAttempts[email] || 0) + 1;

    // Check if the user has exceeded the maximum attempts
    if (loginAttempts[email] >= 7) {
        // Account is locked, send a link for password reset
        const resetLink = `https://your-website.com/reset-password?email=${encodeURIComponent(email)}`;
        const message = `Account Locked. Please Reset Password: <a href="${resetLink}">${resetLink}</a>`;
        res.status(401).json({ success: false, message: message });
    } else {
        // Incorrect credentials, but not locked yet
        res.status(401).json({ success: false, message: 'Incorrect Credentials' });
    }
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
