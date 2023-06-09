import { expect, test } from "@playwright/test";
import ContactsPage from "./pages/ContactsPage.js";

test("contacts page has list of contacts", async ({ page }) => {
    const contactsPage = new ContactsPage(page);
    await contactsPage.goto();

    await expect(contactsPage.contactsList.items).toHaveText([
        "Chip Smith",
        "Randy Horn",
        "Zane High",
    ]);
});

test("contacts page can show contact details", async ({ page }) => {
    const contactsPage = new ContactsPage(page);
    await contactsPage.goto();
    const contactPage = await contactsPage.contactsList.select("Randy Horn");

    await expect(contactPage.name).toHaveValue("Randy Horn");
});
