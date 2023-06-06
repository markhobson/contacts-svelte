<script>
    let contacts = [
        "Chip Smith",
        "Randy Horn",
        "Zane High"
    ];
</script>

<h1>Contacts</h1>

<ul>
    {#each contacts as contact}
        <li>{contact}</li>
    {/each}    
</ul>
