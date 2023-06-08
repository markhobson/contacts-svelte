<script>
    export let id;
    export let titleId = `${id}Title`;
    export let title = "Confirm";
    export let body;
    export let confirm = "OK";
    export let confirmClass = "btn-primary";
    export let confirmAction;
</script>

<div class="modal fade" id={id} tabindex="-1" aria-labelledby={titleId} aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id={titleId}>{title}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                {body}
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <form method="post" action="{confirmAction}">
                    <button type="submit" class="btn {confirmClass}" data-bs-dismiss="modal">{confirm}</button>
                </form>
            </div>
        </div>
    </div>
</div>
