document.getElementById("sign-in-tab").addEventListener("click", function () {
    document.getElementById("sign-up-tab").classList.remove("active");
    this.classList.add("active");
    document.getElementById("sign-up-form").innerHTML = `
          <input type="email" placeholder="Email" required>
          <input type="password" placeholder="Password" required>
          <button type="submit">Sign In</button>
      `;
    document.querySelector(".login-link").style.display = "none";
  });
  
  document.getElementById("sign-up-tab").addEventListener("click", function () {
    document.getElementById("sign-in-tab").classList.remove("active");
    this.classList.add("active");
    document.getElementById("sign-up-form").innerHTML = `
          <input type="text" placeholder="Full Name" required>
          <input type="email" placeholder="Email" required>
          <input type="password" placeholder="Password" required>
          <button type="submit">Sign Up</button>`;
            document.querySelector(".login-link").style.display = "block";
  });

//   api 
// Function to get coordinates of the user-inputted location
function getCoordinates(location) {
  const url = `https://nominatim.openstreetmap.org/search?q=${location}&format=json&limit=1`;
  
  // Fetch API call to get coordinates of the location
  fetch(url)
      .then(response => response.json())
      .then(data => {
          if (data && data.length > 0) {
              const latitude = 28.4390; // Fixed latitude
              const longitude = 77.0408; // Fixed longitude
              console.log(`Coordinates: ${latitude}, ${longitude}`);  // For debugging
              // Call the clinic search function with the coordinates
              findClinics(latitude, longitude);
          } else {
              displayMessage('Location not found. Please try a different location.', 'error');
          }
      })
      .catch(error => {
          console.error('Error:', error);
          displayMessage('Error fetching location. Please try again later.', 'error');
      });
}

// Function to find clinics near the coordinates (using fixed coordinates for Delhi)
function findClinics(lat, lon) {
  const clinicUrl = `https://nominatim.openstreetmap.org/search?q=clinic&format=json&limit=5&lat=${lat}&lon=${lon}`;
  
  // Fetch API call to get clinics near the coordinates
  fetch(clinicUrl)
      .then(response => response.json())
      .then(data => {
          const resultsContainer = document.getElementById('clinic-results');
          resultsContainer.innerHTML = ''; // Clear previous results

          if (data && data.length > 0) {
              data.forEach(clinic => {
                  const clinicElement = document.createElement('div');
                  clinicElement.className = 'clinic';
                  clinicElement.innerHTML = `<h3>${clinic.display_name}</h3>`;
                  resultsContainer.appendChild(clinicElement);
              });
          } else {
              displayMessage('No clinics found near the location.', 'info');
          }
      })
      .catch(error => {
          console.error('Error:', error);
          displayMessage('Error fetching clinic data. Please try again later.', 'error');
      });
}

// Function to display messages to the user
function displayMessage(message, type) {
  const resultsContainer = document.getElementById('clinic-results');
  resultsContainer.innerHTML = ''; // Clear previous results
  
  const messageElement = document.createElement('div');
  messageElement.className = `message ${type}`;
  messageElement.textContent = message;
  
  resultsContainer.appendChild(messageElement);
}

// Example usage:
document.getElementById('find-clinic-btn').addEventListener('click', function () {
  const location = document.getElementById('location-input').value;
  if (location) {
      getCoordinates(location);  // Using fixed latitude/longitude inside the function
  } else {
      displayMessage('Please enter a valid location.', 'error');
  }
});

// buttons for services



