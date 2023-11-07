<script>
	import { Draggable } from 'svelte-draggable-plus'
	import IconSort from '../icons/IconSort.svelte'
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
		animation: 150,
		handle: '.handle'
	}
</script>

<div class="flex">
	<Draggable bind:items={list} key="id" {options}>
		<div slot="element" let:item class="flex gap-20 items-center">
			<div class="handle">
				<IconSort />
			</div>
			<div>{item.name}</div>
		</div>
	</Draggable>

	<pre>
		{JSON.stringify(list, null, 2)}
	</pre>
</div>
