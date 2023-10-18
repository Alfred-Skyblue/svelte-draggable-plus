<script lang="ts">
	import Draggable from '../lib/draggable.svelte'
	let list = [
		{
			name: 'Apples'
		},
		{
			name: 'Oranges'
		},
		{
			name: 'Bananas'
		}
	]
	let show = true
	function onClick() {
		show = !show
	}

	function onUpdate() {
		console.log(arguments)
	}
	let options = {
		onUpdate
	}
</script>

<div>
	<div>
		{#if show}
			<Draggable bind:items={list} bind:options>
				<div slot="item" let:item>{item.name}</div>
			</Draggable>
		{/if}
	</div>
	<button on:click={onClick}>trigger</button>
</div>
