var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { ComponentWithEffects } from '../ComponentWithEffects';
import { getPressedKey } from '../../lib/dom/getPressedKey';
import { util } from '../../lib/dom/util';
// We'll increment this number every time a modal is used so that each modal can get its own unique HTML ID.
// This is necessary for the body scroll lock functionalities to work.
var modalId = 0;
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal(props) {
        var _this = _super.call(this, props) || this;
        // An ID will be automatically generated for this modal.
        _this.htmlId = '';
        // The element that is the modal (referenced by htmlId).
        // This one will be centered and the rest of the body will be locked when the modal is opened.
        _this.modalElement = null;
        _this.closeOnEscPress = _this.closeOnEscPress.bind(_this);
        _this.closeOnTouchOutside = _this.closeOnTouchOutside.bind(_this);
        return _this;
    }
    Modal.prototype.getEffects = function () {
        var _this = this;
        if (typeof window === 'undefined') {
            return [];
        }
        return [{
                start: function () {
                    _this.modalElement = document.getElementById(_this.htmlId);
                    if (!_this.modalElement) {
                        console.warn("trying to set up effects for modal, but cannot find target element (with ID '" + _this.htmlId + "')");
                        return [];
                    }
                    disableBodyScroll(_this.modalElement);
                    document.addEventListener('keyup', _this.closeOnEscPress, true);
                    document.addEventListener('click', _this.closeOnTouchOutside, true);
                    document.addEventListener('touchstart', _this.closeOnTouchOutside, true);
                },
                stop: function () {
                    if (!_this.modalElement) {
                        return;
                    }
                    enableBodyScroll(_this.modalElement);
                    document.removeEventListener('keyup', _this.closeOnEscPress, true);
                    document.removeEventListener('click', _this.closeOnTouchOutside, true);
                    document.removeEventListener('touchstart', _this.closeOnTouchOutside, true);
                },
            }];
    };
    Modal.prototype.closeOnEscPress = function (e) {
        if (getPressedKey(e) === 'Escape') {
            this.props.onCloseCallback();
        }
    };
    Modal.prototype.closeOnTouchOutside = function (e) {
        if (typeof window === 'undefined' || typeof document === 'undefined') {
            return;
        }
        var modalElements = document.getElementsByClassName('modal');
        if (!util.eventTargetsAnyElement(e, modalElements)) {
            this.props.onCloseCallback();
        }
    };
    Modal.prototype.generateHtmlId = function () {
        return 'modal-' + modalId++;
    };
    Modal.prototype.render = function () {
        this.htmlId = this.generateHtmlId();
        return (React.createElement("div", { className: "modal-bg" },
            React.createElement("div", { id: this.htmlId, className: "modal" },
                React.createElement("div", { className: "modal-close-button", onClick: this.props.onCloseCallback }),
                this.props.children)));
    };
    return Modal;
}(ComponentWithEffects));
export { Modal };
