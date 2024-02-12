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
        // Add specific error messages for invalid telephone and email
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

