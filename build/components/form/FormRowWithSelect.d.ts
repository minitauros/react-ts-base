/**
 * Represents a form row with a <select> field.
 *
 * This is a component so that we can abstract things like animation of the label.
 */
import React, { ReactNode } from 'react';
export interface selectOptions {
    [key: string]: string | number;
}
interface props {
    isRequired?: boolean;
    hideAsterisks?: boolean;
    autofocus?: boolean;
    value: string;
    onChange: (newVal: string) => void;
    label: string;
    name: string;
    options: selectOptions;
    children?: Readonly<{
        children?: ReactNode;
    }>;
    style?: object;
    comment?: string;
    errMessage?: string;
}
export declare const FormRowWithSelect: React.FC<props>;
export {};
