import contactRepository from "$lib/server/contactRepository.js";

export function load() {
    const contacts = contactRepository.getAll();
    
    return {
        contacts: contacts.map(contact => contact.serialize())
    };
}
