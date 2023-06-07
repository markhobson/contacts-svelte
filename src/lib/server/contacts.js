class Contacts {
    #contacts = [
        {id: 1, name: "Chip Smith"},
        {id: 2, name: "Randy Horn"},
        {id: 3, name: "Zane High"}
    ];

    getAll() {
        return this.#contacts;
    }

    update(contact) {
        const index = this.#contacts.findIndex(c => c.id === contact.id);
        this.#contacts[index] = contact;
    }
}

export default new Contacts();
