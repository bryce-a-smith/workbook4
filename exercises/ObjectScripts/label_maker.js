"use strict";

let contact1 = {
    name: "Jo Smith",
    address: "123 Place Pl",
    city: "Pittsburgh",
    state: "PA",
    zip: 12345
}

function printContact(contact) {
    console.log(contact.name);
    console.log(contact.address);
    console.log(`${contact.city}, ${contact.state} ${contact.zip}`);
}

printContact(contact1);
