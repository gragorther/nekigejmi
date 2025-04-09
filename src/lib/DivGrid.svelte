<script lang="ts">
	export let columns: number = 3;
</script>

<div class="grid grid-cols-{columns} p-4 bg-slate-300 gap-4">
	<slot />
</div>
