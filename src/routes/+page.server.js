import contactRepository from "$lib/server/contactRepository.js";

export function load() {
    return {
        contacts: contactRepository.getAll()
    };
}
