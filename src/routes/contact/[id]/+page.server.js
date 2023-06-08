import { redirect } from '@sveltejs/kit';
import contactRepository from "$lib/server/contactRepository.js";

export function load({ params }) {
    const id = parseInt(params.id);
    const contact = contactRepository.get(id);

    if (contact === undefined) {
        throw redirect(303, "/");
    }

    return {
        contacts: contactRepository.getAll(),
        contact
    };
}

export const actions = {
    save: async ({ request, params }) => {
        const id = parseInt(params.id);
        const data = await request.formData();

        contactRepository.update({
            id: id,
            name: data.get("name")
        });
    },

    delete: async ({ params }) => {
        const id = parseInt(params.id);

        contactRepository.delete(id);
    }
};
