export function getPressedKey(e) {
    var key = e.key || e.code;
    if (key === 'Esc') {
        return 'Escape';
    }
    return key;
}
