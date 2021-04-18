export function getPressedKey(e: KeyboardEvent) {
  let key = e.key || e.code;
  if (key === 'Esc') {
    return 'Escape';
  }
  return key;
}
