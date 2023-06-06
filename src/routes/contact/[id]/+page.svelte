<script>
    import { page } from "$app/stores";
    import contacts from "$lib/contactsStore.js";
    import ContactList from "$lib/ContactList.svelte";
    import Contact from "$lib/Contact.svelte";

    $: contact = $contacts.find(contact => contact.id === parseInt($page.params.id));
</script>

<div class="container-fluid g-0">
    <div class="row g-0">
        <div class="col-4">
            <ContactList selected={contact}/>
        </div>
        <div class="col">
            <Contact contact={contact}/>
        </div>
    </div>
</div>
