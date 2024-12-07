// This file contains the code for the contact form functionality.
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");
    const errorMessage = document.getElementById("error-message");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); 
        
       
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();

        
        if (validateForm(name, email, phone)) {
            //successful form submission
            setTimeout(() => {
                successMessage.hidden = false; 
                errorMessage.hidden = true;
                contactForm.reset();
            }, 500);
        } else {
            // Show an error message
            errorMessage.hidden = false;
            successMessage.hidden = true; 
        }
    });

    // Function to validate the form fields
    function validateForm(name, email, phone) {
        if (!name || !email || !phone) {
            alert("All fields are required!");
            return false;
        }

        // Basic email pattern check

        if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
            alert("Please enter a valid email address!");
            return false;
        }
        

        // Basic phone number validation (10-15 digits)

       if (phone.length < 10 || phone.length > 15 || isNaN(phone)) {
    alert("Please enter a valid phone number!");
    return false;
}
        return true;
    }
});
