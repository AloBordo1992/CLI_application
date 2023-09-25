import * as contactService from './contacts.js';
import { program } from 'commander';

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContacts = await contactService.listContacts();
      return console.log(allContacts);
    case 'get':
      const contact = await contactService.getContactById(id);
      return console.log(contact);
    case 'add':
      const newContact = await contactService.addContact({
        name,
        email,
        phone,
      });
      return console.log(newContact);
    case 'remove':
      const deleteContact = await contactService.removeContact(id);
      return console.log(deleteContact);
    default:
      console.warn('\x1B[31m Unknown action type!');
      break;
  }
};

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse();

const options = program.opts();
invokeAction(options);
