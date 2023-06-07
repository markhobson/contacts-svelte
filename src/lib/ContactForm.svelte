<script>
    export let contact;
</script>

<form class="m-2" method="post" action="?/save">
    <div class="mb-3">
        <label class="form-label" for="name">Name</label>
        <input class="form-control" id="name" type="text" name="name" value={contact.name}/>
    </div>
    <button class="btn btn-primary" type="submit">Save</button>
    <button class="btn btn-danger" type="submit" formaction="?/delete">Delete</button>
</form>
