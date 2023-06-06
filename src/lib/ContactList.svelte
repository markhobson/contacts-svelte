<script>
    let contacts = [
        "Chip Smith",
        "Randy Horn",
        "Zane High"
    ];
</script>

<ul class="list-group list-group-flush">
    {#each contacts as contact}
        <li class="list-group-item">{contact}</li>
    {/each}    
</ul>        
