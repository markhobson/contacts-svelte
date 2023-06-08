<script>
    export let contacts;
    export let selected = null;
</script>

<div class="list-group list-group-flush">
    {#each contacts as contact (contact.id)}
        <a class="list-group-item list-group-item-action" class:active={selected === contact} href="/contact/{contact.id}">
            {contact.name}
        </a>
    {/each}    
</div>        
