var called = [];
/**
 * Ensures that the given callback is only called once for the given unique name.
 *
 * @return {boolean} - True if the callback was called.
 */
export function callOnce(uniqueName, cb) {
    if (called.includes(uniqueName)) {
        return false;
    }
    else if (bodyIndicatesCalled(uniqueName)) {
        return false;
    }
    called.push(uniqueName);
    storeCallOnBody(uniqueName);
    cb();
    return true;
}
function bodyIndicatesCalled(uniqueName) {
    return typeof window !== 'undefined'
        && typeof window.document.body.dataset[newUniqueBodyName(uniqueName)] !== 'undefined'
        && window.document.body.dataset[newUniqueBodyName(uniqueName)] === 'true';
}
function storeCallOnBody(uniqueName) {
    if (typeof window === 'undefined') {
        return;
    }
    window.document.body.setAttribute('data-' + newUniqueBodyName(uniqueName), 'true');
}
function newUniqueBodyName(uniqueName) {
    return 'uq-cb-' + uniqueName;
}
