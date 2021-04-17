import React, { ReactNode } from 'react';
interface props {
    children: Readonly<{
        children?: ReactNode;
    }>;
    classNames?: Array<string>;
    centerText?: boolean;
    xs?: number;
    s?: number;
    m?: number;
    l?: number;
    xl?: number;
}
export declare const GridCell: React.FC<props>;
export {};
