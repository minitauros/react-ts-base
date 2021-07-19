import React, {ReactNode} from 'react';
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';
import {ComponentWithEffects} from '../ComponentWithEffects';
import {Effect} from '../../lib/react/Effect';
import {getPressedKey} from '../../lib/dom/getPressedKey';
import {util} from '../../lib/dom/util';

interface props {
  children: Readonly<{children?: ReactNode}>,
  onCloseCallback: () => void;
}

// We'll increment this number every time a modal is used so that each modal can get its own unique HTML ID.
// This is necessary for the body scroll lock functionalities to work.
let modalId = 0;

export class Modal extends ComponentWithEffects<props, {}> {
  // An ID will be automatically generated for this modal.
  protected htmlId: string = '';

  // The element that is the modal (referenced by htmlId).
  // This one will be centered and the rest of the body will be locked when the modal is opened.
  protected modalElement: HTMLElement | null = null;

  constructor(props: props) {
    super(props);

    this.closeOnEscPress = this.closeOnEscPress.bind(this);
    this.closeOnTouchOutside = this.closeOnTouchOutside.bind(this);
  }

  protected getEffects(): Array<Effect> {
    if (typeof window === 'undefined') {
      return [];
    }

    return [{
      start: () => {
        this.modalElement = document.getElementById(this.htmlId);
        if (!this.modalElement) {
          console.warn(`trying to set up effects for modal, but cannot find target element (with ID '${this.htmlId}')`);
          return [];
        }
        disableBodyScroll(this.modalElement);
        document.addEventListener('keyup', this.closeOnEscPress, true);
        document.addEventListener('click', this.closeOnTouchOutside, true);
        document.addEventListener('touchstart', this.closeOnTouchOutside, true);
      },
      stop: () => {
        if (!this.modalElement) {
          return;
        }
        enableBodyScroll(this.modalElement);
        document.removeEventListener('keyup', this.closeOnEscPress, true);
        document.removeEventListener('click', this.closeOnTouchOutside, true);
        document.removeEventListener('touchstart', this.closeOnTouchOutside, true);
      },
    }];
  }

  closeOnEscPress(e: KeyboardEvent): void {
    if (getPressedKey(e) === 'Escape') {
      this.props.onCloseCallback();
    }
  }

  closeOnTouchOutside(e: Event): void {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const modalElements = document.getElementsByClassName('modal');
    if (!util.eventTargetsAnyElement(e, modalElements)) {
      this.props.onCloseCallback();
    }
  }

  protected generateHtmlId(): string {
    return 'modal-' + modalId++;
  }

  render() {
    this.htmlId = this.generateHtmlId();

    return (
      <div className="modal-bg">
        <div id={this.htmlId} className="modal">
          <div className="modal-close-button" onClick={this.props.onCloseCallback}>
            {/*No content*/}
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
