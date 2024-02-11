function validateForm() {
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

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    var verificationCode = prompt("Verification Code sent to your email. Enter code:");

    if (verificationCode) {
        alert("Signup Successful. Please proceed to login.");
    }
}
