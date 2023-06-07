class Contacts {
    #contacts = [
        {id: 1, name: "Chip Smith"},
        {id: 2, name: "Randy Horn"},
        {id: 3, name: "Zane High"}
    ];

    getAll() {
        return this.#contacts;
    }

    get(id) {
        const index = this.#getIndex(id);
        return this.#contacts[index];
    }

    update(contact) {
        const index = this.#getIndex(contact.id);
        this.#contacts[index] = contact;
    }

    delete(id) {
        const index = this.#getIndex(id);
        this.#contacts.splice(index, 1);
    }

    #getIndex(id) {
        return this.#contacts.findIndex(contact => contact.id === id);
    }
}

export default new Contacts();
