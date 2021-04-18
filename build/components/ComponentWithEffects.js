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
var ComponentWithEffects = /** @class */ (function (_super) {
    __extends(ComponentWithEffects, _super);
    function ComponentWithEffects() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComponentWithEffects.prototype.componentDidMount = function () {
        this.getEffects().forEach(function (effect) {
            if (effect.start !== undefined) {
                effect.start();
            }
        });
    };
    ComponentWithEffects.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
        this.getEffects().forEach(function (effect) {
            if (effect.update !== undefined) {
                effect.update();
            }
        });
    };
    ComponentWithEffects.prototype.componentWillUnmount = function () {
        this.getEffects().forEach(function (effect) {
            if (effect.stop !== undefined) {
                effect.stop();
            }
        });
    };
    return ComponentWithEffects;
}(React.Component));
export { ComponentWithEffects };
