# svelte-draggable-plus

`svelte-draggable-plus` is a draggable sorting component for the `Svelte` framework, based on `Sortablejs`. If you want to learn more about `Sortablejs`, you can check the [Sortablejs official website](https://github.com/SortableJS/Sortable).

## Installation

```bash
npm install svelte-draggable-plus sortablejs
```

If your project uses typescript, you can install `@types/sortablejs` to get type support.

```bash
npm install @types/sortablejs -D
```

## Usage

```html
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
	let options = {
		group: 'shared',
		animation: 150,
		onEnd: (event) => {
			console.log(event)
		}
	}
</script>

<Draggable bind:items="{list}" key="id" bind:options="{options}">
	<div slot="element" let:item>{item.name}</div>
</Draggable>
```
