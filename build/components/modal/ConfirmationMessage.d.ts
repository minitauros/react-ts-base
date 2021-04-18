/// <reference types="react" />
import { ComponentWithEffects } from '../ComponentWithEffects';
import { Effect } from '../../lib/react/Effect';
interface props {
    message: string;
    confirmButtonText: string;
    cancelButtonText: string;
    onConfirmCallback: () => void;
    onCancelCallback: () => void;
    onCloseCallback: () => void;
}
export declare class ConfirmationMessage extends ComponentWithEffects<props, {}> {
    constructor(props: props);
    protected getEffects(): Array<Effect>;
    confirmOnEnterPress(e: KeyboardEvent): void;
    render(): JSX.Element;
}
export {};
