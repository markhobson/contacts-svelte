import { redirect } from '@sveltejs/kit';
import contacts from "$lib/server/contacts.js";

export function load() {
    return {
        contacts: contacts.getAll()
    };
}

export const actions = {
    save: async ({ request }) => {
        const data = await request.formData();

        var contact = contacts.create({
            name: data.get("name")
        });

        throw redirect(303, `/contact/${contact.id}`);
    }
};
