<script>
    import contacts from "$lib/contactsStore.js";
    export let selected;
</script>

<div class="list-group list-group-flush">
    {#each $contacts as contact}
        <a class="list-group-item list-group-item-action" class:active={selected === contact} href="/contact/{contact.id}">
            {contact.name}
        </a>
    {/each}    
</div>        
