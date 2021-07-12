var VoidStorage = /** @class */ (function () {
    function VoidStorage() {
    }
    VoidStorage.prototype.set = function (key, value) {
        // Do nothing.
    };
    VoidStorage.prototype.get = function (key) {
        return undefined;
    };
    VoidStorage.prototype.delete = function (key) {
        // Do nothing.
    };
    return VoidStorage;
}());
export { VoidStorage };
