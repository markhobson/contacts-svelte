<script>
    import ContactList from "$lib/ContactList.svelte";
    import ContactForm from "$lib/ContactForm.svelte";
    export let data;
</script>

<div class="container-fluid g-0">
    <div class="row g-0">
        <div class="col-4">
            <ContactList contacts={data.contacts} selected={data.contact}/>
        </div>
        <div class="col">
            <ContactForm contact={data.contact}/>
        </div>
    </div>
</div>
