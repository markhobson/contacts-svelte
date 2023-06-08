import { describe, it, expect } from "vitest";
import Contact from "$lib/server/Contact.js";
import contactRepository from "$lib/server/contactRepository.js";

describe("contact repository", () => {
    it("can get all contacts", () => {
        expect(contactRepository.getAll()).toEqual([
            new Contact(1, "Chip Smith"),
            new Contact(2, "Randy Horn"),
            new Contact(3, "Zane High"),
        ]);
    });

    it("can get contact", () => {
        expect(contactRepository.get(2)).toEqual(new Contact(2, "Randy Horn"));
    });

    it("can create contact", () => {
        const contact = new Contact(4, "Bill Butter");

        contactRepository.create(contact);

        expect(contactRepository.getAll()).toContain(contact);
    });

    it("can update contact", () => {
        const contact = new Contact(2, "Bill Butter");

        contactRepository.update(contact);

        expect(contactRepository.get(2)).toBe(contact);
    });

    it("can delete contact", () => {
        contactRepository.delete(2);

        expect(contactRepository.get(2)).toBeUndefined();
    });
});
