
// INDEX HTML------------------------------------------------------------------

// Function to handle registration form submission and redirect to seat-selection.html
function registerWithEmail(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;

    // Store values in localStorage
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);

    // Redirect to seat-selection.html
    location.href = "seat-selection.html";
}
// --------------------------------------------------------------------------------





// SEAT SELECTION HTML ------------------------------------------------------------
      // Function to handle seat selection and redirect to confirmation page
      

    //   function selectSeat(seatNumber)----
        function selectSeat(seatNumber) {
            console.log("Seat selected:", seatNumber);
            localStorage.setItem("selectedSeat", seatNumber);

    // Automatically capture the current time from the user's device as the start time
        const startTime = new Date().toLocaleString(); // Formats date and time based on the user's locale
            localStorage.setItem("startTime", startTime);

            location.href = "confirmation.html";
        }
// ---------------------------------------------------------------------------






// CONFIRMATION HTML----------------------------------------------------------
function displayConfirmationMessage() {
    // Retrieve other data from localStorage
    const firstName = localStorage.getItem("firstName");
    const selectedSeat = localStorage.getItem("selectedSeat");
    const startTime = new Date().toLocaleString(); // Get current device time as start time
    const duration = 60; // Set booking duration (e.g., 60 minutes)

    // Get the confirmation message element
    const confirmationMessage = document.getElementById("confirmationMessage");

    // Build and display the confirmation message
    confirmationMessage.innerHTML = `
        <p>Thank you, ${firstName}!</p>
        <p>Your selected seat: ${selectedSeat}</p>
        <p>Start Date/Time: ${startTime}</p>
        <p>Duration: ${duration} minutes</p>
        <p>Enjoy your time at the Central Zone, Level B2!</p>
    `;
}

// Automatically call displayConfirmationMessage when the confirmation page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', displayConfirmationMessage);
} else {
    displayConfirmationMessage();
}

// Optional: Real-time updating clock display
function updateTime() {
    const currentTime = new Date().toLocaleTimeString(); // Update only the time
    const timeElement = document.getElementById("currentTime");
    if (timeElement) {
        timeElement.textContent = `Current Time: ${currentTime}`;
    }
}

// Call `updateTime` every second if you want a live clock
setInterval(updateTime, 1000);

// -----------------------------------------------------------------------------