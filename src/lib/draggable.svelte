<script lang="ts">
	import { onMount } from 'svelte'
	import Sortable, { type Options, type SortableEvent } from 'sortablejs'
	import {
		insertNodeAt,
		isFunction,
		isUndefined,
		removeNode,
		warn,
		isString
	} from './utils/index.js'
	import { CLONE_ELEMENT_KEY } from './utils/enum.js'

	export let items: any[] = []

	export let options: Options & {
		clone?: <T = any>(value: T) => T
	} = {}

	export let key: string | ((item: any, i: number) => any) = undefined
	let element: HTMLElement

	function defaultClone<T>(value: T): T {
		if (isFunction(window.structuredClone)) return window.structuredClone(value)
		return JSON.parse(JSON.stringify(value))
	}

	const { clone = defaultClone } = options

	function onUpdate(event) {
		const _items = [...items]
		const { oldIndex, newIndex } = event
		const movedElement = _items.splice(oldIndex!, 1)[0]
		_items.splice(newIndex!, 0, movedElement)
		items = _items
	}
	function onStart(evt: SortableEvent) {
		const _el: any = evt.item
		_el[CLONE_ELEMENT_KEY] = clone(items?.[evt.oldIndex!])
	}

	function onAdd(evt: SortableEvent) {
		const _el: any = evt.item
		const element = _el[CLONE_ELEMENT_KEY]
		if (isUndefined(element)) return
		removeNode(evt.item)
		let _items = [...items]
		_items.splice(evt.newDraggableIndex!, 0, element)
		items = _items
	}

	function onRemove(evt: SortableEvent) {
		const { from, item, oldIndex, oldDraggableIndex, pullMode, clone } = evt
		if (pullMode === 'clone') {
			insertNodeAt(from, item, oldIndex!)
			removeNode(clone)
			return
		}
		const _items = [...items]
		_items.splice(oldDraggableIndex!, 1)
		items = _items
	}

	const sortableOptions = {
		...options,
		onUpdate,
		onStart,
		onAdd,
		onRemove
	}

	onMount(() => {
		const sortable = new Sortable(element, {
			...sortableOptions
		})
		return () => sortable?.destroy()
	})

	function generateKey(item: any, i: number) {
		if (!key) return item
		if (isFunction(key)) return key(item, i)
		if (isString(key)) return item[key]
		warn('row-key must be a string or function')
	}
</script>

<div bind:this={element} class="drraggable-container">
	{#each items as item, i (generateKey(item, i))}
		<slot name="element" {item} />
	{/each}
</div>
