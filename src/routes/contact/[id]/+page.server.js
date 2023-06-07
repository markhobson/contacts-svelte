import contacts from "$lib/server/contacts.js";

export function load() {
    return {
        contacts: contacts.getAll()
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
