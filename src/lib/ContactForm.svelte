<script>
    import ConfirmationModal from "./ConfirmationModal.svelte";
    export let contact = { id: null, name: null };
</script>

<form class="m-2" method="post" action="?/save">
    <div class="mb-3">
        <label class="form-label" for="name">Name</label>
        <input
            class="form-control"
            id="name"
            type="text"
            name="name"
            value={contact.name}
        />
    </div>
    <button class="btn btn-primary" type="submit">Save</button>
    {#if contact.id}
        <button
            class="btn btn-danger"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#confirmDelete">Delete</button
        >
        <ConfirmationModal
            id="confirmDelete"
            title="Delete {contact.name}"
            body="Are you sure?"
            confirm="Delete"
            confirmClass="btn-danger"
            confirmAction="?/delete"
        />
    {/if}
</form>
