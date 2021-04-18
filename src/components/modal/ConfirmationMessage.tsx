import React from 'react';
import {Modal} from './Modal';
import {ComponentWithEffects} from '../ComponentWithEffects';
import {Effect} from '../../lib/react/Effect';
import {getPressedKey} from '../../lib/dom/getPressedKey';

interface props {
  message: string;
  confirmButtonText: string;
  cancelButtonText: string;
  // Function to call when confirm button is clicked.
  onConfirmCallback: () => void;
  // Function to call when cancel button is clicked.
  onCancelCallback: () => void;
  // Function to call when close button is clicked.
  onCloseCallback: () => void;
}

export class ConfirmationMessage extends ComponentWithEffects<props, {}> {
  constructor(props: props) {
    super(props);

    this.confirmOnEnterPress = this.confirmOnEnterPress.bind(this);
  }

  protected getEffects(): Array<Effect> {
    if (typeof window === 'undefined') {
      return [];
    }

    return [{
      start: () => {
        document.addEventListener('keyup', this.confirmOnEnterPress, true);
      },
      stop: () => {
        document.removeEventListener('keyup', this.confirmOnEnterPress, true);
      },
    }];
  }

  confirmOnEnterPress(e: KeyboardEvent): void {
    if (getPressedKey(e) === 'Enter') {
      this.props.onConfirmCallback();
    }
  }

  render() {
    return (
      <Modal onCloseCallback={this.props.onCloseCallback}>
        <div className="text-center">
          <p>
            {this.props.message}
          </p>
        </div>
        <div className="section text-center">
          <button className="button-primary adjacent-element-right" onClick={this.props.onConfirmCallback}>
            {this.props.confirmButtonText}
          </button>
          <button className="button-gray" onClick={this.props.onCancelCallback}>
            {this.props.cancelButtonText}
          </button>
        </div>
      </Modal>
    );
  }
}
