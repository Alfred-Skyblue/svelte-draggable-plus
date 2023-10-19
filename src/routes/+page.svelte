<script lang="ts">
	import Draggable from '../lib/draggable.svelte'
	let list = [
		{
			name: 'Joao',
			id: '1'
		},
		{
			name: 'Jean',
			id: '2'
		},
		{
			name: 'Johanna',
			id: '3'
		},
		{
			name: 'Juan',
			id: '4'
		}
	]
	let list2 = [
		{
			name: 'Joao-2',
			id: '1-2'
		},
		{
			name: 'Jean-2',
			id: '2-2'
		},
		{
			name: 'Johanna-2',
			id: '3-2'
		},
		{
			name: 'Juan-2',
			id: '4-2'
		}
	]
	let show = true
	function onClick() {
		show = !show
	}

	function onUpdate() {
		console.log(arguments)
	}

	function clone(element: Record<'name' | 'id', string>) {
		const len = list2.length
		return {
			name: `${element.name}-clone-${len}`,
			id: `${element.id}-clone-${len}`
		}
	}

	let options1 = {
		group: { name: 'people', pull: 'clone', put: false },
		sort: false,
		clone
	}
	let options2 = {
		group: 'people'
	}
</script>

<div>
	<div class="bg-red">
		<Draggable bind:items={list} options={options1}>
			<div slot="item" let:item>{item.name}</div>
		</Draggable>
	</div>
	<div class="mt-20 bg-blue">
		<Draggable bind:items={list2} bind:options={options2}>
			<div slot="item" let:item>{item.name}</div>
		</Draggable>
	</div>
</div>

<style>
	.mt-20 {
		margin-top: 20px;
	}
	.bg-red {
		background-color: red;
	}
	.bg-blue {
		background-color: blue;
	}
</style>
