<script lang="ts">
	import Draggable from '../lib/draggable.svelte'
	let list = [
		1,2,1,3,4,1
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
				<div slot="item" let:item>{item}</div>
			</Draggable>
		{/if}
	</div>
	<button on:click={onClick}>trigger</button>
</div>
