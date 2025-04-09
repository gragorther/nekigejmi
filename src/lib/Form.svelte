<script lang="ts">
	export let action: string;
</script>

<form
	class="bg-slate-300 flex flex-col gap-4 p-4 border-purple-700 border rounded-md m-2 place-content-center"
	method="POST"
	action="?/{action}"
>
	<slot />
</form>
