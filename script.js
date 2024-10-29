var age = 20

console.log(age)
console.log('Hello testing')

async function scanForBeacons() {
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

    // Book selected seats
    bookSeatsButton.addEventListener('click', () => {
        const selectedSeats = Array.from(seatMap.children)
            .filter(seat => seat.classList.contains('selected'));
        
        selectedSeats.forEach(seat => {
            const seatIndex = parseInt(seat.textContent) - 1;
            if (!seats[seatIndex]) {
                seats[seatIndex] = true; // mark as booked
                seat.classList.remove('selected'); // remove selection
            }
        });

        updateAvailability();
    });

    function updateAvailability() {
        const availableSeats = seats.filter(seat => !seat).length;
        availabilityDiv.textContent = `${availableSeats} seats available`;
        
        // Integrate with LED indicators here
        // Example: updateLEDIndicators(seats);
    }

    updateAvailability();
});
