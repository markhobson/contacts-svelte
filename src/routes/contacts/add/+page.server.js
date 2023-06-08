import { redirect } from '@sveltejs/kit';
import contactRepository from "$lib/server/contactRepository.js";

export function load() {
    return {
        contacts: contactRepository.getAll()
    };
}

export const actions = {
    save: async ({ request }) => {
        const data = await request.formData();

        var contact = contactRepository.create({
            name: data.get("name")
        });

        throw redirect(303, `/contact/${contact.id}`);
    }
};
