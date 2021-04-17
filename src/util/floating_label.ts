const inputHasValueClass = 'has-input-value';
const formRowClass = 'form-row';

let ranSetup = false;

/**
 * Sets up "floating labels", i.e. when a user focuses an input field a CSS class will be added that will make the
 * label float above the input.
 *
 * On blur it will remove the CSS class if the input contains no content, so that the label will go back to behaving
 * like a placeholder.
 */
export function setUpFloatingLabels(): void {
  if (ranSetup) {
    return;
  } else if (typeof window === 'undefined') {
    return;
  }

  window.addEventListener('focusin', (e: FocusEvent) => {
    if (
      e.target
      && (
        e.target.constructor === HTMLInputElement
        || e.target.constructor === HTMLSelectElement
        || e.target.constructor === HTMLTextAreaElement
      )
    ) {
      const target = e.target as HTMLInputElement;

      if (mayFloatLabel(target)) {
        floatLabel(target);
      }
    }
  });

  window.addEventListener('focusout', (e: FocusEvent) => {
    if (
      e.target
      && (
        e.target.constructor === HTMLInputElement
        || e.target.constructor === HTMLSelectElement
        || e.target.constructor === HTMLTextAreaElement
      )
    ) {
      const target = e.target as HTMLInputElement;

      if (target.value === '' && mayFloatLabel(target)) {
        unfloatLabel(target);
      }
    }
  });

  ranSetup = true;
}

/**
 * Returns true if the label of the given input element may float.
 */
function mayFloatLabel(inputEm: HTMLElement): boolean {
  const parent = inputEm.parentElement;
  return parent !== null && parent.classList.contains(formRowClass);
}

/**
 * Floats the label of the given input element.
 */
function floatLabel(inputEm: HTMLElement): void {
  const parent = inputEm.parentElement;
  if (!parent) {
    return;
  }
  parent.classList.add(inputHasValueClass);
}

/**
 * Unfloats the label of the given input element.
 */
function unfloatLabel(inputEm: HTMLElement): void {
  const parent = inputEm.parentElement;
  if (!parent) {
    return;
  }
  parent.classList.remove(inputHasValueClass);
}
