import { redirect } from '@sveltejs/kit';
import contacts from "$lib/server/contacts.js";

export function load({ params }) {
    const id = parseInt(params.id);
    const contact = contacts.get(id);

    if (contact === undefined) {
        throw redirect(303, "/");
    }

    return {
        contacts: contacts.getAll(),
        contact
    };
}

export const actions = {
    default: async ({ request, params }) => {
        const id = parseInt(params.id);
        const data = await request.formData();

        contacts.update({
            id: id,
            name: data.get("name")
        });
    }
};
