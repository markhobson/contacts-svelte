class Contact {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    serialize() {
        return {
            id: this.id,
            name: this.name,
        };
    }
}

export default Contact;
