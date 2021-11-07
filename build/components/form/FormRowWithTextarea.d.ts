/**
 * Represents a form row with a <textarea> field.
 *
 * This is a component so that we can abstract things like animation of the label.
 */
import React, { ReactNode } from 'react';
interface props {
    isRequired?: boolean;
    hideAsterisks?: boolean;
    selectAllOnFocus?: boolean;
    autofocus?: boolean;
    value: string;
    onChange: (newVal: string) => void;
    onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    label?: string;
    placeholder?: string;
    name: string;
    children?: Readonly<{
        children?: ReactNode;
    }>;
    style?: object;
    comment?: string;
    errMessage?: string;
}
export declare const FormRowWithTextarea: React.FC<props>;
export {};
