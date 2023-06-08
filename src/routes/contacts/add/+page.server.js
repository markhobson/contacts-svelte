import { redirect } from '@sveltejs/kit';
import Contact from '$lib/server/Contact.js';
import contactRepository from "$lib/server/contactRepository.js";

export function load() {
    const contacts = contactRepository.getAll();

    return {
        contacts: contacts.map(contact => contact.serialize())
    };
}

export const actions = {
    save: async ({ request }) => {
        const data = await request.formData();
        const name = data.get("name");

        var contact = contactRepository.create(new Contact(null, name));

        throw redirect(303, `/contact/${contact.id}`);
    }
};
