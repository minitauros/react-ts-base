import {callOnce} from './callOnce';

/**
 * Sets up that on cmd+enter press the focused form gets submitted.
 */
export function setUpFormSubmitOnCmdEnter(): void {
  if (typeof window === 'undefined') {
    return;
  }

  callOnce('react-ts-base-cmd-enter', () => {
    window.addEventListener('keydown', function (e) {
      let targetElement = window.document.activeElement;

      if (!targetElement) {
        return;
      } else if (!e.metaKey && !e.ctrlKey) {
        return;
      } else if (e.code !== 'Enter' && (e.which || e.keyCode) !== 13) {
        return;
      }

      while (true) {
        targetElement = targetElement.parentElement;

        if (!targetElement) {
          break;
        }

        if (targetElement.constructor === HTMLFormElement) {
          ((targetElement as HTMLFormElement).querySelector('button') as HTMLButtonElement).click();
          break;
        }
      }
    });
  });
}
