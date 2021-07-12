var SessionStorage = /** @class */ (function () {
    function SessionStorage() {
    }
    SessionStorage.prototype.set = function (key, value) {
        if (typeof window === 'undefined') {
            return;
        }
        window.sessionStorage.setItem(key, value);
    };
    SessionStorage.prototype.get = function (key) {
        if (typeof window === 'undefined') {
            return undefined;
        }
        var val = window.sessionStorage.getItem(key);
        return val !== null ? val : undefined;
    };
    SessionStorage.prototype.delete = function (key) {
        if (typeof window === 'undefined') {
            return;
        }
        window.sessionStorage.removeItem(key);
    };
    return SessionStorage;
}());
export { SessionStorage };
