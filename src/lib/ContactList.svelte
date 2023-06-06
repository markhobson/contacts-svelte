<script>
    import contacts from "$lib/contactsStore.js";
</script>

<ul class="list-group list-group-flush">
    {#each $contacts as contact}
        <li class="list-group-item">{contact}</li>
    {/each}    
</ul>        
