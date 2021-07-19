/**
 * This file defines a bunch of utility functions. Was that what you expected when you read the filename?
 */
export var util = {
    /**
     * Returns the given element's DOM offset (that is, the offset in px from the top and left of the document).
     *
     * @param {HTMLElement} element
     * @return {object} - {top: offset_top, left: offset_left}
     */
    getPositionOffset: function (element) {
        var offset_top = 0;
        var offset_left = 0;
        while (element) {
            offset_top += element.offsetTop || 0;
            offset_left += element.offsetLeft || 0;
            element = element.offsetParent;
        }
        return { top: offset_top, left: offset_left };
    },
    /**
     * Returns the name of the key that the given event says was pressed.
     *
     * @param {KeyboardEvent} e - The keyboard event that was triggered.
     * @return {string} - The key name.
     */
    getPressedKey: function (e) {
        var key = e.key || e.code;
        if (key) {
            return key;
        }
        var key_code = e.keyCode || e.which;
        switch (key_code) {
            case 13:
                return 'Enter';
            case 27:
                return 'Escape';
        }
    },
    /**
     * Returns the ancestor of the given HTMLElement that has the given id (if it exists).
     *
     * @param {HTMLElement} element - The element of which we're finding the ancestor.
     * @param {string} html_id
     * @return {HTMLElement|null}
     */
    getAncestorWithId: function (element, html_id) {
        while (true) {
            if (element.parentElement) {
                if (element.parentElement.id === html_id) {
                    return element.parentElement;
                }
                else {
                    return this.getAncestorWithId(element.parentElement, html_id);
                }
            }
            else {
                return null;
            }
        }
    },
    /**
     * Returns true if the given HTMLElement has an ancestor with the given ID.
     *
     * @param {HTMLElement} element - The element of which we're finding the ancestor.
     * @param {string} html_id
     * @return {bool}
     */
    elementHasAncestorWithId: function (element, html_id) {
        return !!this.getAncestorWithId(element, html_id);
    },
    /**
     * Returns the first ancestor of the given HTMLElement that has the given class (if one exists).
     *
     * @param {HTMLElement} element - The element of which we're finding the ancestor.
     * @param {string} class_name
     * @return {HTMLElement|null}
     */
    getFirstAncestorWithClass: function (element, class_name) {
        while (true) {
            if (element.parentElement) {
                if (element.parentElement.classList.contains(class_name)) {
                    return element.parentElement;
                }
                else {
                    return this.getFirstAncestorWithClass(element.parentElement, class_name);
                }
            }
            else {
                return null;
            }
        }
    },
    /**
     * Returns true if the given HTMLElement has an ancestor with the given class.
     *
     * @param {HTMLElement} element - The element of which we're finding the ancestor.
     * @param {string} class_name
     * @return {bool}
     */
    elementHasAncestorWithClass: function (element, class_name) {
        return !!this.getFirstAncestorWithClass(element, class_name);
    },
    /**
     * Returns the first ancestor of the given HTMLElement that is of the given type.
     *
     * @param {HTMLElement} element - The element of which we're finding the ancestor.
     * @param {HTMLElement} type - E.g. HTMLAnchorElement.
     * @return {HTMLElement|null}
     */
    getFirstAncestorOfType: function (element, type) {
        while (true) {
            if (element.parentElement) {
                if (element.parentElement instanceof type) {
                    return element.parentElement;
                }
                else {
                    return this.getFirstAncestorOfType(element.parentElement, type);
                }
            }
            else {
                return null;
            }
        }
    },
    /**
     * Returns true if the given HTMLElement has an ancestor of the given type.
     *
     * @param {HTMLElement} element - The element of which we're finding the ancestor.
     * @param {string} type
     * @return {bool}
     */
    elementHasAncestorOfType: function (element, type) {
        return !!this.getFirstAncestorOfType(element, type);
    },
    /**
     * Returns true if the given element is a child of the given ancestor element.
     *
     * @param {HTMLElement} element
     * @param {HTMLElement} ancestor
     * @return {bool}
     */
    elementHasAncestor: function (element, ancestor) {
        while (true) {
            if (element.parentElement) {
                if (element.parentElement === ancestor) {
                    return true;
                }
                else {
                    return this.elementHasAncestor(element.parentElement, ancestor);
                }
            }
            else {
                return false;
            }
        }
    },
    /**
     * Returns true if the given event targets one of the given elements directly or indirectly (via one of the given
     *   elements' children).
     *
     * @param {Event} e
     * @param {HTMLCollection} elements - The elements for which to check if they are targeted by the given event.
     * If string: element selector.
     * @return {bool}
     */
    eventTargetsAnyElement: function (e, elements) {
        var _this = this;
        // If event doesn't have a target, it cannot target one of the given elements.
        if (typeof e.target !== 'object') {
            return false;
        }
        var event_targets_element = false;
        // Check for direct targeting.
        Array.from(elements).forEach(function (element) {
            if (e.target === element) {
                event_targets_element = true;
                return false; // Break.
            }
        });
        // Check for indirect targeting via a child element.
        Array.from(elements).forEach(function (element) {
            if (_this.elementHasAncestor(e.target, element)) {
                event_targets_element = true;
                return false; // Break.
            }
        });
        return event_targets_element;
    },
    /**
     * Returns true if the given element matches the given selector.
     *
     * @param {HTMLElement} element
     * @param {string} selector
     * @return {boolean}
     */
    elementMatchesSelector: function (element, selector) {
        if (!element || !(element instanceof HTMLElement)) {
            return false;
        }
        return element.matches(selector);
    },
};
