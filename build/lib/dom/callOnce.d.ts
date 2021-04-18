/**
 * Ensures that the given callback is only called once for the given unique name.
 *
 * @param uniqueName
 * @param cb
 */
export declare function callOnce(uniqueName: string, cb: () => void): void;
