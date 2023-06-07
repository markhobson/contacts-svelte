<script>
    import { page } from "$app/stores";
    import ContactList from "$lib/ContactList.svelte";
    import ContactForm from "$lib/ContactForm.svelte";
    export let data;

    $: contact = data.contacts.find(contact => contact.id === parseInt($page.params.id));
</script>

<div class="container-fluid g-0">
    <div class="row g-0">
        <div class="col-4">
            <ContactList contacts={data.contacts} selected={contact}/>
        </div>
        <div class="col">
            <ContactForm contact={contact}/>
        </div>
    </div>
</div>
