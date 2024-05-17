document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
  
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var phonePattern = /^\d{10}$/;

    if (name === "") {
        alert("Name must be filled out");
        return false;
    }

    if (!email.match(emailPattern)) {
        alert("Invalid email address");
        return false;
    }

    if (!phone.match(phonePattern)) {
        alert("Invalid phone number (10 digits required)");
        return false;
    }

    if (message === "") {
        alert("Message must be filled out");
        return false;
    }

    return true;
}

function submitform() {
    alert("Thanks for submitting your form.");

}

// Function to validate form inputs
function validateForm() {
    try {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !phone || !message) {
            alert('All fields are required!');
            return false;
        }

        // Additional validation can be added here (e.g., email format, phone number format)

        return true;
    } catch (error) {
        console.error('Error during form validation:', error);
        alert('An error occurred during form validation. Please try again.');
        return false;
    }
}

// Function to display current date and time
function displayDate() {
    try {
        document.getElementById('demo').innerHTML = new Date().toLocaleString();
    } catch (error) {
        console.error('Error displaying date and time:', error);
        alert('An error occurred while displaying date and time. Please try again.');
    }
}

// Attach validateForm function to the form's submit event
document.querySelector('form').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
