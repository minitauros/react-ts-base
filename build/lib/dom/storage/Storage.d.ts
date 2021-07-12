export interface Storage {
    set(key: string, value: string): void;
    get(key: string): string | undefined;
    delete(key: string): void;
}
