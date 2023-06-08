class ContactRepository {
    #nextId = 1;
    #contacts = [];

    constructor() {
        this.create({name: "Chip Smith"});
        this.create({name: "Randy Horn"});
        this.create({name: "Zane High"});
    }

    getAll() {
        return this.#contacts
            .sort((contact1, contact2) => contact1.name.localeCompare(contact2.name));
    }

    get(id) {
        const index = this.#getIndex(id);
        return this.#contacts[index];
    }

    create(contact) {
        const contactWithId = {...contact, id: this.#getNextId()};
        this.#contacts.push(contactWithId);
        return contactWithId;
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
        return this.#contacts.findIndex(contact => contact.id === id);
    }
}

export default new ContactRepository();
