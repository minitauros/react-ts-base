var LocalStorage = /** @class */ (function () {
    function LocalStorage() {
    }
    LocalStorage.prototype.set = function (key, value) {
        if (typeof window === 'undefined') {
            return;
        }
        window.localStorage.setItem(key, value);
    };
    LocalStorage.prototype.get = function (key) {
        if (typeof window === 'undefined') {
            return undefined;
        }
        var val = window.localStorage.getItem(key);
        return val !== null ? val : undefined;
    };
    LocalStorage.prototype.delete = function (key) {
        if (typeof window === 'undefined') {
            return;
        }
        window.localStorage.removeItem(key);
    };
    return LocalStorage;
}());
export { LocalStorage };
