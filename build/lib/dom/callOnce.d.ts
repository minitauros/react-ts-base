/**
 * Ensures that the given callback is only called once for the given unique name.
 *
 * @return {boolean} - True if the callback was called.
 */
export declare function callOnce(uniqueName: string, cb: () => void): boolean;
