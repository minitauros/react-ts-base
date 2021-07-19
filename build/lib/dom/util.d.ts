/**
 * This file defines a bunch of utility functions. Was that what you expected when you read the filename?
 */
export declare const util: {
    /**
     * Returns the given element's DOM offset (that is, the offset in px from the top and left of the document).
     *
     * @param {HTMLElement} element
     * @return {object} - {top: offset_top, left: offset_left}
     */
    getPositionOffset: (element: HTMLElement) => {
        top: number;
        left: number;
    };
    /**
     * Returns the name of the key that the given event says was pressed.
     *
     * @param {KeyboardEvent} e - The keyboard event that was triggered.
     * @return {string} - The key name.
     */
    getPressedKey: (e: KeyboardEvent) => string | undefined;
    /**
     * Returns the ancestor of the given HTMLElement that has the given id (if it exists).
     *
     * @param {HTMLElement} element - The element of which we're finding the ancestor.
     * @param {string} html_id
     * @return {HTMLElement|null}
     */
    getAncestorWithId: (element: HTMLElement, html_id: string) => HTMLElement | null;
    /**
     * Returns true if the given HTMLElement has an ancestor with the given ID.
     *
     * @param {HTMLElement} element - The element of which we're finding the ancestor.
     * @param {string} html_id
     * @return {bool}
     */
    elementHasAncestorWithId: (element: HTMLElement, html_id: string) => boolean;
    /**
     * Returns the first ancestor of the given HTMLElement that has the given class (if one exists).
     *
     * @param {HTMLElement} element - The element of which we're finding the ancestor.
     * @param {string} class_name
     * @return {HTMLElement|null}
     */
    getFirstAncestorWithClass: (element: HTMLElement, class_name: string) => HTMLElement | null;
    /**
     * Returns true if the given HTMLElement has an ancestor with the given class.
     *
     * @param {HTMLElement} element - The element of which we're finding the ancestor.
     * @param {string} class_name
     * @return {bool}
     */
    elementHasAncestorWithClass: (element: HTMLElement, class_name: string) => boolean;
    /**
     * Returns the first ancestor of the given HTMLElement that is of the given type.
     *
     * @param {HTMLElement} element - The element of which we're finding the ancestor.
     * @param {HTMLElement} type - E.g. HTMLAnchorElement.
     * @return {HTMLElement|null}
     */
    getFirstAncestorOfType: (element: HTMLElement, type: any) => HTMLElement | null;
    /**
     * Returns true if the given HTMLElement has an ancestor of the given type.
     *
     * @param {HTMLElement} element - The element of which we're finding the ancestor.
     * @param {string} type
     * @return {bool}
     */
    elementHasAncestorOfType: (element: HTMLElement, type: string) => boolean;
    /**
     * Returns true if the given element is a child of the given ancestor element.
     *
     * @param {HTMLElement} element
     * @param {HTMLElement} ancestor
     * @return {bool}
     */
    elementHasAncestor: (element: HTMLElement, ancestor: HTMLElement) => boolean;
    /**
     * Returns true if the given event targets one of the given elements directly or indirectly (via one of the given
     *   elements' children).
     *
     * @param {Event} e
     * @param {HTMLCollection} elements - The elements for which to check if they are targeted by the given event.
     * If string: element selector.
     * @return {bool}
     */
    eventTargetsAnyElement: (e: Event, elements: HTMLCollection) => boolean;
    /**
     * Returns true if the given element matches the given selector.
     *
     * @param {HTMLElement} element
     * @param {string} selector
     * @return {boolean}
     */
    elementMatchesSelector: (element: HTMLElement, selector: string) => boolean;
};
