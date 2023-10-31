<script>
	import { Draggable } from 'svelte-draggable-plus'
	export let list = []
	const options = {
		animation: 150
	}
</script>

<div class="flex">
	<Draggable bind:items={list} key="id" {options}>
		<div slot="element" let:item>
			{item.name}
		</div>
	</Draggable>
</div>

<style>
	.drag-area {
		min-height: 50px;
		outline: 1px dashed;
	}
</style>
