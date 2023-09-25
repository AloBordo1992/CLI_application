import * as contactService from './contacts.js';

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'contacts':
      const allContacts = await contactService.listContacts();
      return console.log(allContacts);
    case 'getById':
      const contact = await contactService.getContactById(id);
      return console.log(contact);
    case 'add':
      const newContact = await contactService.addContact({
        name,
        email,
        phone,
      });
      return console.log(newContact);
    default:
      console.log('Unknown actio');
      break;
  }
};
invokeAction({ action: 'cocontacts' });
// invokeAction({action: "getById", id:"vza2RIzNGIwutCVCs4mCL"})
// invokeAction({
//   acti: 'add',
//   name: 'Yura',
//   email: 'sfhffg@gmail.com',
//   phone: '+48 880 982 857',
// });
