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

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!/[A-Z]/.test(password)) {
        alert("Password must contain at least one capital letter.");
        return;
    }

    if (password.length < 8 || !/[A-Z]/.test(password) || !/\d/.test(password)) {
            alert("Password must be at least 8 characters long and contain at least one capital letter and one number.");
            return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    var sentVerificationCode = "123456"; // Replace with actual code sent to user's email
    
    // Initialize attempts counter
    var attempts = 0;
    var maxAttempts = 3;
    
    do {
        var verificationCode = prompt("Verification Code sent to your email. Enter code:");
        
        if (!verificationCode) {
            alert("Please Enter Your Verification Code");
        } else if (verificationCode !== sentVerificationCode) {
            alert("Incorrect Code, Please Try Again");
            attempts++;
        } else {
            alert("Signup Successful. Please Proceed to Login");
            break; // Exit the loop if the verification code is correct
        }
    
    } while (attempts < maxAttempts);
    
    if (attempts === maxAttempts) {
        alert("Maximum attempts reached. Please try again later.");
    }
}

async function validateLoginForm() {
    // Retrieve values from the login form
    var usernameOrEmail = document.getElementById("loginUsernameEmail").value;
    var password = document.getElementById("loginPassword").value;

    // Check if all fields are filled
    if (!usernameOrEmail || !password) {
        alert("Please fill in all fields.");
        return;
    }

    // Validate email format
    if (!isValidEmailOrUsername(usernameOrEmail)) {
        alert("Invalid Detail");
        return;
    }

    // Validate password format
    if (!isValidPassword(password)) {
        alert("Invalid Detail");
        return;
    }

    // If client-side validation passes, send data to the server for authentication
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

        // Toggle password visibility based on the current type
        var type = passwordInput.type === "password" ? "text" : "password";
        passwordInput.type = type;
        confirmPasswordInput.type = type;
    }
}
