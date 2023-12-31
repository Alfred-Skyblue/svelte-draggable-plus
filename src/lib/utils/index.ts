const MESSAGE_PREFIX = '[vue-draggable-plus]: '

/**
 * @description The key of the cloned element
 */
export const CLONE_ELEMENT_KEY = Symbol('CLONE_ELEMENT_KEY')

/**
 * Logs a warning message.
 * @param {string} msg
 */
export function warn(msg: string) {
	console.warn(MESSAGE_PREFIX + msg)
}

/**
 * Logs an error message.
 * @param {string} msg
 */
export function error(msg: string) {
	console.error(MESSAGE_PREFIX + msg)
}

/**
 * If the value is undefined, return true, otherwise return false.
 * @param {any} value - any
 * @returns {value is undefined}
 */
export function isUndefined(value: any): value is undefined {
	return typeof value === 'undefined'
}

/**
 * Inserts a element into the DOM at a given index.
 * @param parentElement
 * @param element
 * @param {number} index
 */
export function insertNodeAt(parentElement: Element, element: Element, index: number) {
	const refElement = parentElement.children[index]
	parentElement.insertBefore(element, refElement)
}

/**
 * Removes a node from the DOM.
 * @param {Node} node
 */
export function removeNode(node: Node) {
	if (node.parentNode) node.parentNode.removeChild(node)
}

export function isFunction(val: any): val is Function {
	return typeof val === 'function'
}

export function isString(val: any): val is string {
	return typeof val === 'string'
}
