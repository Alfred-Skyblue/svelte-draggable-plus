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
</script>

<div>
	<Draggable
		class="flex flex-col gap-2 p-4 w-300px h-300px m-auto bg-gray-500/5 rounded"
		bind:items={list}
		options={{ animation: 150 }}
	>
		<div class="cursor-move h-30 bg-gray-500/5 rounded p-3 cursor-move" slot="element" let:item>
			{item.name}
		</div>
	</Draggable>
</div>
