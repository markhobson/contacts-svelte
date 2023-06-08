import Contact from "$lib/server/Contact.js";

class ContactRepository {
    #nextId = 1;
    #contacts = [];

    constructor() {
        this.create(new Contact(null, "Chip Smith"));
        this.create(new Contact(null, "Randy Horn"));
        this.create(new Contact(null, "Zane High"));
    }

    getAll() {
        return this.#contacts.sort((contact1, contact2) =>
            contact1.name.localeCompare(contact2.name)
        );
    }

    get(id) {
        const index = this.#getIndex(id);
        return this.#contacts[index];
    }

    create(contact) {
        contact.id = this.#getNextId();
        this.#contacts.push(contact);
        return contact;
    }

    update(contact) {
        const index = this.#getIndex(contact.id);
        this.#contacts[index] = contact;
    }

    delete(id) {
        const index = this.#getIndex(id);
        this.#contacts.splice(index, 1);
    }

    #getNextId() {
        return this.#nextId++;
    }

    #getIndex(id) {
        return this.#contacts.findIndex((contact) => contact.id === id);
    }
}

export default new ContactRepository();
