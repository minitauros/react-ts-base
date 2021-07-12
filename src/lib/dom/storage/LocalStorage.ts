import {Storage} from './Storage';

export class LocalStorage implements Storage {
  set(key: string, value: string) {
    if (typeof window === 'undefined') {
      return;
    }
    window.localStorage.setItem(key, value);
  }

  get(key: string): string | undefined {
    if (typeof window === 'undefined') {
      return undefined;
    }
    const val = window.localStorage.getItem(key);
    return val !== null ? val : undefined;
  }

  delete(key: string): void {
    if (typeof window === 'undefined') {
      return;
    }
    window.localStorage.removeItem(key);
  }
}
