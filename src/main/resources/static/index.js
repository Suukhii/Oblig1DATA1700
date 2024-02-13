
let tickets = [];

function buyTicket() {
    const film = getValue('film');
    const quantity = getValue('quantity');
    const firstName = getValue('firstName');
    const lastName = getValue('lastName');
    const telephone = getValue('telephone');
    const email = getValue('email');


    if (!film || !quantity || !firstName || !lastName || !isValidTelephone(telephone) || !isValidEmail(email)) {
        let errorMessage = 'Please fill out all fields correctly.';

        if (!isValidTelephone(telephone)) {
            errorMessage += ' Telephone number is invalid.';
        }
        if (!isValidEmail(email)) {
            errorMessage += ' Email address is invalid.';
        }

        alert(errorMessage);
        return;
    }


    tickets.push({ film, quantity, firstName, lastName, telephone, email });
    displayTickets();
    resetForm();
}


function getValue(id) {
    return document.getElementById(id).value.trim();
}


function displayTickets() {
    const ticketList = document.getElementById('ticketList');
    ticketList.innerHTML = '';
    tickets.forEach(ticket => {
        const li = document.createElement('li');
        li.textContent = `Film: ${ticket.film}, Quantity: ${ticket.quantity}, Name: ${ticket.firstName} ${ticket.lastName}, Phone: ${ticket.telephone}, Email: ${ticket.email}`;
        ticketList.appendChild(li);
    });
}


function removeAllTickets() {
    tickets = [];
    displayTickets();
}


function resetForm() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = '');
}


function isValidTelephone(telephone) {
    return /^\d{8}$/.test(telephone);
}


function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}