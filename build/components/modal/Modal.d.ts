import { ReactNode } from 'react';
import { ComponentWithEffects } from '../ComponentWithEffects';
import { Effect } from '../../lib/react/Effect';
interface props {
    children: Readonly<{
        children?: ReactNode;
    }>;
    onCloseCallback: () => void;
}
export declare class Modal extends ComponentWithEffects<props, {}> {
    protected htmlId: string;
    protected modalElement: HTMLElement | null;
    constructor(props: props);
    protected getEffects(): Array<Effect>;
    closeOnEscPress(e: KeyboardEvent): void;
    closeOnTouchOutside(e: Event): void;
    protected generateHtmlId(): string;
    render(): JSX.Element;
}
export {};
