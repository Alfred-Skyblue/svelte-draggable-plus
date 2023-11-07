<script>
	import { Draggable } from 'svelte-draggable-plus'
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

	<pre>
		{JSON.stringify(list, null, 2)}
	</pre>
</div>
