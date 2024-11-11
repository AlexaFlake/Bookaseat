
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
      
    function selectSeat(){
        console.log("test");

    //   function selectSeat(seatNumber)----
        function selectSeat(seatNumber) {
            console.log("testing");
            localStorage.setItem("selectedSeat", seatNumber);
            location.href = "confirmation.html";
        }
    }
// ---------------------------------------------------------------------------






// CONFIRMATION HTML----------------------------------------------------------
// Display confirmation message function for confirmation.html
function displayConfirmationMessage() {
    // Retrieve data from localStorage
    const firstName = localStorage.getItem("firstName");
    const selectedSeat = localStorage.getItem("selectedSeat");
    const duration = 60; // Set booking duration (e.g., 60 minutes)

    // Get the confirmation message elements
    const confirmationMessage = document.getElementById("confirmationMessage");
    const durationMessage = document.getElementById("durationMessage");

    if (firstName && selectedSeat) {
        confirmationMessage.innerHTML = `
            <p>Thank you, ${firstName}!</p>
            <p>Your selected seat: ${selectedSeat}</p>
            <p>Duration: ${duration} minutes</p>
            <p>Enjoy your time at the Central Zone, Level B2!</p>
        `;
    } else {
        confirmationMessage.textContent = "Some information is missing. Please try booking again.";
    }
}

// Automatically call displayConfirmationMessage when the confirmation page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', displayConfirmationMessage);
} else {
    displayConfirmationMessage();
}
// -----------------------------------------------------------------------------