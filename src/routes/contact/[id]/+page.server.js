import contacts from "$lib/server/contacts.js";

export function load() {
    return {
        contacts
    };
}

export const actions = {
    default: async ({ request, params }) => {
        const id = parseInt(params.id);
        const data = await request.formData();
        const index = contacts.findIndex(contact => contact.id === id);

        contacts[index] = {
            id: id,
            name: data.get("name")
        };
    }
};
