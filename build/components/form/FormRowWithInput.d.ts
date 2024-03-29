/**
 * Represents a form row with an <input> field.
 *
 * This is a component so that we can abstract things like animation of the label.
 */
import React, { ReactNode } from 'react';
interface props {
    children?: Readonly<ReactNode>;
    isRequired?: boolean;
    isDisabled?: boolean;
    hideAsterisks?: boolean;
    selectAllOnFocus?: boolean;
    autofocus?: boolean;
    type?: string;
    value: string;
    label: string;
    name: string;
    comment?: React.ReactNode;
    icon?: React.ReactNode;
    errMessage?: string;
    onChange: (newVal: string) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
export declare const FormRowWithInput: React.FC<props>;
export {};
