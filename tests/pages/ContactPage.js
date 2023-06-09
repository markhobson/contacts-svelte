class ContactPage {
    constructor(page) {
        this.page = page;
        this.name = this.page.getByRole("textbox", { name: "name" });
    }
}

export default ContactPage;
