// Function to validate email format
function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

// Function to validate password format
function isValidPassword(password) {
    return password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password);
}

function showSignUpForm() {
    document.getElementById("signupForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
}

function showLoginForm() {
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

function validateSignUpForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var country = document.getElementById("country").value;
    var gender = document.getElementById("gender").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (!firstName || !lastName || !email || !country || !gender || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }

    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!isValidPassword(password)) {
        alert("Password must be at least 8 characters long and contain at least one capital letter and one number.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Remaining code for verification code and signup
}

async function validateLoginForm() {
    var usernameOrEmail = document.getElementById("loginUsernameEmail").value;
    var password = document.getElementById("loginPassword").value;

    if (!usernameOrEmail || !password) {
        alert("Please fill in all fields.");
        return;
    }

    if (!isValidEmail(usernameOrEmail)) {
        alert("Invalid email address or username.");
        return;
    }

    if (!isValidPassword(password)) {
        alert("Invalid password.");
        return;
    }

    if (await serverSideAuthentication(usernameOrEmail, password)) {
        alert("Login successful! Redirecting...");
        // Add further actions like redirecting to a dashboard
    } else {
        alert("Incorrect details. Please try again.");
    }
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirmPassword");
    var eyeIcon = document.querySelector('.eye-icon');

    var type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
    confirmPasswordInput.type = type;

    eyeIcon.innerHTML = type === "password" ? "&#128065;" : "&#128065;&#65039;";
}
