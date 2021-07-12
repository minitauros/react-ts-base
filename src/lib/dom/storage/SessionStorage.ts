import {Storage} from './Storage';

export class SessionStorage implements Storage {
  set(key: string, value: string) {
    if (typeof window === 'undefined') {
      return;
    }
    window.sessionStorage.setItem(key, value);
  }

  get(key: string): string | undefined {
    if (typeof window === 'undefined') {
      return undefined;
    }
    const val = window.sessionStorage.getItem(key);
    return val !== null ? val : undefined;
  }

  delete(key: string): void {
    if (typeof window === 'undefined') {
      return;
    }
    window.sessionStorage.removeItem(key);
  }
}
