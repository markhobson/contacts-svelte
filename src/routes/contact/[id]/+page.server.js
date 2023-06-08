import { redirect } from '@sveltejs/kit';
import Contact from "$lib/server/Contact.js";
import contactRepository from "$lib/server/contactRepository.js";

export function load({ params }) {
    const id = parseInt(params.id);
    const contacts = contactRepository.getAll();
    const contact = contactRepository.get(id);

    if (contact === undefined) {
        throw redirect(303, "/");
    }

    return {
        contacts: contacts.map(contact => contact.serialize()),
        contact: contact.serialize()
    };
}

export const actions = {
    save: async ({ request, params }) => {
        const id = parseInt(params.id);
        const data = await request.formData();
        const name = data.get("name");

        contactRepository.update(new Contact(id, name));
    },

    delete: async ({ params }) => {
        const id = parseInt(params.id);

        contactRepository.delete(id);
    }
};
