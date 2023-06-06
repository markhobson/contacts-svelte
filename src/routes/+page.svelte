<script>
    let contacts = [
        "Chip Smith",
        "Randy Horn",
        "Zane High"
    ];
</script>

<nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Contacts</span>
    </div>
</nav>

<div class="container-fluid g-0">
    <div class="row g-0">
        <div class="col-4">
            <ul class="list-group list-group-flush">
                {#each contacts as contact}
                    <li class="list-group-item">{contact}</li>
                {/each}    
            </ul>        
        </div>
    </div>
</div>
