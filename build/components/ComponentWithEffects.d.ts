import React from 'react';
import { Effect } from '../lib/react/Effect';
export declare abstract class ComponentWithEffects<P, S> extends React.Component<P, S> {
    /**
     * Returns an array of effects to set up on mount and to clean up on unmount.
     */
    protected abstract getEffects(): Array<Effect>;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot?: any): void;
    componentWillUnmount(): void;
}
