import React from 'react';
import {Effect} from '../lib/react/Effect';

export abstract class ComponentWithEffects<P, S> extends React.Component<P, S> {
  /**
   * Returns an array of effects to set up on mount and to clean up on unmount.
   */
  protected abstract getEffects(): Array<Effect>;

  componentDidMount(): void {
    this.getEffects().forEach((effect) => {
      if (effect.start !== undefined) {
        effect.start();
      }
    });
  }

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot?: any) {
    this.getEffects().forEach((effect) => {
      if (effect.update !== undefined) {
        effect.update();
      }
    });
  }

  componentWillUnmount(): void {
    this.getEffects().forEach((effect) => {
      if (effect.stop !== undefined) {
        effect.stop();
      }
    });
  }
}
