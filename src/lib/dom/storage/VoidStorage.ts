import {Storage} from './Storage';

export class VoidStorage implements Storage {
  set(key: string, value: string) {
    // Do nothing.
  }

  get(key: string): string | undefined {
    return undefined;
  }

  delete(key: string): void {
    // Do nothing.
  }
}
