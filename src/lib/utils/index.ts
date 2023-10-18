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
