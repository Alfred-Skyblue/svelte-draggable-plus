<script lang="ts">
	import { onMount } from 'svelte'
	import Sortable, { type Options } from 'sortablejs'
	export let items: unknown[] = []
	export let options: Options = {}
	let element: HTMLElement
	onMount(() => {
		const sortable = new Sortable(element, {
			...options,
			ghostClass: 'sortable-ghost',
			animation: 150,
			onEnd: (event) => {
				const _items = [...items]
				const { oldIndex, newIndex } = event
				const movedElement = _items.splice(oldIndex!, 1)[0]
				_items.splice(newIndex!, 0, movedElement)
				items = _items
			}
		})

		return () => sortable?.destroy()
	})
</script>

<div bind:this={element} class="drraggable-container">
	{#each items as item (item)}
		<slot name="item" {item} />
	{/each}
</div>
