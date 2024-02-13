// Initialize an array to store ticket information
let tickets = [];

// Function to handle the buying of a ticket
function buyTicket() {
    // Retrieve values from input fields
    const film = getValue('film');
    const quantity = getValue('quantity');
    const firstName = getValue('firstName');
    const lastName = getValue('lastName');
    const telephone = getValue('telephone');
    const email = getValue('email');

    // Check if any required fields are empty or if telephone/email is invalid
    if (!film || !quantity || !firstName || !lastName || !isValidTelephone(telephone) || !isValidEmail(email)) {
        let errorMessage = 'Please fill out all fields correctly.';
        // Add specific error messages for invalid telephone and email
        if (!isValidTelephone(telephone)) {
            errorMessage += ' Telephone number is invalid.';
        }
        if (!isValidEmail(email)) {
            errorMessage += ' Email address is invalid.';
        }
        // Display the error message in an alert
        alert(errorMessage);
        return;
    }

    // If all fields are valid, add ticket information to the tickets array
    tickets.push({ film, quantity, firstName, lastName, telephone, email });
    displayTickets();
    resetForm();
}

// Function to retrieve value from input field by id
function getValue(id) {
    return document.getElementById(id).value.trim();
}

// Function to display tickets in the ticket list
function displayTickets() {
    const ticketList = document.getElementById('ticketList');
    ticketList.innerHTML = '';
    tickets.forEach(ticket => {
        const li = document.createElement('li');
        li.textContent = `Film: ${ticket.film}, Quantity: ${ticket.quantity}, Name: ${ticket.firstName} ${ticket.lastName}, Phone: ${ticket.telephone}, Email: ${ticket.email}`;
        ticketList.appendChild(li);
    });
}

// Function to remove all tickets from the tickets array and update display
function removeAllTickets() {
    tickets = [];
    displayTickets();
}

// Function to reset the input fields in the form
function resetForm() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = '');
}

// Function to validate telephone number format
function isValidTelephone(telephone) {
    return /^\d{8}$/.test(telephone);
}

// Function to validate email format
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}