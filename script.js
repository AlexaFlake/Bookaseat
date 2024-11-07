
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
        // function selectSeat(seatNumber) {
            console.log("testing");
            localStorage.setItem("selectedSeat", seatNumber);
            location.href = "confirmation.html";
        }

        // const duration = 60; // Set booking duration (e.g., 60 minutes)

        document.getElementById('confirmationMessage').innerText = 
            `Thank you, ${firstName}! We've confirmed Seat ${seat} for you`;
        document.getElementById('durationMessage').innerText = 
            `Your booking is valid for ${duration} minutes.`;
// ---------------------------------------------------------------------------






// CONFIRMATION HTML----------------------------------------------------------
       
// Retrieve data from localStorage

const firstName = localStorage.getItem("firstName");
const lastName = localStorage.getItem("lastName");
const email = localStorage.getItem("email");
const seat = localStorage.getItem("selectedSeat");
const duration = 60; // Set booking duration (e.g., 60 minutes)

// Display the confirmation message

const confirmationMessage = document.getElementById("confirmationMessage");
if (firstName && selectedSeat) {
    confirmationMessage = `
        <p>Thank you, ${firstName}!</p>
        <p>Your selected seat: ${selectedSeat}</p>
        <p>Duration:${duration}
        <p>Enjoy your time at the Central Zone, Level B2!</p>
    `;
} else {
    confirmationMessage.textContent = "Some information is missing. Please try booking again.";
}
// -----------------------------------------------------------------------------