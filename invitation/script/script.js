document.getElementById('rsvpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const attendance = document.getElementById('attendance').value;

    // Store the RSVP details (You can modify this to send data to a server)
    console.log(`RSVP Details: ${firstName} ${lastName} - ${attendance}`);

    alert('Thank you for your RSVP!');
});


document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const flap = document.querySelector('.flap');
    const content = document.querySelector('.content');

    envelope.addEventListener('click', function() {
        flap.style.transform = 'translateX(-50%) rotate(-120deg)'; // Rotates flap open
        content.classList.toggle('hidden'); // Toggles visibility of content
    });
});

