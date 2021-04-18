/**
 * Somewhat like a React effect hook, but for class (not functional) components.
 */
export interface Effect {
  /**
   * Called when the effect must start (e.g. on mount).
   */
  start?: () => void;

  /**
   * Called when the effect may update (e.g. on update).
   */
  update?: () => void;

  /**
   * Called when the effect must be stopped (e.g. on unmount).
   */
  stop?: () => void;
}
