
document.getElementById('Formclasswork').addEventListener('submit', function(event) {
    event.preventDefault();
    let firstName = document.getElementById('firstName').value.trim();
    let lastName = document.getElementById('lastName').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    let errors = [];

    if (firstName.length < 3) {
        errors.push("First Name must be at least 3 characters long.");
    }

    if (lastName.length < 3) {
        errors.push("Last Name is required.");
    }

    if (!validateEmail(email)) {
        errors.push("Invalid Email Address.");
    }

    if (password.length < 3) {
        errors.push("Password is required.");
    }

    if (errors.length > 0) {
        alert(errors.join("\n"));
    } else {
       
        let formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };
        localStorage.setItem('formData', JSON.stringify(formData));
        alert("Form submitted successfully!");
    }
});


function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
  