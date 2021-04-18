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
import { Modal } from './Modal';
import { ComponentWithEffects } from '../ComponentWithEffects';
import { getPressedKey } from '../../lib/dom/getPressedKey';
var ConfirmationMessage = /** @class */ (function (_super) {
    __extends(ConfirmationMessage, _super);
    function ConfirmationMessage(props) {
        var _this = _super.call(this, props) || this;
        _this.confirmOnEnterPress = _this.confirmOnEnterPress.bind(_this);
        return _this;
    }
    ConfirmationMessage.prototype.getEffects = function () {
        var _this = this;
        if (typeof window === 'undefined') {
            return [];
        }
        return [{
                start: function () {
                    document.addEventListener('keyup', _this.confirmOnEnterPress, true);
                },
                stop: function () {
                    document.removeEventListener('keyup', _this.confirmOnEnterPress, true);
                },
            }];
    };
    ConfirmationMessage.prototype.confirmOnEnterPress = function (e) {
        if (getPressedKey(e) === 'Enter') {
            this.props.onConfirmCallback();
        }
    };
    ConfirmationMessage.prototype.render = function () {
        return (React.createElement(Modal, { onCloseCallback: this.props.onCloseCallback },
            React.createElement("div", { className: "text-center" },
                React.createElement("p", null, this.props.message)),
            React.createElement("div", { className: "section text-center" },
                React.createElement("button", { className: "button-primary adjacent-element-right", onClick: this.props.onConfirmCallback }, this.props.confirmButtonText),
                React.createElement("button", { className: "button-gray", onClick: this.props.onCancelCallback }, this.props.cancelButtonText))));
    };
    return ConfirmationMessage;
}(ComponentWithEffects));
export { ConfirmationMessage };
