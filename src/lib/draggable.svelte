<script lang="ts">
	import { onMount } from 'svelte'
	import Sortable, { type SortableEvent } from 'sortablejs'
	import { insertNodeAt, isUndefined, removeNode } from '$lib/utils/index.js'
	import type { DraggableEvent, SvelteDraggableOptions } from '$lib/types.js'

	export let items: unknown[] = []
	export let options: SvelteDraggableOptions = {}
	let element: HTMLElement
	const CLONE_ELEMENT_KEY = Symbol('cloneElement')

	function defaultClone<T>(value: T): T {
		if (typeof window.structuredClone === 'function') return window.structuredClone(value)
		return JSON.parse(JSON.stringify(value))
	}

	const { clone = defaultClone } = options

	function onUpdate(event: SortableEvent) {
		const _items = [...items]
		const { oldIndex, newIndex } = event
		const movedElement = _items.splice(oldIndex!, 1)[0]
		_items.splice(newIndex!, 0, movedElement)
		items = _items
	}

	function onStart(evt: DraggableEvent) {
		evt.item[CLONE_ELEMENT_KEY] = clone(items?.[evt.oldIndex!])
	}

	function onAdd(evt: DraggableEvent) {
		const element = evt.item[CLONE_ELEMENT_KEY]
		if (isUndefined(element)) return
		removeNode(evt.item)
		items.splice(evt.newDraggableIndex!, 0, element)
	}

	function onRemove(evt: DraggableEvent) {
		const { from, item, oldIndex, oldDraggableIndex, pullMode, clone } = evt
		if (pullMode === 'clone') {
			insertNodeAt(from, item, oldIndex!)
			removeNode(clone)
			return
		}
		items.splice(oldDraggableIndex!, 1)
	}

	onMount(() => {
		const sortable = new Sortable(element, {
			ghostClass: 'sortable-ghost',
			animation: 150,
			...options,
			onUpdate,
			onStart,
			onAdd,
			onRemove
		})

		return () => sortable?.destroy()
	})

	function generateKey(item: unknown, i: number) {
		if (typeof item === 'object' && item !== null) return item
		return `${item}-${i}`
	}
</script>

<div bind:this={element} class="drraggable-container">
	{#each items as item, i (generateKey(item, i))}
		<slot name="item" {item} />
	{/each}
</div>
