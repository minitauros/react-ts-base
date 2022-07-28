import React, { ReactNode } from 'react';
interface props {
    children?: Readonly<ReactNode>;
    isRequired?: boolean;
    isDisabled?: boolean;
    hideAsterisks?: boolean;
    type?: string;
    value: string;
    label: string;
    name: string;
    comment?: React.ReactNode;
    errMessage?: string;
    onChange: (newVal: string) => void;
}
export declare const FormRowWithInput: React.FC<props>;
export {};
