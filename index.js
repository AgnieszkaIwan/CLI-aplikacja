const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

console.time("listContacts");
listContacts();
console.timeEnd("listContacts");

console.time("getContactById");
getContactById(2);
console.timeEnd("getContactById");

console.time("addContact");
addContact("Nowa Osoba", "nowa@example.com", "123456789");
console.timeEnd("addContact");

console.time("removeContact");
removeContact(3);
console.timeEnd("removeContact");
