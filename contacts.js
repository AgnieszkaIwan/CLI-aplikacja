const fs = require("fs");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

function listContacts() {
  fs.readFile(contactsPath, "utf8", (err, data) => {
    if (err) {
      console.error("Błąd odczytu pliku:", err);
      return;
    }
    const contacts = JSON.parse(data);
    console.log("Lista kontaktów:", contacts);
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, "utf8", (err, data) => {
    if (err) {
      console.error("Błąd odczytu pliku:", err);
      return;
    }
    const contacts = JSON.parse(data);
    const contact = contacts.find((item) => item.id === contactId);
    console.log("Kontakt o ID", contactId, ":", contact);
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, "utf8", (err, data) => {
    if (err) {
      console.error("Błąd odczytu pliku:", err);
      return;
    }
    const contacts = JSON.parse(data);
    const updatedContacts = contacts.filter((item) => item.id !== contactId);

    fs.writeFile(
      contactsPath,
      JSON.stringify(updatedContacts, null, 2),
      (err) => {
        if (err) {
          console.error("Błąd zapisu pliku:", err);
          return;
        }
        console.log("Kontakt o ID", contactId, "usunięty.");
      }
    );
  });
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, "utf8", (err, data) => {
    if (err) {
      console.error("Błąd odczytu pliku:", err);
      return;
    }
    const contacts = JSON.parse(data);
    const newContact = {
      id: contacts.length + 1,
      name,
      email,
      phone,
    };
    contacts.push(newContact);

    fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), (err) => {
      if (err) {
        console.error("Błąd zapisu pliku:", err);
        return;
      }
      console.log("Nowy kontakt dodany:", newContact);
    });
  });
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
