document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const clinicName = document.getElementById("clinicName").value;
    const adminName = document.getElementById("adminName").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const country = document.getElementById("country").value;
    const province = document.getElementById("province").value;
    const timezone = document.getElementById("timezone").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const termsChecked = document.getElementById("terms").checked;
    const errorMessage = document.getElementById("errorMessage");

    // Check if all fields are filled and passwords match
    if (clinicName && adminName && email && address && phone && country && province && timezone && username && password && confirmPassword && termsChecked && (password === confirmPassword)) {
        errorMessage.style.display = "none"; // Hide the error message if validation passes

        // Create an object to store the clinic data
        const clinicData = {
            clinicName,
            adminName,
            email,
            address,
            phone,
            country,
            province,
            timezone,
            username,
            password // Note: Avoid storing sensitive data like passwords in production
        };

        // Store the data in local storage
        localStorage.setItem('clinicData', JSON.stringify(clinicData));
        console.log('Stored Clinic Data:', clinicData);

        // Clear form fields after submission
        document.getElementById("registerForm").reset();
    } else {
        errorMessage.style.display = "block"; // Show error message
    }
});

// Display stored data on page load
function displayStoredData() {
    const data = localStorage.getItem('clinicData');
    const displayArea = document.getElementById("displayArea");
    if (data) {
        const parsedData = JSON.parse(data);
        displayArea.innerHTML = `
            <h3>Stored Clinic Data:</h3>
            <pre>${JSON.stringify(parsedData, null, 2)}</pre>
        `;
    } else {
        displayArea.innerHTML = '<h3>No data found in local storage.</h3>';
    }
}

// Call the function to display data when the page loads
window.onload = displayStoredData;

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navbarMobile = document.getElementById('navbar-mobile');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbarMobile.classList.toggle('active');
});
