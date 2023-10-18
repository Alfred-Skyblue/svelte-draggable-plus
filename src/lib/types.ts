import type { Options, SortableEvent } from 'sortablejs'

export interface SvelteDraggableOptions extends Options {
	clone?: <T>(value: T) => T
}
export interface DraggableEvent extends SortableEvent {
	item: HTMLElement
}
