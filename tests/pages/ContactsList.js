import ContactPage from "./ContactPage.js";

class ContactsList {
    constructor(locator) {
        this.locator = locator;
        this.items = locator.getByRole("link");
    }

    item(name) {
        return this.locator.getByRole("link", { name });
    }

    async select(name) {
        await this.item(name).click();
        return new ContactPage(this.locator.page());
    }
}

export default ContactsList;
