import ContactsList from "./ContactsList.js";

class ContactsPage {
    constructor(page) {
        this.page = page;
        this.contactsList = new ContactsList(this.page.getByRole("list"));
    }

    async goto() {
        await this.page.goto("/");
    }
}

export default ContactsPage;
