const { Command } = require("commander");
const program = new Command();
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts();
      break;

    case "get":
      if (id) {
        getContactById(id);
      } else {
        console.log("Please provide a valid ID.");
      }
      break;

    case "add":
      if (name && email && phone) {
        addContact(name, email, phone);
      } else {
        console.log("Please provide name, email, and phone.");
      }
      break;

    case "remove":
      if (id) {
        removeContact(id);
      } else {
        console.log("Please provide a valid ID.");
      }
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
