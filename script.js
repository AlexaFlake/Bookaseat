

function selectSeat(...args: [seatNumber: any] | [seatNumber: any]) {
    const seats = document.querySelectorAll('.seat');

    Remove; 'selected'; class from { } all; seats; and; add; to; the; clicked; one;
    seats.forEach(s => s.classList.remove('selected'));
    seat.classList.add('selected');

    Set; the; selected; seat; number;
    selectedSeat = seat.textContent;

    Update; the; seat; number; overlay; on; the; image;
    const seatNumberOverlay = document.getElementById('seatNumberOverlay');
    seatNumberOverlay.textContent = `Seat ${selectedSeat}`;
    document.querySelector('.button-image-container').classList.add('selected');
}

// SCAN QR CODES-------------------------------

Function to start QR code scan
function startQrScan() {
    alert("QR scan feature will be implemented here.");
    // Implement QR code scanning logic here
}

// Function to get the 'seat' parameter from the URL
   function getSeatFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('seat');
}

// Function to handle seat selection based on the seat number
function selectSeat(seatNumber) {
    localStorage.setItem('selectedSeat', seatNumber);
    document.getElementById('selectedSeatMessage').textContent = `You selected seat ${seatNumber}`;
    // Redirect to the confirmation page
    location.href = 'confirmation.html';
}

// Auto-select seat if 'seat' parameter is in URL
window.onload = function() {
    const seatNumber = getSeatFromUrl();
    if (seatNumber) {
        selectSeat(seatNumber);
    }
}; 

// ---------------------------------------------------------------------------

// function updateAvailability() {
const availableSeats = seats.filter(seat => !seat).length;
availabilityDiv.textContent = `${availableSeats} seats available`;

// Integrate with LED indicators here
// Example: updateLEDIndicators(seats);
// async function scanForBeacons() {
    try {
        const device = await navigator.bluetooth.requestDevice({
            filters: [{ services: ['battery_service'] }] // Replace with your beacon's service
        });
        
        const server = await device.gatt.connect();
        const service = await server.getPrimaryService('battery_service'); // Replace with your service
        const characteristic = await service.getCharacteristic('battery_level');
        
        const value = await characteristic.readValue();
        console.log(`Battery level: ${value.getUint8(0)}%`);
        
        } catch (error) {
        console.error('Error:', error);
        }
        }
        
        // Call the scan function
        scanForBeacons();
        document.addEventListener('DOMContentLoaded', () => {
        const seatMap = document.getElementById('seatMap');
        const bookSeatsButton = document.getElementById('bookSeats');
        const availabilityDiv = document.getElementById('availability');
        
        const totalSeats = 20;
        const seats = new Array(totalSeats).fill(false); // false means available
        
        // Create seat elements
        for (let i = 0; i < totalSeats; i++) {
        const seat = document.createElement('div');
        seat.classList.add('seat');
        seat.textContent = i + 1;
        
        seat.addEventListener('click', () => {
            seat.classList.toggle('selected');
        });
        
        seatMap.appendChild(seat);
        }