import Sortable, { type Options, type SortableEvent } from 'sortablejs'
import { writable } from 'svelte/store'
import { onMount } from 'svelte'
export const useDraggable = <T>(
	element: () => HTMLElement,
	initialValue: T[] = [],
	options: Options = {}
) => {
	const list = writable<T[]>(initialValue)
	let sortable: Sortable
	onMount(() => {
		const _options = {
			...options,
			onEnd: (evt: SortableEvent) => {
				const { newIndex, oldIndex } = evt
				moveElement(oldIndex!, newIndex!)
			}
		}
		sortable = new Sortable(element(), _options)
	})

	// 移动元素的函数
	function moveElement(oldIndex: number, newIndex: number) {
		console.log(oldIndex, newIndex)
		list.update((items) => {
			const _items = [...items]
			// 确保index和newIndex在有效范围内
			if (oldIndex < 0 || oldIndex >= items.length || newIndex < 0 || newIndex >= items.length) {
				return items
			}

			// 移动元素
			const movedElement = _items[oldIndex]
			_items.splice(oldIndex, 1)
			_items.splice(newIndex, 0, movedElement)

			return _items
		})
		list.subscribe((items) => {
			console.log('=>(useDraggable.ts:42) subscribe', items)
		})
	}
	return {
		destroy: () => sortable?.destroy(),
		list
	}
}
